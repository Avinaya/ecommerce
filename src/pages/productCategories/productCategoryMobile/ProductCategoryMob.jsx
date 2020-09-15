import React from "react";
import "./ProductCategoryMob.scss";

function ProductCategoryMob() {


  return (
    <React.Fragment>
      <div className="productCategory-mob">
        <div className="productCategory-mob-item" >Filter</div>
        <div className="productCategory-mob-item">|</div>
        <div className="productCategory-mob-item">Sort</div>
      </div>
    </React.Fragment>
  );
}

export default ProductCategoryMob;
