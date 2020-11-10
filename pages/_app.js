import App from "next/app";
import Head from "next/head";

//Polaris is shopify component framework used to keep styling shopify-esque.
import { AppProvider } from "@shopify/polaris";
// Adds the Polaris styles
import "@shopify/polaris/dist/styles.css";

// Translations are required for AppProvider
import translations from "@shopify/polaris/locales/en.json";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Sample App</title>
          <meta charSet="utf-8" />
        </Head>
        {/* Polaris AppProvider component passes down the props and context */}
        {/* When using Polaris, you are able to import translations from all languages supported by the core Shopify product and consume them through the i18n prop. */}
        <AppProvider i18n={translations}>
          <Component {...pageProps} />
        </AppProvider>
      </>
    );
  }
}

export default MyApp;
