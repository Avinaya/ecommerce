import React from "react";
import "./ProductCategoriesProducts.scss";
import SecondProductCard from "../../../components/productCard/secondProductCard/SecondProductCard";
import ProductCatProductsPage from "./productCatProductsPage/ProductCatProductsPage";
import NoProduct from "./../../../components/noProduct/NoProduct";

function ProductCategoriesProducts(props) {
  const data = props.data.content;

  return (
    <>
      {Array.isArray(data) && data.length ? (
        <>
          <div
            className="productCategoriesProducts"
            style={
              Array.isArray(data) && data.length < 4 ? { gridTemplateColumns: "25%" } : {}
            }
          >
            {data.map((val, index) => {
              return (
                <div key={index} className="productCategoriesProducts-items">
                  <SecondProductCard data={val} />
                </div>
              );
            })}
          </div>
          {props.data ? <ProductCatProductsPage data={props.data} /> : null}
        </>
      ) : (
        <NoProduct></NoProduct>
      )}
    </>
  );
}

export default ProductCategoriesProducts;
