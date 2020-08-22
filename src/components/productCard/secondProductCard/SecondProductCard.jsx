import React from "react";
import "./SecondProductCard.scss";
import Rating from "../../rating/ProductRating";
import { useHistory } from "react-router-dom";

const SecondProductCard = (props) => {
  const history = useHistory();

  const getDetail = (param) => (e) => {
    e.preventDefault();
    history.push(`/product/${param.productId}`);
  };

const discount = Math.round(100 -(((props.data.salePrice)/(props.data.salePrice + props.data.discountValue))*100));
const fun = () =>{
  if(discount === 0){
    return 'discountNot'
  }else return 'discount'
}
  return (
    <div className="secondProductCard" onClick={getDetail(props.data)}>
      <div className="secondProductCard-tools">
        <div className="secondProductCard-tools-item secondProductCard-tools-item1">
          <div className="secondProductCard-tools-item1-image">
            <img src={props.data.productImageList[0].image} alt="" />
          </div>
          <span className={"secondProductCard-tools-item1-discount " +fun()}>
          {discount+"% Off"}
          </span>
        </div>

        <div className="secondProductCard-tools-item secondProductCard-tools-item-name">
          <span>{props.data.productName}</span>
        </div>
        <div className="secondProductCard-tools-item secondProductCard-tools-item-price">
          <span>{"Rs." + props.data.salePrice}</span>
          <span className={fun()}>
            {"Rs." + (props.data.salePrice + props.data.discountValue)}
          </span>
        </div>
        <div className="secondProductCard-tools-item secondProductCard-tools-item-seller">
          <span>Sell by Saptabazar</span>
        </div>
        <div className="secondProductCard-tools-item">
          <Rating />
        </div>
        <div className="secondProductCard-tools-item secondProductCard-tools-item-cart">
          <button className="btn" onClick={(e) => e.stopPropagation()}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default SecondProductCard;
