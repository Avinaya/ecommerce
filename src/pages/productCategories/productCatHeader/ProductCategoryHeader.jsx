import React, { useState } from "react";
import "./ProductCategoryHeader.scss";
import { Link, useHistory } from "react-router-dom";

function ProductCategoryHeader(props) {
  const history = useHistory();
  const array = [];
  array.push(props.category);
  array.push(props.subCategory);
  array.push(props.subCategoryType);

  let arr = array.filter(Boolean);

  const [appState, changeState] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }],
  });
  const [initial, setInitial] = useState(" initialSort");

  const toggleActive = (index, url) => (e) => {
    e.preventDefault();
    setInitial("");
    changeState({ ...appState, activeObject: appState.objects[index] });
    history.push(`${props.url}` + url);
  };

  function toggleActiveStyle(index) {
    if (appState.objects[index] === appState.activeObject) {
      return " sortActive";
    } else {
      return " sortInactive";
    }
  }

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
          {props.filter.number}-{props.filter.numberOfElements} of{" "}
          {props.filter.totalElements} results
        </div>
      </div>
      <div className="productCategoryHeader-bottom">
        <div className="productCategoryHeader-bottom-item">
          <h4 className="detailTopBar-menu-heading">{arr[arr.length - 1]}</h4>
        </div>
        <div className="productCategoryHeader-bottom-item">
          <div className="productCategoryHeader-bottom-item-price sort">
            Sort By:
          </div>
          <div
            className={
              toggleActiveStyle(1) +
              " productCategoryHeader-bottom-item-price" +
              initial
            }
            onClick={toggleActive(1, "?sort=")}
          >
            Relevance
          </div>
          <div
            className={
              toggleActiveStyle(2) + " productCategoryHeader-bottom-item-price borderLast"
            }
            onClick={toggleActive(2, "?sort=priceDesc")}
          >
            Price-High To Low
          </div>
          <div
            className={
              toggleActiveStyle(3) + " productCategoryHeader-bottom-item-price "
            }
            onClick={toggleActive(3, "?sort=priceAsc")}
          >
            Price-Low To High
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategoryHeader;
