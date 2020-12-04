import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BaseDataContex from "../contexApi/baseApiCall/BaseApiCall";

function HighlightSecondary() {
  const value = useContext(BaseDataContex);
  let limited =
    value.secondaryHighlight &&
    value.secondaryHighlight.data.filter((val, i) => i < 4);
  return (
    <React.Fragment>
      {limited &&
        limited.map((val, index) => {
          return (
            <div key={index} className="highlight-item2-items">
              <Link to="/">
                <img
                  src={val.secondaryHighlightImage}
                  alt={val.secondaryHighlightName}
                />
              </Link>
            </div>
          );
        })}
    </React.Fragment>
  );
}

export default HighlightSecondary;
