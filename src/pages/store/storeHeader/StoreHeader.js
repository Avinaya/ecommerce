import React from "react";
import "./StoreHeader.scss";

function StoreHeader(props) {
  return (
    <div className="storeHeader">
      <div className="storeHeader-image">
        <img
          src={props.data?props.data.image:""}
          alt=""
        />
      </div>
      <div className="storeHeader-title">
        <h3>{props.data ? props.data.vendorName : ""}</h3>
        <h5>
          Fast Delivery Time. Rating: 4 <i className="fa fa-star" />
        </h5>
        <h5>
          {props.data ? props.data.district : ""} - {""}
          {props.data ? props.data.zipCode : ""}
        </h5>
        <h5>{props.data ? props.data.vendorName : ""} Pvt Ltd</h5>
      </div>
    </div>
  );
}

export default StoreHeader;
