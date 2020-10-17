import React from "react";
import "./ProductCategoriesProducts.scss";
import SecondProductCard from "../../../components/productCard/secondProductCard/SecondProductCard";
import ProductCatProductsPage from "./productCatProductsPage/ProductCatProductsPage";

function ProductCategoriesProducts(props) {
  const data = props.data.content;

  return (
    <React.Fragment>
      <div className="productCategoriesProducts">
        {data &&
          data.map((val, index) => {
            return (
              <div key={index} className="productCategoriesProducts-items">
                <SecondProductCard data={val} />
              </div>
            );
          })}
      </div>

      {props.data ? <ProductCatProductsPage data={props.data} /> : null}
    </React.Fragment>
  );
}

export default ProductCategoriesProducts;
