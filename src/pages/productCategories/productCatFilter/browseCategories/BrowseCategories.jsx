import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import BaseDataContex from "../../../../components/contexApi/baseApiCall/BaseApiCall";

function BrowseCategories(props) {
  const value = useContext(BaseDataContex);

  const history = useHistory();
  const [cat, setCat] = useState([]);

  useEffect(() => {
    async function loadData() {
      let data = (await value.category) && value.category.data;
      if (data) {
        setCat(data);
      }
    }
    loadData();
  }, [value]);

  let category = localStorage.getItem("category");

  let [subCategories] = cat
    .filter((val) => val.categoryName === category)
    .map((val) => val.subCategoryList);

  const handleClickSubCat = (subCat) => (e) => {
    e.preventDefault();
    localStorage.setItem("category", category);
    localStorage.setItem("subCategory", subCat);
    localStorage.setItem("subCategoryType", "");
    history.push({
      pathname: `/category/${subCat.replace(/ /g, "-")}`,
      query: {
        header: null,
        price: null,
      },
    });
   if (props.sidebarStatus) {
     props.sidebarStatus(false);
   }
    
  };

  const handleClick = (param) => (e) => {
    e.preventDefault();
    localStorage.setItem("category", param);
    localStorage.setItem("subCategory", "");
    localStorage.setItem("subCategoryType", "");
    history.push({
      pathname: `/category/${param.replace(/ /g, "-")}`,
      query: {
        header: null,
        price: null,
      },
    });
    if (props.sidebarStatus) {
      props.sidebarStatus(false);
    }
    };

  return (
    <div className="card">
      <div
        className="card-header filterAccordion panel-heading collapsed"
        id="headingOne"
        data-toggle="collapse"
        data-target="#collapseOne"
        aria-expanded="false"
      >
        <span className="filterAccordion-heading accordion-toggle">
          Browse Categories
        </span>
      </div>

      <div
        id="collapseOne"
        className="collapse show"
        aria-labelledby="headingOne"
      >
        <div className="card-body filterAccordion-body">
          <ul className="list-unstyled browseCategory-list">
            {subCategories &&
              subCategories.map((val, index) => {
                return (
                  <li
                    key={index}
                    onClick={handleClickSubCat(val.subCategoryName)}
                  >
                    {val.subCategoryName}
                  </li>
                );
              })}

            {cat.map((val, index) => {
              return (
                <li key={index} onClick={handleClick(val.categoryName)}>
                  {val.categoryName}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BrowseCategories;
