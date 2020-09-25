import React, { useContext, useState, useEffect } from "react";
import BaseDataContex from "../contexApi/baseApiCall/BaseApiCall";
import SubCategories from "./subCategories/SubCategories";
import { useHistory } from "react-router-dom";

function AllCategories() {
  const value = useContext(BaseDataContex);

  const [allCategoryBody, setAllCategoryBody] = useState([]);

  useEffect(() => {
    const data = value.category && value.category.data;

    if (data) {
      const [avinaya] = data;
      setAllCategoryBody(avinaya);
    }
  }, [value]);

  const history = useHistory();

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
  };

  return (
    <div className="menu-tools-item m1">
      <div className="dropdown drop-menu">
        <span className="btn menu-dropdown text-white">
          All Categories <i className="fa fa-bars ml-1" />
        </span>
        <div
          className="dropdown-menu-tools dropdown-menu "
          aria-labelledby="dropdownMenuButton"
        >
          <ul className="list-unstyled allCategories">
            <div className="allCategories-item1">
              {value.category &&
                value.category.data.map((val, index) => {
                  return (
                    <li
                      key={index}
                      onMouseOver={() => setAllCategoryBody(val)}
                      onClick={handleClick(val.categoryName)}
                      style={
                        allCategoryBody.categoryName === val.categoryName
                          ? { backgroundColor: "#fff", color: "#016fed" }
                          : {}
                      }
                    >
                      {val.categoryName}
                    </li>
                  );
                })}
            </div>
            <div className="allCategories-item2">
              <SubCategories data={allCategoryBody} />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AllCategories;
