import React from "react";
import "./ProductDetailDesciption.scss";
import { Link } from "react-router-dom";
import Quantity from "./../quantity/Quantity";
import Rating from '../../../components/rating/rating'

function ProductDetailDesciption(props) {
  return (
    <div className="productDetailDesciption">
      <div className="productDetailDesciption-heading">
        <h4>{props.data.description}</h4>
        <span className="d-block">Product Code: 374893</span>
        <span>
          Brand:{" "}
          <Link className="link" to="/">
            Samsung
          </Link>
        </span>
        <Rating/>
        </div>
      <div className="productDetailDesciption-price">
        <h4 className="d-inline productDetailDesciption-price-actualPrice">
          Rs.{props.data.actualPrice}
        </h4>
        <span className="d-inline mx-3 productDetailDesciption-price-growPrice">
          Rs.{props.data.growPrice}
        </span>
        <p className="d-inline productDetailDesciption-price-discountPrice">
          You save Rs.{props.data.discountedPrice}
        </p>
      </div>
      <div className="productDetailDesciption-quantity">
        <Quantity />
        <span className="ml-md-3  productDetailDesciption-quantity-detail">
          Call us for Bulk Purchases: 986026218x
        </span>
      </div>
      <div className="productDetailDesciption-button">
        <button>Buy Now</button>
        <div>
          <i className="fa fa-heart" />
          <span className="ml-2">Save For Later</span>
        </div>
      </div>
      <div className="productDetailDesciption-icon">
        <div>
          <i className="fas fa-building mr-2"></i> <span>SaptaSoch Warehouse</span>
        </div>
        <div>
          <i className="fas fa-truck mr-2 "></i>{" "}
          <span>Express Delivery Available</span>
        </div>
      </div>

      <div className="productDetailDesciption-social">
      <p>Share With Friends</p>
      <i className="fa fa-facebook-official mt-3"></i>
      <i className="fa fa-twitter mx-4"></i>
      <i className="fa fa-instagram"></i>

      </div>
    </div>
  );
}
export default ProductDetailDesciption;
