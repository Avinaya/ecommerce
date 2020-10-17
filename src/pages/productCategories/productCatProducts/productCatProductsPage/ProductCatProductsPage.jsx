import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

function ProductCatProductsPage(props) {
  const history = useHistory();
  const number = queryString.parse(history.location.search).page;

  let pageNo = number === undefined ? 1 : number;

  const [currentPage, setCurrentPage] = useState(1);

  function page() {
    const pageNo = [];
    for (let i = 1; i <= props.data.totalPages; i++) {
      pageNo.push(i);
    }
    return pageNo;
  }

  const handleClick = (val) => (event) => {
    event.preventDefault();
    let currentUrlParams = new URLSearchParams(history.location.search);
    currentUrlParams.set("page", val);
    history.push(history.location.pathname + "?" + currentUrlParams.toString());
    setCurrentPage(val);
  };

  const handleNext = (event) => {
    event.preventDefault();
    let currentUrlParams = new URLSearchParams(history.location.search);
    currentUrlParams.set("page", currentPage + 1);
    history.push(history.location.pathname + "?" + currentUrlParams.toString());
    setCurrentPage(currentPage + 1);
  };
  const handlePrevious = (event) => {
    event.preventDefault();
    let currentUrlParams = new URLSearchParams(history.location.search);
    currentUrlParams.set("page", currentPage - 1);
    history.push(history.location.pathname + "?" + currentUrlParams.toString());
    setCurrentPage(currentPage - 1);
  };

  return (
    <div
      className="productCatProductsPage"
      style={props.data.totalPages === 1 ? { display: "none" } : {}}
    >
      {console.log("currentPage", currentPage)}
      <div aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item enable">
            <span
              class="page-link productCatProductsPage-link productCatProductsPage-button "
              tabindex="-1"
              style={
                currentPage === 1
                  ? {
                      pointerEvents: "none",
                      color: "#b5b5b5",
                      backgroundColor: "white",
                    }
                  : {}
              }
              onClick={handlePrevious}
            >
              Previous
            </span>
          </li>

          {console.log("pageNo", pageNo)}

          {page().map((val, index) => {
            return (
              <li key={index} class="page-item">
                <span
                  class="page-link"
                  onClick={handleClick(val)}
                  style={
                    parseInt(pageNo) === parseInt(val)
                      ? { backgroundColor: "#016fed", color: "white" }
                      : {}
                  }
                >
                  {val}
                </span>
              </li>
            );
          })}

          <li class="page-item">
            <span
              class="page-link productCatProductsPage-link productCatProductsPage-button "
              style={
                props.data.totalPages === currentPage
                  ? {
                      pointerEvents: "none",
                      color: "#b5b5b5",
                      backgroundColor: "white",
                    }
                  : {}
              }
              onClick={handleNext}
            >
              Next
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductCatProductsPage;
