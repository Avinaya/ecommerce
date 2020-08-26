import React, { useState,useEffect } from "react";
import "./DatailTopBar.scss";
import { Link } from "react-router-dom";

const DetailTopBar = (props) => {
  const [subCategoryClass, setsubCategoryClass] = useState("");
  const[subcategryColor,setsubCategoryColor] = useState("")

  useEffect(() =>{
    if (props.subCategory === "false") {
        setsubCategoryClass("subCategory-hidden");
        setsubCategoryColor("#016fed")
      } else {
        setsubCategoryClass("detailTopBar-menu-subcategory");
      }
  },[props.subCategory])
    

  return (
    <div className="detailTopBar-menu">
      <Link to="/" className="link">
        <span>Home</span>
      </Link>
      <i className="fa fa-angle-right mx-2"></i>
      <Link to="/" className="link">
        <span style={{color: subcategryColor}}>{props.category}</span>
      </Link>
      <i className={"fa fa-angle-right mx-2 " + subCategoryClass}></i>
      <Link to="/" className="link">
        <span className={subCategoryClass+" subcategory"}>{props.subCategory}</span>
      </Link>

      <h4 className="detailTopBar-menu-heading">{props.heading}</h4>
    </div>
  );
};
export default DetailTopBar;
