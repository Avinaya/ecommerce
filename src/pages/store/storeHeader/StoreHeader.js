import React from "react";
import { useHistory } from "react-router-dom";
import "./StoreHeader.scss";

function StoreHeader() {
  const history = useHistory();
  return (
    <div className="storeHeader">
      <div className="storeHeader-image">
        <img
          src="http://res.cloudinary.com/ds5zgwshl/image/upload/v1606565952/hnjkzwe3gvgeg37cc9ia.jpg"
          alt=""
        />
      </div>
      <div className="storeHeader-title">
        {console.log(history)}
        <h3>Pashmina Shawls</h3>
        <h5>Fast Delivery Time. Rating: 4 <i className="fa fa-star"/></h5>
        <h5>Lalitpur-4 - 44600</h5>
        <h5>Pashmina Shawls Pvt Ltd</h5>
      </div>
    </div> 
  );
}

export default StoreHeader;
