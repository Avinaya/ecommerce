import React, { useContext } from "react";
import "./Categories.scss";
import CategoriesContex from "../contexApi/contexApiCategory/ContexApiCategory";
import SubCategories from "./subCategories/SubCategories";
import { useHistory } from "react-router-dom";

const Categories = () => {
  const data = useContext(CategoriesContex);
  const history = useHistory();

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
    <React.Fragment>
      <div className="menu">
        <div className="menu-tools">
          {data.map((val, index) => {
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
                    <SubCategories data={val} />
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
