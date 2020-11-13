import App from "next/app";
import Head from "next/head";

//Polaris is shopify component framework used to keep styling shopify-esque.
import { AppProvider } from "@shopify/polaris";
// offers React component wrappers for some App Bridge actions
import { Provider } from "@shopify/app-bridge-react";
// Adds the Polaris styles
import "@shopify/polaris/dist/styles.css";

// Translations are required for AppProvider
import translations from "@shopify/polaris/locales/en.json";
import Cookies from "js-cookie";
import ClientRouter from "../components/ClientRouter";
//Apollo default enables browsers to easily authenticate by passing credentials with every request.
import ApolloClient from "apollo-boost";
//Provider for Apollo
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  fetchOptions: {
    credentials: "include",
  },
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    //config to pass to provider component
    const config = {
      apiKey: API_KEY,
      shopOrigin: Cookies.get("shopOrigin"),
      forceRedirect: true,
    };
    return (
      <>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        {/* This provides the app with the credentials to access the shop */}
        <Provider config={config}>
          {/* This overrides App Bridge's default behaviour of routing changes from outside the app by updating the iframe URL. We do this because this app is using Client-side routing through Next.js. This allows us to avoid unnecessary full-page reloads. */}
          <ClientRouter />

          {/* Polaris AppProvider component passes down the props and context */}
          {/* When using Polaris, you are able to import translations from all languages supported by the core Shopify product and consume them through the i18n prop. */}
          <AppProvider i18n={translations}>
            {/* ApolloProvider gives us access to the Apollo query component */}
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </AppProvider>
        </Provider>
      </>
    );
  }
}

export default MyApp;
