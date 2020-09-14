import React, { useContext } from "react";
import CategoriesContex from "./../../../../components/contexApi/contexApiCategory/ContexApiCategory";
import { useHistory } from "react-router-dom";

function BrowseCategories(props) {
  
  const history = useHistory();

  const data = useContext(CategoriesContex);
  let category = localStorage.getItem("category");

  let [subCategories] = (data.filter(val=>val.categoryName === category)).map(val=>val.subCategoryList)

  console.log("datas ",data)
  console.log("category ",category)
  console.log("subcat ",subCategories)



  const handleClickSubCat = (subCat) => (e) => {
    e.preventDefault();
    localStorage.setItem("category", category);
    localStorage.setItem("subCategory", subCat);
    localStorage.setItem("subCategoryType", "");
      history.push({
      pathname: `/category/${subCat.replace(/ /g, "-")}`,
      query:{
        header:null,
        price:null
      }
  })
    
  };

  const handleClick = (param) => (e) => {
    e.preventDefault();
    localStorage.setItem("category", param);
    localStorage.setItem("subCategory", "");
    localStorage.setItem("subCategoryType", "");
    history.push({
      pathname: `/category/${param.replace(/ /g, "-")}`,
      query:{
        header:null,
        price:null
      }
  })
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
                return <li key={index} onClick={handleClickSubCat(val.subCategoryName)}>{val.subCategoryName}</li>;
              })}

            {data.map((val, index) => {
              return <li key={index} onClick={handleClick(val.categoryName)}>{val.categoryName}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BrowseCategories;
