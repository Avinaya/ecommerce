import React from "react";
import "./ProductCategoryHeader.scss";
import { Link, NavLink } from "react-router-dom";

function ProductCategoryHeader(props) {
  const array = [];
  array.push(props.data.cat);
  array.push(props.data.subCat);
  array.push(props.data.subCatType);

  let arr = array.filter(Boolean);

  console.log("filterdjkkhfdkjah", arr);
  return (
    <div className="productCategoryHeader">
      <div className="productCategoryHeader-top">
        <div className="productCategoryHeader-top-item">
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <i className="fa fa-angle-right mx-2"></i>

          <Link to="/" className="link">
            <span style={arr.length > 2 ? {} : { color: "#016fed" }}>
              {arr[0]}
            </span>
          </Link>

          <i
            className="fa fa-angle-right mx-2 "
            style={arr.length > 2 ? {} : { display: "none" }}
          ></i>
          <Link to="/" className="link">
            <span
              className="subcategory"
              style={arr.length > 2 ? {} : { display: "none" }}
            >
              {arr[1]}
            </span>
          </Link>
        </div>
        <div className="productCategoryHeader-top-item productCategoryHeader-top-item2 color-text">
          {props.filter.number}-{props.filter.numberOfElements} of {props.filter.totalElements} results
        </div>
      </div>
      <div className="productCategoryHeader-bottom">
        <div className="productCategoryHeader-bottom-item">
          <h4 className="detailTopBar-menu-heading">{arr[arr.length - 1]}</h4>
        </div>
        <div className="productCategoryHeader-bottom-item">
          <div className="productCategoryHeader-bottom-item-price">
            Sort By:
          </div>
          <NavLink
            className="link link-color"
            to="/"
            activeStyle={{ border: "1px solid red", color: "red" }}
          >
            <div className="productCategoryHeader-bottom-item-price">
              Relevance
            </div>
          </NavLink>
          <NavLink className="link link-color" to="/">
            <div className="productCategoryHeader-bottom-item-price">
              Price-High To Low
            </div>
          </NavLink>
          <NavLink className="link link-color" to="/">
            <div className="productCategoryHeader-bottom-item-price">
              Price-Low To High
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProductCategoryHeader;
