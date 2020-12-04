import React from "react";
import { useHistory } from "react-router-dom";
const SubCategories = (props) => {
  const history = useHistory();

  const handleClickSubCat = (cat, subCat) => (e) => {
    e.preventDefault();
    localStorage.setItem("category", cat);
    localStorage.setItem("subCategory", subCat);
    localStorage.setItem("subCategoryType", "");

    history.push({
      pathname: `/category/${subCat.replace(/ /g, "-")}`,
    });
  };

  const handleClickSubCatType = (cat, subCat, subCatType) => (e) => {
    e.preventDefault();
    localStorage.setItem("category", cat);
    localStorage.setItem("subCategory", subCat);
    localStorage.setItem("subCategoryType", subCatType);
    history.push({
      pathname: `/category/${subCatType.replace(/ /g, "-")}`,
    });
  };

  return (
    <div className="menu-item">
      <div className="menu-item-tools">
        {props.data &&
          props.data.map((val, ind) => {
            return (
              <div key={ind} className="menu-item-tools-item">
                <h5
                  onClick={handleClickSubCat(
                    props.categoryName,
                    val.subCategoryName
                  )}
                >
                  {val.subCategoryName}
                </h5>

                <ul className="list-group ">
                  {val.subCategoryTypeList.map((value, index) => {
                    return (
                      <li
                        className="list-group-item"
                        key={index}
                        onClick={handleClickSubCatType(
                          props.categoryName,
                          val.subCategoryName,
                          value.subCategoryTypeName
                        )}
                      >
                        {value.subCategoryTypeName}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SubCategories;
