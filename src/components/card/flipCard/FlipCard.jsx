import React from "react";
import "./FlipCard.scss";
import { Link } from "react-router-dom";

const FlipCard = (props) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.data.imageFront} alt="Avatar" />
          <p>{props.data.subHeading}</p>
        </div>
        <div className="flip-card-back">
          <div className="flip-card-back-heading">
            <span>{props.data.subHeading}</span>
            <img src={props.data.imageBack} alt="computer" />
          </div>
          <ul>
            <Link className="link" to="/">
              <li className="mb-2">{props.data.categories1}</li>
            </Link>
            <Link className="link" to="/">
              <li className="mb-2">{props.data.categories2}</li>
            </Link>
            <Link className="link" to="/">
              <li>{props.data.categories3}</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
