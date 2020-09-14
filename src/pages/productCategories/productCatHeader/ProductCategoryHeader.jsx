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
    history.push({
      pathname: history.location.pathname,
      search: `${url}${
        history.location.query.price === null
          ? ""
          : history.location.query.price
      }`,
      query: {
        header: url,
        price:
          history.location.query.price === null
            ? ""
            : history.location.query.price,
      },
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
            onClick={toggleActive("?sort=")}
            style={
              productSort === "" || history.location.search === ""
                ? { color: "#016fed", border: "1px solid #016fed" }
                : { border: "1px solid rgba(124, 122, 122, 0.671)" }
            }
          >
            Relevance
          </div>
          <div
            className="productCategoryHeader-bottom-item-price borderLast"
            onClick={toggleActive("?sort=priceDesc")}
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
            onClick={toggleActive("?sort=priceAsc")}
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
