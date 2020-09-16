import React, { useContext } from "react";
import BaseDataContex from "../../contexApi/baseApiCall/BaseApiCall";
import ProductCard from "./../../productCard/firstProductCard/ProductCard";

const title = "Latest";

function Latest() {
  const value = useContext(BaseDataContex);

  return (
    <ProductCard
      data={value.latest && value.latest.data.content}
      title={title}
    />
  );
}

export default Latest;
