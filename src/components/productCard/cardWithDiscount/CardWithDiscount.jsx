import React from "react";
import "./CardWithDiscount.scss";

export default function CardWithDiscount(props) {
  return (
    <div className="cardDiscount">
      <div className="cardDiscount-item ">
        <img src={props.data.image1} alt="image1" />
      </div>
      <div className="cardDiscount-item-des mt-2">
        <p className=" text-truncate">
          {props.data.description}
        </p>
        <span className="cardDiscount-item-actual">
          Rs.{props.data.actualPrice}
        </span>
        <span className="cardDiscount-item-dis">
          Rs.{props.data.growPrice}
        </span>
        <p className="cardDiscount-item-grow">
          You save Rs.{props.data.discountedPrice}
        </p>
      </div>
    </div>
  );
}
