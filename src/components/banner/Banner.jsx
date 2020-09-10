import React from "react";
import "./Banner.scss";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-tools">
        <div className="banner-tools-item">
          <Link to="/">
            <img src={require("../../image/returnPolicy.png")} alt="banner" />
          </Link>
        </div>
        <div className="banner-tools-item">
          <Link to="/">
            <img src={require("../../image/2kbanner.jpg")} alt="banner" />
          </Link>
        </div>
        <div className="banner-tools-item">
          <Link to="/">
            <img src={require("../../image/bekobanner.jpg")} alt="banner" />
          </Link>
        </div>
        <div className="banner-tools-item">
          <Link to="/">
            <img
              src={require("../../image/freeshippingbanner.png")}
              alt="banner"
            />
          </Link>
        </div>
        <div className="banner-tools-item">
          <Link to="/">
            <img src={require("../../image/cocacolabanner.jpg")} alt="banner" />
          </Link>
        </div>
        <div className="banner-tools-item">
          <Link to="/">
            <img src={require("../../image/storebanner.png")} alt="banner" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
