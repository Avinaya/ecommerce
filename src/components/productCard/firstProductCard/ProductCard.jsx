import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ProductRating from './../../rating/ProductRating';

const ProductCard = (props) => {
  const history = useHistory();

  const getDetail = (param) => (e) => {
    e.preventDefault();
    history.push(`/product/${param.productId}`);
  };

  var limited = props.data.filter((val, i) => i < 6);
  const title = (props.title).toLowerCase();
  
  return (
    <div className="productCard">
      <div className="productCard-heading">
        <h5 className="d-inline productCard-heading-title ">{title+" Products"}</h5>
        <Link to={`/product-tag/${title}`} className=" productCard-heading-btn">
          See All Items
        </Link>
      </div>
      <div className="productCard-tools">
        {limited.map((val, index) => {
          return (
            <div key={index} className="productCard-tools-item" onClick={getDetail(val)}>
              <div className="productCard-tools-item-product">
                <img
                  src={val.productImageList[0].image}
                  alt="productName"
                />
              </div>
              <div className="productCard-tools-item-product productCard-tools-item-product-text ">
                <div>
                  <p className="productCard-tools-item-product-desc">
                    {val.productName}
                  </p>
                  <span className="productCard-tools-item-product-actual">
                    Rs.{val.salePrice}
                  </span>
                  <span className="productCard-tools-item-product-discount">
                    Rs.{(val.salePrice)+(val.discountValue)}
                  </span>
                  <p className="productCard-tools-item-product-save">
                    You save Rs.{val.discountValue}
                  </p>
                </div>
                <span>
                  <ProductRating/>
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
