import React from "react";
import "./Highlight.scss";
import { Link } from "react-router-dom";

const Highlight = () => {
  return (
    <div className="highlight">
      <div className="highlight-tools">
        <div className="highlight-tools-item highlight-item1">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
              data-target="#carouselExampleIndicators"
              data-slide-to="3"
            ></li>
            <li
            data-target="#carouselExampleIndicators"
            data-slide-to="4"
          ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
              <Link to="/">
                <img
                  src={require("../../image/sefty.jpg")}
                  className=" d-block w-100 "
                  alt="mobile"
                />
                </Link>
              </div>
              <div className="carousel-item">
              <Link to="/">
                <img
                  src={require("../../image/slider.jpg")}
                  className="d-block w-100"
                  alt="mobile"
                />
                </Link>
              </div>
              <div className="carousel-item">
              <Link to="/">
                <img
                  src={require("../../image/It.jpg")}
                  className="d-block w-100"
                  alt="mobile"
                />
                </Link>
              </div>
              <div className="carousel-item">
              <Link to="/">
              <img
                src={require("../../image/coca.jpg")}
                className="d-block w-100"
                alt="mobile"
              />
              </Link>
            </div>
            <div className="carousel-item">
            <Link to="/">
            <img
              src={require("../../image/home.jpg")}
              className="d-block w-100"
              alt="mobile"
            />
            </Link>
          </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only ">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="highlight-tools-item highlight-item2">
          <div className="highlight-item2-items">
          <Link to="/">
            <img src={require("../../image/mobile.jpg")} alt="mobile" />
            </Link>
          </div>
          <div className="highlight-item2-items">
          <Link to="/">
            <img src={require("../../image/policy.jpg")} alt="return" />
            </Link>
          </div>
          <div className="highlight-item2-items">
          <Link to="/">
            <img src={require("../../image/mask.jpg")} alt="mask" />
            </Link>
          </div>
          <div className="highlight-item2-items">
          <Link to="/">
            <img src={require("../../image/tv.jpg")} alt="tv" />
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Highlight;
