import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";


export default function Price(props) {
  const history = useHistory();

  const [price, setPrice] = useState({ min: "", max: "" });
  let productSort = queryString.parse(history.location.search).sort;


  function handleChange(event) {
    let [min,max] = event.target.value.split(',');

    let currentUrlParams = new URLSearchParams(history.location.search);
    if(min && max){
      currentUrlParams.set("max",max)
      currentUrlParams.set("min",min)
    }
    else{
      currentUrlParams.set("min",min)
      currentUrlParams.delete("max")
      
    }
    history.push(history.location.pathname + "?" + currentUrlParams.toString());

    if (props.sidebarStatus) {
      props.sidebarStatus(false);
    }
  }

  function onPriceChange(event) {
    event.preventDefault();
    setPrice({ ...price, [event.target.name]: event.target.value });
  }

  function handleClick() {
    // let searParam = `&max=${price.max}&min=${price.min}`;

    let currentUrlParams = new URLSearchParams(history.location.search);
    currentUrlParams.set("max",price.max)
    currentUrlParams.set("min",price.min)

    history.push(history.location.pathname + "?" + currentUrlParams.toString());

    if (props.sidebarStatus) {
      props.sidebarStatus(false);
    }
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
                value="0,2000"
                onChange={handleChange}
              />
              Under Rs.2000
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="price"
                value="2000,5000"
                onChange={handleChange}
              />
              Rs.2000 - Rs.5000
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="price"
                value="5000,10000"
                onChange={handleChange}
              />
              Rs.5000 - Rs.10000
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="price"
                value="10000,20000"
                onChange={handleChange}
              />
              Rs.10000 - Rs.20000
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="price"
                value="20000"
                onChange={handleChange}
              />
              Above Rs.20000
            </label>
            <br />
          </div>

          <div className="cumtom-price">
            <p>Custom Price Range</p>
            <div className="cumtom-price-input">
              <input
                type="text"
                name="min"
                value={price.min}
                placeholder="Rs.Min"
                onChange={onPriceChange}
              />
              <input
                type="text"
                name="max"
                value={price.max}
                placeholder="Rs.Max"
                onChange={onPriceChange}
              />
              <button onClick={handleClick}>Go</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
