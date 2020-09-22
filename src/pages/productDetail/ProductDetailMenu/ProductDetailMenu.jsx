import React from "react";
import "./ProductDetailMenu.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductDetailMenuShipping from "./productDetailMenuData/ProductDetailMenuShipping";
import ProductDetailMenuOverview from "./productDetailMenuData/ProductDetailMenuOverview";
import ProductDetailMenuWarranty from "./productDetailMenuData/ProductDetailMenuWarranty";
import ProductDetailMenuReturnPolicy from "./productDetailMenuData/ProductDetailMenuReturnPolicy";
import ProductDetailMenuReview from "./productDetailMenuData/ProductDetailMenuReview";

export default function ProductDetailMenu(props) {
  return (
    <div className="productDetailMenu">
      <Tabs className="tab">
        <TabList className="productDetailMenu-list">
          <Tab>
            <span className="productDetailMenu-name">Overview</span>
          </Tab>
          <Tab>
            <span className="productDetailMenu-name">Shipping</span>
          </Tab>
          <Tab>
            <span className="productDetailMenu-name">Warrenty</span>
          </Tab>
          <Tab>
            <span className="productDetailMenu-name">Return Policy</span>
          </Tab>
          <Tab>
            <span className="productDetailMenu-name">Reviews</span>
          </Tab>
        </TabList>

        <TabPanel>
          <ProductDetailMenuOverview data={props.data} />
        </TabPanel>
        <TabPanel>
          <ProductDetailMenuShipping />
        </TabPanel>
        <TabPanel>
          <ProductDetailMenuWarranty />
        </TabPanel>
        <TabPanel>
          <ProductDetailMenuReturnPolicy />
        </TabPanel>
        <TabPanel>
          <ProductDetailMenuReview data={props.data.productId} name={props.data.productName}/>
        </TabPanel>
      </Tabs>
    </div>
  );
}
