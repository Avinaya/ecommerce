import React, { useState, useEffect } from "react";
import "./DatailTopBar.scss";
import { Link, useHistory } from "react-router-dom";

const DetailTopBar = (props) => {
  const [subCategoryClass, setsubCategoryClass] = useState("");
  const [subcategryColor, setsubCategoryColor] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (props.subCategory === "false") {
      setsubCategoryClass("subCategory-hidden");
      setsubCategoryColor("#016fed");
    } else {
      setsubCategoryClass("detailTopBar-menu-subcategory");
    }
  }, [props.subCategory]);

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

  const handleClickSubCat = (cat, subCat) => (e) => {
    e.preventDefault();
    localStorage.setItem("category", cat);
    localStorage.setItem("subCategory", subCat);
    localStorage.setItem("subCategoryType", "");

    history.push({
      pathname: `/category/${subCat.replace(/ /g, "-")}`,
      query: {
        header: null,
        price: null,
      },
    });
  };

  return (
    <div className="detailTopBar-menu">
      <Link to="/" className="link">
        <span>Home</span>
      </Link>
      <i className="fa fa-angle-right mx-2"></i>
      <span
        style={{ color: subcategryColor }}
        onClick={handleClick(props.category)}
      >
        {props.category}
      </span>
      <i className={"fa fa-angle-right mx-2 " + subCategoryClass}></i>
      <span
        className={subCategoryClass + " subcategory"}
        onClick={handleClickSubCat(props.category, props.subCategory)}
      >
        {props.subCategory}
      </span>

      <h4 className="detailTopBar-menu-heading">{props.heading}</h4>
    </div>
  );
};
export default DetailTopBar;
