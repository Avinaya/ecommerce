import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Rating from "./../rating/rating";

const ProductCard = (props) => {
  const history = useHistory();

  const getDetail = (param) => (e) => {
    e.preventDefault();
    history.push(`/product/${param.productId}`);
  };
  var limited = props.data.filter((val, i) => i < 6);
  return (
    <div className="recommended">
      <div className="recommended-heading">
        <h5 className="d-inline recommended-heading-title ">{props.title}</h5>
        <Link to="/" className=" recommended-heading-btn">
          See All Items
        </Link>
      </div>
      <div className="recommended-tools">
        {limited.map((val, index) => {
          return (
            <div key={index} className="recommended-tools-item" onClick={getDetail(val)}>
              <div className="recommended-tools-item-product">
                <img
                  src={val.productImageList[0].image}
                  alt="productName"
                />
              </div>
              <div className="recommended-tools-item-product recommended-tools-item-product-text ">
                <div>
                  <p className="recommended-tools-item-product-desc">
                    {val.productName}
                  </p>
                  <span className="recommended-tools-item-product-actual">
                    Rs.{val.salePrice}
                  </span>
                  <span className="recommended-tools-item-product-discount">
                    Rs.{(val.salePrice)+(val.discountValue)}
                  </span>
                  <p className="recommended-tools-item-product-save">
                    You save Rs.{val.discountValue}
                  </p>
                </div>
                <span>
                  <Rating />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
