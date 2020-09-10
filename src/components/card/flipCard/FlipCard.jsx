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
            <li className="mb-2">
              <Link className="link" to="/">
                {props.data.categories1}
              </Link>
            </li>
            <li className="mb-2">
              <Link className="link" to="/">
                {props.data.categories2}
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                {props.data.categories3}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
