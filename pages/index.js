import { EmptyState, Layout, Page } from "@shopify/polaris";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

const Index = () => (
  <Page>
    <Layout>
      {/* Polaris Empty state component helps to communicate the value of your app and its primary action when merchants first add it to their Shopify admin. */}
      <EmptyState
        heading="Discount your products temporarily"
        action={{
          content: "Select Products",
          onAction: () => console.log("clicked"),
        }}
        image={img}
      >
        Sample app using React and Next.js
      </EmptyState>
    </Layout>
  </Page>
);

export default Index;
