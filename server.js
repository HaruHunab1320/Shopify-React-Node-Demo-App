require("isomorphic-fetch");
//process .env files
const dotenv = require("dotenv");
// web framework built by express
const Koa = require("koa");
//React framework that takes care of some redundancies in development
const next = require("next");
//Middleware to authenticate a Koa application with Shopify.
const { default: createShopifyAuth } = require("@shopify/koa-shopify-auth");
const { verifyRequest } = require("@shopify/koa-shopify-auth");
const session = require("koa-session");

dotenv.config();
const { default: graphQLProxy } = require("@shopify/koa-shopify-graphql-proxy");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;

app.prepare().then(() => {
  //initialize a new koa server
  const server = new Koa();
  // sets up secure session data on each request
  server.use(session({ secure: true, sameSite: "none" }, server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  // sets up shopify auth
  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ["read_products"],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        ctx.cookies.set("shopOrigin", shop, {
          httpOnly: false,
          secure: true,
          sameSite: "none",
        });
        ctx.redirect("/");
      },
    })
  );

  server.use(graphQLProxy());
  // Everything after this point will require authentication

  // For VerifyRequest() options:
  // path to redirect to if verification fails
  // defaults to '/auth'
  // (authRoute: "/foo/auth"),
  // path to redirect to if verification fails and there is no shop on the query
  // defaults to '/auth'
  // (fallbackRoute: "/install")
  server.use(verifyRequest());

  // application code
  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
    return;
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
