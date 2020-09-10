import React, { Component } from "react";
import ProductCard from "./../../productCard/ProductCard";
import { RecommendedProductConsumer } from "../../contexApi/contexApiRecommended/ContexApiRecommended";

const title = "Recommended Products";

class Recommended extends Component {
  render() {
    return (
      <React.Fragment>
        <RecommendedProductConsumer>
          {(value) => {
            return <ProductCard data={value} title={title} />;
          }}
        </RecommendedProductConsumer>
      </React.Fragment>
    );
  }
}

export default Recommended;
