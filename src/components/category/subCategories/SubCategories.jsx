import React from "react";
import { Link } from "react-router-dom";
const SubCategories = (props) => {
  return (
    <div className="menu-item">
      <div className="menu-item-tools">
        {props.data.subCategoryList.map((val, ind) => {
          return (
            <div key={ind} className="menu-item-tools-item">
              <Link
                className="link"
                to={{
                  pathname: `/category/${val.subCategoryName.replace(
                    / /g,
                    "-"
                  )}`,
                  state: {
                    detail: {
                      cat: props.data.categoryName,
                      subCat: val.subCategoryName,
                      subCatType: '',
                    }
                  },
                }}
              >
                <h5>{val.subCategoryName}</h5>
              </Link>

              <ul className="list-group ">
                {val.subCategoryTypeList.map((value, index) => {
                  return (
                    <li className="list-group-item" key={index}>
                      <Link
                        className="menu-link"
                        to={{
                          pathname: `/category/${value.subCategoryTypeName.replace(/ /g,"-")}`,
                          state: {
                            detail: {
                              cat: props.data.categoryName,
                              subCat: val.subCategoryName,
                              subCatType: value.subCategoryTypeName,
                            },
                          }
                        }}
                      >
                        {value.subCategoryTypeName}
                      </Link>
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
