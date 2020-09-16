import React, { useContext } from "react";
import BaseDataContex from "../../contexApi/baseApiCall/BaseApiCall";
import ProductCard from "./../../productCard/firstProductCard/ProductCard";

const title = "BestSelling";

function BestSelling() {
  const value = useContext(BaseDataContex);

  return (
    <ProductCard
      data={value.bestSelling && value.bestSelling.data.content}
      title={title}
    />
  );
}

export default BestSelling;
