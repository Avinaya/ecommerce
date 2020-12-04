import React from "react";
import StoreCardLayout from "../storeCard/StoreCardLayout";
import "./StoreSearch.scss";
import NoProduct from "./../../../components/noProduct/NoProduct";

function StoreSearch(props) {
  return (
    <>
      {props.data.length !== 0 ? (
        <>
          <div className="storeSearch">
            <input
              className="storeSearch-search"
              type="text"
              placeholder="Search Products"
            />
            <i className="fa fa-search" />
          </div>
          {console.log("length ", props.data.length)}
          <div className="store-tag">
            {props.data.map((val, index) => {
              return (
                <a className="storeCard-title-link" href={"#" + val.subCatName}>
                  <div key={index} className="store-tag-item">
                    {val.subCatName}
                  </div>
                </a>
              );
            })}
          </div>
        </>
      ) : (
        <NoProduct/>
      )}
    </>
  );
}

export default StoreSearch;
