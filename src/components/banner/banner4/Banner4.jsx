import React from "react";
import "./Banner4.scss";
import { Link } from "react-router-dom";

const Banner4 = () => {
  return (
    <div className="banner4">
      <div className="banner4-tools">
        <div className="banner4-tools-item">
          <img src={require("../../../image/groceries.jpg")} alt="groceries" />
          <div className="banner4-tools-item-description">
            <h6>Groceries</h6>
            <Link className="link banner4-link d-block " to="/">
              One Click Away
            </Link>
            <Link className="link banner4-tools-item-link" to="/">
              Shop Now <i className="fas fa-angle-right	ml-2"></i>
            </Link>
          </div>
        </div>

        <div className="banner4-tools-item">
          <img src={require("../../../image/games.jpg")} alt="games" />
          <div className="banner4-tools-item-description">
            <h6>Games</h6>
            <Link className="link banner4-link d-block " to="/">
              Play It!
            </Link>
            <Link className="link banner4-tools-item-link" to="/">
              Shop Now <i className="fas fa-angle-right	ml-2"></i>
            </Link>
          </div>
        </div>

        <div className="banner4-tools-item">
          <img src={require("../../../image/generator.jpg")} alt="generator" />
          <div className="banner4-tools-item-description">
            <h6>generator</h6>
            <Link className="link banner4-link d-block" to="/">
              Power Supply
            </Link>
            <Link className="link banner4-tools-item-link" to="/">
              Shop Now <i className="fas fa-angle-right	ml-2"></i>
            </Link>
          </div>
        </div>

        <div className="banner4-tools-item">
          <img src={require("../../../image/wine.jpg")} alt="Drinks" />
          <div className="banner4-tools-item-description">
            <h6>Drinks</h6>
            <Link className="link banner4-link d-block" to="/">
              Cheers to the good stuff
            </Link>
            <Link className="link banner4-tools-item-link" to="/">
              Shop Now <i className="fas fa-angle-right	ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner4;
