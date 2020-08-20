import React, { Component } from "react";
import "./ProductDetailDescriptionMenu.scss";
import ProductDetailMenuSpecification from "./productDetailMenuSpecification/ProductDetailMenuSpecification";
import ProductDetailMenuShipping from './productDetailMenuShipping/ProductDetailMenuShipping';
import ProductDetailMenuWarrenty from "./productDetailMenuWarrenty/ProductDetailMenuWarrenty";
import ProductDetailMenuReturn from "./productDetailMenuReturn/ProductDetailMenuReturn";
import ProductDetailMenuReview from "./productDetailMenuReview/ProductDetailMenuReview";
import ProductDetailDescriptionMenuMobile from "./productDetailDescriptionMobile/ProductDetailDescriptionMenuMobile";

class ProductDetailDescriptionMenu extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="productDetailDescriptionMenu">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              class="nav-item nav-link active productDetailDescriptionMenu-menu"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-specification"
            
            >
            Specifications 
            </a>
            <a
              class="nav-item nav-link productDetailDescriptionMenu-menu"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-shipping"
            >
              Shipping
            </a>
            <a
              class="nav-item nav-link productDetailDescriptionMenu-menu"
              id="nav-contact-tab"
              data-toggle="tab"
              href="#nav-warrenty"
            >
              Warranty
            </a>
            <a
            class="nav-item nav-link productDetailDescriptionMenu-menu"
            id="nav-contact-tab"
            data-toggle="tab"
            href="#nav-return"
          >
            Return Policy
          </a>
          <a
          class="nav-item nav-link productDetailDescriptionMenu-menu"
          id="nav-contact-tab"
          data-toggle="tab"
          href="#nav-review"
        >
          Reviews
        </a>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
        <ProductDetailMenuSpecification data={this.props.data}/>
        <ProductDetailMenuShipping/>
        <ProductDetailMenuWarrenty/>
        <ProductDetailMenuReturn/>
        <ProductDetailMenuReview/>
        </div>
      </div>
       <ProductDetailDescriptionMenuMobile/>

      </React.Fragment>
    );
  }
}
export default ProductDetailDescriptionMenu;
