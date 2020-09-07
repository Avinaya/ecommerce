import React, { useContext } from "react";
import "./Categories.scss";
import CategoriesContex from "../contexApi/contexApiCategory/ContexApiCategory";
import SubCategories from "./subCategories/SubCategories";
import { Link } from "react-router-dom";

const Categories = () => {
  const data = useContext(CategoriesContex);

  return (
    <React.Fragment>
      <div className="menu">
        <div className="menu-tools">
          {data.map((val, index) => {
            return (
              <div key={index} className="menu-tools-item m1">
                <div className="dropdown drop-menu">
                  <Link
                    className="link"
                    to={{
                      pathname: `/category/${val.categoryName.replace(
                        / /g,
                        "-"
                      )}`,
                      state: {urlData:val.categoryName.replace(/ /g,"-"), detail: { 
                        cat: val.categoryName,
                        subCat: '',
                        subCatType: '',
                       }
                       },
                    }}
                  >
                    <span className="btn menu-dropdown text-white">
                      {val.categoryName}
                    </span>
                  </Link>
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
