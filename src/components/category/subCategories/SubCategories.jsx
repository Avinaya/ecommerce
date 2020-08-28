import React from "react";
import { Link } from "react-router-dom";
const SubCategories = (props) => {
  return (
    <div className="menu-item">
      <div className="menu-item-tools">
        {props.data.subCategoryList.map((val, ind) => {
          return (
            <div key={ind} className="menu-item-tools-item">
              <h5>{val.subCategoryName}</h5>

              <ul className="list-group ">
                {val.subCategoryTypeList.map((value, index) => {
                  return (
                    <li className="list-group-item" key={index}>
                      <Link className="menu-link " to="#">
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
