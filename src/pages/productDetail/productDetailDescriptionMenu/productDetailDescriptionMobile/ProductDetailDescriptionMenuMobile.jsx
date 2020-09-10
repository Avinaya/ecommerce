import React from "react";
import "./ProductDetailDescriptionMenuMobile.scss";
import ProductDetailMenuSpecification from "../productDetailMenuSpecification/ProductDetailMenuSpecification";
import ProductDetailMenuShipping from "./../productDetailMenuShipping/ProductDetailMenuShipping";
import ProductDetailMenuWarrenty from "./../productDetailMenuWarrenty/ProductDetailMenuWarrenty";
import ProductDetailMenuReturn from "./../productDetailMenuReturn/ProductDetailMenuReturn";
import ProductDetailMenuReview from "./../productDetailMenuReview/ProductDetailMenuReview";

export default function ProductDetailDescriptionMenuMobile() {
  return (
    <div class="col accordion ">
      <div class="tabs">
        <div class="tab">
          <input className="tab-input" type="radio" id="rd1" name="rd" />
          <label class="tab-label" for="rd1">
            Specifications
          </label>
          <div class="tab-content">
            <ProductDetailMenuSpecification />
          </div>
        </div>

        <div class="tab">
          <input className="tab-input" type="radio" id="rd2" name="rd" />
          <label class="tab-label" for="rd2">
            Shipping
          </label>
          <div class="tab-content">
            <ProductDetailMenuShipping view="view"/>
          </div>
        </div>
        <div class="tab">
          <input className="tab-input" type="radio" id="rd3" name="rd" />
          <label class="tab-label" for="rd3">
            Warranty
          </label>
          <div class="tab-content">
            <ProductDetailMenuWarrenty view="view"/>
          </div>
        </div>
        <div class="tab">
          <input className="tab-input" type="radio" id="rd4" name="rd" />
          <label class="tab-label" for="rd4">
            Return Policy
          </label>
          <div class="tab-content">
            <ProductDetailMenuReturn view="view"/>
          </div>
        </div>

        <div class="tab">
          <input className="tab-input" type="radio" id="rd5" name="rd" />
          <label class="tab-label" for="rd5">
            Reviews
          </label>
          <div class="tab-content">
            <ProductDetailMenuReview view="view"/>
          </div>
        </div>
      </div>
    </div>
  );
}
