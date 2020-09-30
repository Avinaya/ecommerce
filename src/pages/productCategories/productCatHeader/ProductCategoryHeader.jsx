import React from "react";
import "./ProductCategoryHeader.scss";
import { Link, useHistory } from "react-router-dom";
import queryString from "query-string";

function ProductCategoryHeader(props) {
  const history = useHistory();
  const array = [];
  array.push(props.category);
  array.push(props.subCategory);
  array.push(props.subCategoryType);

  let arr = array.filter(Boolean);

  let productSort = queryString.parse(history.location.search).sort;

  const toggleActive = (url) => (e) => {
    e.preventDefault();
    let currentUrlParams = new URLSearchParams(history.location.search);
    currentUrlParams.set("sort",url)
    history.push(history.location.pathname + "?" + currentUrlParams.toString());

  };

  const handleClickCat = (param) => (e) => {
    e.preventDefault();
    localStorage.setItem("category", param);
    localStorage.setItem("subCategory", "");
    localStorage.setItem("subCategoryType", "");
    history.push({
      pathname: `/category/${param.replace(/ /g, "-")}`,
    });
  };

  const handleClickSubCat = (cat, subCat) => (e) => {
    e.preventDefault();
    localStorage.setItem("category", cat);
    localStorage.setItem("subCategory", subCat);
    localStorage.setItem("subCategoryType", "");

    history.push({
      pathname: `/category/${subCat.replace(/ /g, "-")}`,
    });
  };

  return (
    <div className="productCategoryHeader">
      <div className="productCategoryHeader-top">
        <div className="productCategoryHeader-top-item">
          <div className="productCategoryHeader-top-item1">
            <Link to="/" className="link">
              <span>Home</span>
            </Link>
            <i className="fa fa-angle-right mx-2"></i>

            <span
              style={arr.length > 2 ? {} : { color: "#016fed" }}
              onClick={handleClickCat(arr[0])}
            >
              {arr[0]}
            </span>

            <i
              className="fa fa-angle-right mx-2 "
              style={arr.length > 2 ? {} : { display: "none" }}
            ></i>
            <span
              className="subcategory"
              style={arr.length > 2 ? {} : { display: "none" }}
              onClick={handleClickSubCat(arr[0], arr[1])}
            >
              {arr[1]}
            </span>
          </div>
        </div>
        <div className="productCategoryHeader-top-item productCategoryHeader-top-item2 color-text">
          {props.filter.number}-{props.filter.numberOfElements} of{" "}
          {props.filter.totalElements} results
        </div>
      </div>
      <div className="productCategoryHeader-bottom">
        <div className="productCategoryHeader-bottom-item">
          <h4 className="detailTopBar-menu-heading">{arr[arr.length - 1]}</h4>
        </div>
        <div className="productCategoryHeader-bottom-item productCategoryHeader-bottom-item2">
          <div className="productCategoryHeader-bottom-item-price sort">
            Sort By:
          </div>
          <div
            className="productCategoryHeader-bottom-item-price"
            onClick={toggleActive("")}
            style={
              productSort === "" || history.location.search === "" || productSort === undefined
                ? { color: "#016fed", border: "1px solid #016fed" }
                : { border: "1px solid rgba(124, 122, 122, 0.671)" }
            }
          >
            Relevance
          </div>
          <div
            className="productCategoryHeader-bottom-item-price borderLast"
            onClick={toggleActive("priceDesc")}
            style={
              productSort === "priceDesc"
                ? { color: "#016fed", border: "1px solid #016fed" }
                : { border: "1px solid rgba(124, 122, 122, 0.671)" }
            }
          >
            Price-High To Low
          </div>
          <div
            className="productCategoryHeader-bottom-item-price"
            onClick={toggleActive("priceAsc")}
            style={
              productSort === "priceAsc"
                ? { color: "#016fed", border: "1px solid #016fed" }
                : { border: "1px solid rgba(124, 122, 122, 0.671)" }
            }
          >
            Price-Low To High
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategoryHeader;
