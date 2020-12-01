import React from "react";
import StoreCardLayout from "../storeCard/StoreCardLayout";
import "./StoreSearch.scss";
import { Link } from "react-router-dom";

function StoreSearch(props) {
  return (
    <>
      <div className="storeSearch">
        <input
          className="storeSearch-search"
          type="text"
          placeholder="Search Products"
        />
        <i className="fa fa-search" />
      </div>
      <div className="store-tag">
        {props.data ? (
          props.data.map((val, index) => {
            return (
              <a className="storeCard-title-link" href={"#" + val.subCatName}>
                <div key={index} className="store-tag-item">
                  {val.subCatName}
                </div>
              </a>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default StoreSearch;
