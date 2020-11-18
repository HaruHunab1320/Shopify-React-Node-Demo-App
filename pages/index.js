import React from "react";
import { EmptyState, Layout, Page } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
//a cross-browser JavaScript library for managing localStorage,
import store from "store-js";
import ResourceListWithProducts from "../components/ResourceList";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

class Index extends React.Component {
  state = { open: false };
  render() {
    const emptyState = !store.get("ids");
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
        {emptyState ? (
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
              <p>Select products to change their price temporarily.</p>
            </EmptyState>
          </Layout>
        ) : (
          <ResourceListWithProducts />
        )}
      </Page>
    );
  }

  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    // This works well for testing our development app, but we should store these IDS in a database
    store.set("ids", idsFromResources);
  };
}

export default Index;
