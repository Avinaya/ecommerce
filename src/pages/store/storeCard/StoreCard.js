import React, { useState, useEffect } from "react";
import "./StoreCard.scss";
import LoadingComponent from "../../../components/loadingComponent/LoadingComponent";
import StoreCardLayout from "./StoreCardLayout";

function StoreCard(props) {
  return (
    <>
      {props.data ? (
        props.data.map((val, index) => {
          return (
            <React.Fragment key={index}>
              <div className="storeCard-title" id={val.subCatName}>
                <h2>{val.subCatName}</h2>
              </div>
              <div
                className="storeCard"
                style={
                  val.products.length < 3 ? {gridTemplateColumns: "repeat(auto-fit, minmax(13rem, 19%))"
                  } : {}
                }
              >
                {val.products ? (
                  val.products.map((value, indexs) => {
                    return (
                      <StoreCardLayout
                        key={indexs}
                        data={value}
                        subCat={val.subCatName}
                      />
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
            </React.Fragment>
          );
        })
      ) : (
        <LoadingComponent />
      )}
    </>
  );
}

export default StoreCard;
