import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import BaseDataContex from "../../../../components/contexApi/baseApiCall/BaseApiCall";

function BrowseCategories(props) {
  const value = useContext(BaseDataContex);
  const [categories, setCategories] = useState({
    category: [],
    subCategory: [],
    subCategoryType: [],
  });
  const history = useHistory();

  let category = localStorage.getItem("category");
  let subCategory = localStorage.getItem("suzbCategory");

  useEffect(() => {
    if (value.category) {
      let data = value.category.data;
      let [subcat] = data.filter((val) => val.categoryName === category);
      setCategories({
        ...categories,
        category: data,
        subCategory: subcat.subCategoryList,
        subCategoryType: [],
      });

      if (subCategory) {
        let [subCatType] = subcat.subCategoryList.filter(
          (val) => val.subCategoryName === subCategory
        );
        setCategories({
          ...categories,
          category: [],
          subCategory: subcat.subCategoryList,
          subCategoryType: subCatType.subCategoryTypeList,
        });
      }
    }
  }, [value]);

  const handleSubCatClick = (subCat) => (e) => {
    e.preventDefault();
    localStorage.setItem("category", category);
    localStorage.setItem("subCategory", subCat);
    localStorage.setItem("subCategoryType", "");
    history.push({
      pathname: `/category/${subCat.replace(/ /g, "-")}`,
      query: {
        header: "",
        price: "",
        page: "",
      },
    });
    if (props.sidebarStatus) {
      props.sidebarStatus(false);
    }
  };

  const handleCatClick = (param) => (e) => {
    e.preventDefault();
    localStorage.setItem("category", param);
    localStorage.setItem("subCategory", "");
    localStorage.setItem("subCategoryType", "");
    history.push({
      pathname: `/category/${param.replace(/ /g, "-")}`,
      query: {
        header: "",
        price: "",
        page: "",
      },
    });
    if (props.sidebarStatus) {
      props.sidebarStatus(false);
    }
  };

  const handleClickSubCatType = (subCatType) => (e) => {
    e.preventDefault();
    localStorage.setItem("category", category);
    localStorage.setItem("subCategory", subCategory);
    localStorage.setItem("subCategoryType", subCatType);
    history.push({
      pathname: `/category/${subCatType.replace(/ /g, "-")}`,
      query: {
        header: "",
        price: "",
        page: "",
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
            {categories.subCategoryType.map((val, index) => {
              return (
                <li
                  key={index}
                  onClick={handleClickSubCatType(val.subCategoryTypeName)}
                >
                  {val.subCategoryTypeName}
                </li>
              );
            })}

            {categories.subCategory.map((val, index) => {
              return (
                <li
                  key={index}
                  onClick={handleSubCatClick(val.subCategoryName)}
                >
                  {val.subCategoryName}
                </li>
              );
            })}

            {categories.category.map((val, index) => {
              return (
                <li key={index} onClick={handleCatClick(val.categoryName)}>
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
