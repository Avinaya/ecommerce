import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Brand() {
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://saptasoch.herokuapp.com/productBrand`
      );
      setBrand(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="card">
      <div
        className="card-header filterAccordion panel-heading collapsed"
        id="headingThree"
        data-toggle="collapse"
        data-target="#collapseThree"
        aria-expanded="true"
        aria-controls="collapseThree"
      >
        <span className="filterAccordion-heading accordion-toggle">Brand</span>
      </div>

      <div
        id="collapseThree"
        className="collapse show"
        aria-labelledby="headingThree"
      >
        <div className="card-body filterAccordion-body">
          <div className="productCategoryBrand">
            <ul className="list-unstyled browseCategory-list">
              {brand.map((val, index) => {
                return (
                  <li className="productCategoryBrand-list" key={index}>
                    {val.brandName}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
