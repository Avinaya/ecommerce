import React, { useContext } from "react";
import BaseDataContex from "../../contexApi/baseApiCall/BaseApiCall";
import ProductCard from "./../../productCard/firstProductCard/ProductCard";

const title = "Recommended";

function Recommended() {
  const value = useContext(BaseDataContex);

  return (
    <ProductCard
      data={value.recommended && value.recommended.data.content}
      title={title}
    />
  );
}

export default Recommended;
