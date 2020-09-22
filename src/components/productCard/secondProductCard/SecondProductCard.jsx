import React, { useState, useEffect } from "react";
import "./SecondProductCard.scss";
import Rating from "../../rating/ProductRating";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../../components/contexApi/stateProvider/StateProvider";

const SecondProductCard = (props) => {
  const history = useHistory();
  const initialImage = props.data.productImageList;

  const [imgSrc, setImgSrc] = useState();

  useEffect(() => {
    setImgSrc(initialImage && initialImage[0].image);
  }, [initialImage, props.data.productId]);

  const brand = props.data.brand;

  const [{ basket }, dispatch] = useStateValue();

  const AddToBasket = () => {
    //Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.data.productId,
        productImage: imgSrc,
        productName: props.data.productName,
        brand: brand.brandName,
        productQuantity: 1,
        salePrice: props.data.salePrice,
        discountValue: props.data.discountValue,
      },
    });
    history.push("/cart");
  };

  const getDetail = (param) => (e) => {
    e.preventDefault();
    history.push(`/product/${param.productId}`);
  };

  const discount = Math.round(
    100 -
      (props.data.salePrice /
        (props.data.salePrice + props.data.discountValue)) *
        100
  );
  const fun = () => {
    if (discount === 0) {
      return "discountNot";
    } else return "discount";
  };
  return (
    <div className="secondProductCard" onClick={getDetail(props.data)}>
      <div className="secondProductCard-tools">
        <div className="secondProductCard-tools-height">
          <div className="secondProductCard-tools-item secondProductCard-tools-item1">
            <div className="secondProductCard-tools-item1-image">
              <img src={props.data.productImageList[0].image} alt="" />
            </div>
            <span className={"secondProductCard-tools-item1-discount " + fun()}>
              {discount + "% Off"}
            </span>
          </div>
        </div>

        <div className="secondProductCard-tools-height">
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

          <div
            className="secondProductCard-tools-item secondProductCard-tools-item-rating"
            style={props.style === false ? { display: "none" } : {}}
          >
            <Rating />
          </div>
        </div>

        <div
          className="secondProductCard-tools-item secondProductCard-tools-item-cart"
          style={props.style === false ? { display: "none" } : {}}
        >
          <button className="btn" onClick={AddToBasket}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default SecondProductCard;
