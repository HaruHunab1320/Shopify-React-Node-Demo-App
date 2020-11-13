import React from "react";
import { EmptyState, Layout, Page } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      <Page>
        <TitleBar
          title="Sample App"
          primaryAction={{
            content: "Select products",
            onAction: () => this.setState({ open: true }),
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        <Layout>
          {/* Polaris Empty state component helps to communicate the value of your app and its primary action when merchants first add it to their Shopify admin. */}
          <EmptyState
            heading="Discount your products temporarily"
            action={{
              content: "Select Products",
              onAction: () => this.setState({ open: true }),
            }}
            image={img}
          >
            Sample app using React and Next.js
          </EmptyState>
        </Layout>
      </Page>
    );
  }
  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    console.log(idsFromResources);
  };
}

export default Index;
