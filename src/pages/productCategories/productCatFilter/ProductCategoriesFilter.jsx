import React from "react";
import "./ProductCategoriesFilter.scss";
import BrowseCategories from "./browseCategories/BrowseCategories";
import Price from "./price/Price";
import Brand from "./brand/Brand";
import Colour from "./colour/Colour";

function ProductCategoriesFilter(props) {
  return (
    <div id="accordion">
      <BrowseCategories/>
      <Price/>
      <Brand />
      <Colour />
    </div>
  );
}

export default ProductCategoriesFilter;
