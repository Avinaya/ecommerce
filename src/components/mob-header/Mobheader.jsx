import React from "react";
import { Link } from "react-router-dom";
import "./Mobheader.scss";
import { useHistory } from "react-router-dom";

const Mobheader = () => {
  const history = useHistory();

  const handleClick = (param) => (e) => {
    e.preventDefault();
    localStorage.setItem("category", param);
    localStorage.setItem("subCategory", "");
    localStorage.setItem("subCategoryType", "");
    history.push({
      pathname: `/category/${param.replace(/ /g, "-")}`,
      query: {
        header: "",
        price: "",
        page:""
      },
    });
  };

  return (
    <div className="mobheader">
      <div className="mobheader-tools">
        <div className="mobheader-tools-item" onClick={handleClick("home & living")}>
          <svg
            height="22"
            viewBox="0 0 22 22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="menu-browse-all"
            name="menu-browse-all"
          >
            <path
              d="M11 21C5.477 21 1 16.523 1 11S5.477 1 11 1s10 4.477 10 10-4.477 10-10 10zm-4.348-8.696a1.304 1.304 0 1 0 0-2.608 1.304 1.304 0 0 0 0 2.608zm4.348 0a1.304 1.304 0 1 0 0-2.608 1.304 1.304 0 0 0 0 2.608zm4.348 0a1.304 1.304 0 1 0 0-2.608 1.304 1.304 0 0 0 0 2.608z"
              fill="none"
              stroke="#50545B"
            ></path>
          </svg>

          <span className="d-block">Homes & Livings</span>
        </div>
        <div className="mobheader-tools-item" onClick={handleClick("Men's fashion")}>
          <svg
            height="22"
            viewBox="0 0 24 22"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="menu-fashion"
            name="menu-fashion"
          >
            <path
              d="M16.913 21H7.31c-.611 0-1.107-.5-1.107-1.114V9.948l-.62.623a1.102 1.102 0 0 1-1.566 0L1.324 7.858a1.12 1.12 0 0 1 0-1.575l4.924-4.957c.24-.242.588-.36.922-.317.046-.006.093-.009.14-.009h1.369c.375 0 .725.192.93.509.435.677 1.417 1.114 2.502 1.114 1.085 0 2.069-.437 2.504-1.114.204-.317.554-.509.93-.509h1.369c.047 0 .093.003.14.009a1.107 1.107 0 0 1 .922.317l4.922 4.957a1.12 1.12 0 0 1 0 1.575l-2.692 2.713a1.104 1.104 0 0 1-1.566 0l-.62-.624v9.939c0 .615-.496 1.114-1.107 1.114z"
              fill="none"
              stroke="#50545B"
            ></path>
          </svg>
          <span className="d-block">Men's Fashion</span>
        </div>
        <div className="mobheader-tools-item" onClick={handleClick("electronics")}>
          <svg
            height="22"
            viewBox="0 0 25 22"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="menu-computers"
            name="menu-computers"
          >
            <g fill="none">
              <path
                d="M23.468 1.564A1.848 1.848 0 0 0 22.113 1H2.919c-.527 0-.98.188-1.355.564A1.848 1.848 0 0 0 1 2.919v13.052c0 .528.188.98.564 1.356.376.376.828.564 1.355.564h6.526v3.07h6.142v-3.07h6.526c.528 0 .98-.188 1.356-.564.376-.376.563-.828.563-1.356V2.92c0-.527-.188-.98-.564-1.355z"
                stroke="#50545B"
              ></path>
              <path
                d="M10.142 11.487a.7.7 0 0 1-.892-1.079l5.724-4.73a.7.7 0 1 1 .892 1.079l-5.724 4.73z"
                fill="#50545B"
              ></path>
            </g>
          </svg>
          <span className="d-block">Electronics</span>
        </div>
        <div className="mobheader-tools-item" onClick={handleClick("women's fashion")}>
          <svg
            height="22"
            viewBox="0 0 24 22"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="menu-fashion"
            name="menu-fashion"
          >
            <path
              d="M16.913 21H7.31c-.611 0-1.107-.5-1.107-1.114V9.948l-.62.623a1.102 1.102 0 0 1-1.566 0L1.324 7.858a1.12 1.12 0 0 1 0-1.575l4.924-4.957c.24-.242.588-.36.922-.317.046-.006.093-.009.14-.009h1.369c.375 0 .725.192.93.509.435.677 1.417 1.114 2.502 1.114 1.085 0 2.069-.437 2.504-1.114.204-.317.554-.509.93-.509h1.369c.047 0 .093.003.14.009a1.107 1.107 0 0 1 .922.317l4.922 4.957a1.12 1.12 0 0 1 0 1.575l-2.692 2.713a1.104 1.104 0 0 1-1.566 0l-.62-.624v9.939c0 .615-.496 1.114-1.107 1.114z"
              fill="none"
              stroke="#50545B"
            ></path>
          </svg>
          <span className="d-block">Women's Fashion</span>
        </div>
      </div>
    </div>
  );
};

export default Mobheader;
