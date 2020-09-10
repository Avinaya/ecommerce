import React, { useEffect, useState } from "react";
import "./ProductCategory.scss";
import ProductCategoryHeader from "./productCatHeader/ProductCategoryHeader";
import ProductCategoriesFilter from "./productCatFilter/ProductCategoriesFilter";
import ProductCategoriesProducts from "./productCatProducts/ProductCategoriesProducts";
import axios from "axios";
import queryString from 'query-string'

function ProductCategory(props) {
  const [data, setData] = useState([]);
  let category = localStorage.getItem("category");
  let subCategory = localStorage.getItem("subCategory");
  let subCategoryType = localStorage.getItem("subCategoryType");

  const searchQuery= queryString.parse(props.location.search).sort
  
  console.log("history",searchQuery)

  useEffect(() => {
    async function fetchData() {
      let formData = new FormData();
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("subCategoryType", subCategoryType);
      formData.append("pageNo", 0);
      formData.append("pageSize", 10);
      if(searchQuery){
        formData.append("productSort",searchQuery)
      }else{
        formData.append("productSort","productId")
      }
      
     
      const response = await axios.post(
        "https://saptasoch.herokuapp.com/productSearch/filter",
        formData
      );
      setData(response.data);
      console.log("filter", response.data);
    }
    fetchData();
  }, [category, subCategory, subCategoryType,searchQuery]);

  return (
    <div className="productCategory">
      <ProductCategoryHeader
        category={category}
        subCategory={subCategory}
        subCategoryType={subCategoryType}
        url={props.match.params.categoriesName}
        filter={data}
      />
      <div className="productCategory-mob">
        <div className="productCategory-mob-item">Filter</div>
        <div className="productCategory-mob-item">|</div>
        <div className="productCategory-mob-item">Sort</div>
      </div>
      <div className="productCategory-tools">
        <div className="productCategory-tools-item">
          <ProductCategoriesFilter data={data} />
        </div>
        <div className="productCategory-tools-item">
          <ProductCategoriesProducts data={data.content} />
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
