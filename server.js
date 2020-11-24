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
const Router = require("koa-router");
//Webhooks
const {
  receiveWebhook,
  registerWebhook,
} = require("@shopify/koa-shopify-webhooks");
// Grab graphQL API Version
const { ApiVersion } = require("@shopify/koa-shopify-graphql-proxy");
const getSubscriptionUrl = require("./server/getSubscriptionUrl");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY, HOST } = process.env;

app.prepare().then(() => {
  //initialize a new koa server
  const server = new Koa();
  // initialize KOA router
  const router = new Router();
  // sets up secure session data on each request
  server.use(session({ secure: true, sameSite: "none" }, server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  // sets up shopify auth
  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ["read_products", "write_products"],
      //This needs to be async because getSubscriptionUrl is implemented with fetch
      async afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        ctx.cookies.set("shopOrigin", shop, {
          httpOnly: false,
          secure: true,
          sameSite: "none",
        });

        //Register web hook, Need to find the latest apiVersion
        const registration = await registerWebhook({
          address: `${HOST}/webhooks/products/create`,
          topic: "PRODUCTS_CREATE",
          accessToken,
          shop,
          apiVersion: ApiVersion.October19,
        });

        if (registration.success) {
          console.log("Successfully registered webhook!");
        } else {
          console.log("Failed to register webhook", registration.result);
        }
        await getSubscriptionUrl(ctx, accessToken, shop);
      },
    })
  );

  //Receive webhook when product is created
  const webhook = receiveWebhook({ secret: SHOPIFY_API_SECRET_KEY });

  router.post("/webhooks/products/create", webhook, (ctx) => {
    //In a production app, you would need to store the webhook in a database to access the response on the frontend.
    console.log("received webhook: ", ctx.state.webhook);
  });

  server.use(graphQLProxy({ version: ApiVersion.October19 }));

  // Everything after this point will require authentication

  // For VerifyRequest() options:
  /* path to redirect to if verification fails
  defaults to '/auth'
  (authRoute: "/foo/auth"),
  path to redirect to if verification fails and there is no shop on the query
  defaults to '/auth'
  (fallbackRoute: "/install")
  */

  // Send verifyRequest() and the app code through the route
  router.get("(.*)", verifyRequest(), async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });

  server.use(router.allowedMethods());
  server.use(router.routes());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
