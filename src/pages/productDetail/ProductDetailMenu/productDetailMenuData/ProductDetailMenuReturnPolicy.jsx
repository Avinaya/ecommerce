import React from "react";
import { Link } from "react-router-dom";

export default function ProductDetailMenuReturnPolicy() {
  return (
    <div className="productDetailMenuContent">
      <div className="return-policy">
        <img src={require("../../../../image/return.png")} alt="" />
        <div className="d-inline ml-4">
          <span>
            <strong>7 Day Return Guarantee</strong>
          </span>
          <p>
            For more information on the return shipping options, go to{" "}
            <Link className="link return-policy-link" to="/">
              SaptaBazar Return Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
