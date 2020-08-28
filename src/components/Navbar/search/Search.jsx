import React, { useState, useEffect } from "react";
import "./Search.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Search() {
  const history = useHistory();

  const [data, setData] = useState([]);
  const [style, setStyle] = useState();
  const [inputfield, setInputField] = useState();

  const handleClick = (param) => (e) => {
    e.preventDefault();
    history.push(`/product/${param.productId}`);
    setInputField("");
  };

  useEffect(() => {
    if (inputfield === "") {
      console.log("key", inputfield);
      setStyle("search-list-false");
    } else {
      setStyle("search-list-true");
    }
    try {
      async function getData() {
        const res = await axios.get(
          `https://saptasoch.herokuapp.com/product/search/${inputfield}`
        );
        console.log(res.data);
        setData(res.data);
      }
      getData();
    } catch (e) {
      console.log(e);
    }
  }, [inputfield]);

  return (
    <div className={"searchBar "}>
      <input
        type="text"
        className="searchTerm"
        onChange={(event) => setInputField(event.target.value)}
        value={inputfield }
        placeholder="Search For Products, Brands and Categories... "
      />
      <button type="submit" className="searchButton">
        <i className="fa fa-search"></i>
      </button>
      {data ? (
        <div
          className={"searchBar-list " + style}
          style={data.length > 0 ? {} : { display: "none" }}
        >
          <ul>
            <span>Suggestions</span>
            {data.map((val, key) => {
              return (
                <li key={key} onClick={handleClick(val)}>
                  {val.productName}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        "no result found"
      )}
    </div>
  );
}

export default Search;
