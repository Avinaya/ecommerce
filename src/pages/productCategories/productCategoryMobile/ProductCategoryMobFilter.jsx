import React from "react";
import './ProductCategoryMobFilter.scss'
import BrowseCategories from './../productCatFilter/browseCategories/BrowseCategories';
import Price from './../productCatFilter/price/Price';
import Brand from './../productCatFilter/brand/Brand';
import Colour from './../productCatFilter/colour/Colour';

function ProductCategoryMobFilter(props) {
  return (
    <div className="productCategoryMobFilter" style={{height:window.outerHeight}}>
    <BrowseCategories sidebarStatus={props.sidebarStatus}/>
    <Price sidebarStatus={props.sidebarStatus}/>
    <Brand sidebarStatus={props.sidebarStatus}/>
    <Colour sidebarStatus={props.sidebarStatus}/>
    </div>
  );
}

export default ProductCategoryMobFilter;
