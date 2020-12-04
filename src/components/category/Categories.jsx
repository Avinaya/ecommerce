import React, { useContext } from "react";
import "./Categories.scss";
import SubCategories from "./subCategories/SubCategories";
import { useHistory } from "react-router-dom";
import BaseDataContex from "../contexApi/baseApiCall/BaseApiCall";
import AllCategories from "./AllCategories";

const Categories = () => {
  const value = useContext(BaseDataContex);

  const history = useHistory();

  const handleClick = (param) => (e) => {
    e.preventDefault();
    localStorage.setItem("category", param);
    localStorage.setItem("subCategory", "");
    localStorage.setItem("subCategoryType", "");
    history.push({
      pathname: `/category/${param.replace(/ /g, "-")}`,
    });
  };
  return (
    <React.Fragment>
      <div className="menu">
        <div className="menu-tools">
          <AllCategories />
          {value.category &&
            value.category.data.map((val, index) => {
              return (
                <div key={index} className="menu-tools-item m1">
                  <div className="dropdown drop-menu">
                    <span
                      className="btn menu-dropdown text-white"
                      onClick={handleClick(val.categoryName)}
                    >
                      {val.categoryName}
                    </span>
                    <div
                      className="dropdown-menu-tools dropdown-menu "
                      aria-labelledby="dropdownMenuButton"
                    >
                      <SubCategories
                        data={val.subCategoryList}
                        categoryName={val.categoryName}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Categories;
