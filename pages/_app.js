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
        <Provider config={config}>
          {/* Polaris AppProvider component passes down the props and context */}
          {/* When using Polaris, you are able to import translations from all languages supported by the core Shopify product and consume them through the i18n prop. */}
          <AppProvider i18n={translations}>
            <Component {...pageProps} />
          </AppProvider>
        </Provider>
      </>
    );
  }
}

export default MyApp;
