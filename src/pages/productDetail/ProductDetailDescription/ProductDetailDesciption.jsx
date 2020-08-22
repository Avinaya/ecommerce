import React from "react";
import "./ProductDetailDesciption.scss";
import { Link } from "react-router-dom";
import Quantity from "./../quantity/Quantity";
import ProductRating from '../../../components/rating/ProductRating'

function ProductDetailDesciption(props) {

  const brand = props.data.brand;

  return (
    <div className="productDetailDesciption">
      <div className="productDetailDesciption-heading">
        <h4>{props.data.productName}</h4>
        <span className="d-block">Product Code: {props.data.productCode}</span>
        <span>
          <Link className="link" to="/">
          Brand: {brand && brand.brandName}
          </Link>
        </span>
        <ProductRating/>
        </div>
      <div className="productDetailDesciption-price">
        <h4 className="d-inline productDetailDesciption-price-actualPrice">
          Rs.{props.data.salePrice}
        </h4>
        <span className="d-inline mx-2 productDetailDesciption-price-growPrice">
          Rs.{(props.data.salePrice)+(props.data.discountValue)}
        </span>
        <p className="d-inline productDetailDesciption-price-discountPrice">
          You save Rs.{props.data.discountValue}
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
