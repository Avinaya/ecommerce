import React from "react";
import "./ProductDetailMenuMobile.scss";
import ProductDetailMenuOverview from "./../productDetailMenuData/ProductDetailMenuOverview";
import ProductDetailMenuReview from "./../productDetailMenuData/ProductDetailMenuReview";
import ProductDetailMenuReturnPolicy from "./../productDetailMenuData/ProductDetailMenuReturnPolicy";
import ProductDetailMenuWarranty from "./../productDetailMenuData/ProductDetailMenuWarranty";
import ProductDetailMenuShipping from "./../productDetailMenuData/ProductDetailMenuShipping";

export default function ProductDetailMenuMobile(props) {
  return (
    <div className="col accordion ">
      <div className="tabs">
        <div className="tab">
          <input className="tab-input" type="radio" id="rd1" name="rd" />
          <label className="tab-label" for="rd1">
            Specifications
          </label>
          <div className="tab-content">
            <ProductDetailMenuOverview data={props.data} />
          </div>
        </div>

        <div className="tab">
          <input className="tab-input" type="radio" id="rd2" name="rd" />
          <label className="tab-label" for="rd2">
            Shipping
          </label>
          <div className="tab-content">
            <ProductDetailMenuShipping view="view" />
          </div>
        </div>
        <div className="tab">
          <input className="tab-input" type="radio" id="rd3" name="rd" />
          <label className="tab-label" for="rd3">
            Warranty
          </label>
          <div className="tab-content">
            <ProductDetailMenuWarranty view="view" />
          </div>
        </div>
        <div className="tab">
          <input className="tab-input" type="radio" id="rd4" name="rd" />
          <label className="tab-label" for="rd4">
            Return Policy
          </label>
          <div className="tab-content">
            <ProductDetailMenuReturnPolicy view="view" />
          </div>
        </div>

        <div className="tab">
          <input className="tab-input" type="radio" id="rd5" name="rd" />
          <label className="tab-label" for="rd5">
            Reviews
          </label>
          <div className="tab-content">
            <ProductDetailMenuReview view="view" />
          </div>
        </div>
      </div>
    </div>
  );
}
