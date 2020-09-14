import React from "react";
import { useHistory } from "react-router-dom";

export default function Price() {
  const history = useHistory();

  function handleChange(event) {
    let price = event.target.value;
    history.push({
      pathname: history.location.pathname,
      search: `${
        history.location.query.header === null
          ? ""
          : history.location.query.header
      }${price}`,
      query: {
        header:
          history.location.query.header === null
            ? null
            : history.location.query.header,
        price: price,
      },
    });
  }

  return (
    <div className="card">
      <div
        className="card-header filterAccordion panel-heading collapsed"
        id="headingTwo"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <span className="filterAccordion-heading accordion-toggle">Price</span>
      </div>

      <div
        id="collapseTwo"
        className="collapse show"
        aria-labelledby="headingTwo"
      >
        <div className="card-body filterAccordion-body">
          <div className="radio-button">
            <label>
              <input
                type="radio"
                name="price"
                value="&max=2000&min=0"
                onChange={handleChange}
              />
              Under Rs.2000
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="price"
                value="&max=5000&min=2000"
                onChange={handleChange}
              />
              Rs.2000 - Rs.5000
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="price"
                value="&max=10000&min=5000"
                onChange={handleChange}
              />
              Rs.5000 - Rs.10000
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="price"
                value="&max=20000&min=10000"
                onChange={handleChange}
              />
              Rs.10000 - Rs.20000
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="price"
                value="&min=20000"
                onChange={handleChange}
              />
              Above Rs.20000
            </label>
            <br />
          </div>

          <div className="cumtom-price">
            <p>Custom Price Range</p>
            <div className="cumtom-price-input">
              <input type="text" placeholder="Rs.Min" />
              <input type="text" placeholder="Rs.Max" />
              <button>Go</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
