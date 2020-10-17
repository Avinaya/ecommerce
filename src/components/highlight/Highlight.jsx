import React, { useContext } from "react";
import "./Highlight.scss";
import { Carousel } from "react-bootstrap";
import HighlightSecondary from "./HighlightSecondary";
import { Link } from "react-router-dom";
import BaseDataContex from "../contexApi/baseApiCall/BaseApiCall";

function Highlight() {
  const value = useContext(BaseDataContex);

  let limited =
    value.highlight && value.highlight.data.filter((val, i) => i < 5);
  return (
    <div className="highlight">
      <div className="highlight-tools">
        <div className="highlight-tools-item highlight-item1">
          <Carousel>
            {limited &&
              limited.map((val, index) => {
                return (
                  <Carousel.Item key={index}>
                    <Link className="link" to="/">
                      <img
                        className="d-block w-100"
                        src={val.highlightImage}
                        alt={val.highlightName}
                      />
                    </Link>
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </div>
        <div className="highlight-tools-item highlight-item2">
          <HighlightSecondary />
        </div>
      </div>
    </div>
  );
}

export default Highlight;
