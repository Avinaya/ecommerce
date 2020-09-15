import React, { useEffect, useState } from "react";
import "./ProductCategory.scss";
import ProductCategoryHeader from "./productCatHeader/ProductCategoryHeader";
import ProductCategoriesFilter from "./productCatFilter/ProductCategoriesFilter";
import ProductCategoriesProducts from "./productCatProducts/ProductCategoriesProducts";
import axios from "axios";
import queryString from "query-string";
import ProductCategoryMob from './productCategoryMobile/ProductCategoryMob';

function ProductCategory(props) {
  const [data, setData] = useState([]);
  let category = localStorage.getItem("category");
  let subCategory = localStorage.getItem("subCategory");
  let subCategoryType = localStorage.getItem("subCategoryType");
 
  let productSort = queryString.parse(props.location.search).sort
  let minPrice = queryString.parse(props.location.search).min
  let maxPrice = queryString.parse(props.location.search).max

  useEffect(() => {
    async function fetchData() {
      let formData = new FormData();
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("subCategoryType", subCategoryType);
      formData.append("pageNo", 0);
      formData.append("pageSize", 20);

      if (productSort) {
        formData.append("productSort", productSort);
      } else {
        formData.append("productSort", "productId");
      }
      if (minPrice) {
        formData.append("minPrice",minPrice)
        
      }
      if (maxPrice) {
        formData.append("maxPrice",maxPrice)
        
      }

      const response = await axios.post(
        "https://saptasoch.herokuapp.com/productSearch/filter",
        formData
      );
      setData(response.data);
      // console.log("filter", response.data);
    }
    fetchData();
  }, [category, subCategory, subCategoryType,productSort,minPrice,maxPrice]);

  return (
    <div className="productCategory">
      <ProductCategoryHeader
        category={category}
        subCategory={subCategory}
        subCategoryType={subCategoryType}
        filter={data}
      />
      <ProductCategoryMob/>
      <div className="productCategory-tools">
        <div className="productCategory-tools-item productCategory-tools-item-filter">
          <ProductCategoriesFilter />
        </div>
        <div className="productCategory-tools-item">
          <ProductCategoriesProducts data={data.content} />
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
