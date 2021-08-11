import React, { useEffect, useState } from "react";
import "./ProductCategory.scss";
import ProductCategoryHeader from "./productCatHeader/ProductCategoryHeader";
import ProductCategoriesFilter from "./productCatFilter/ProductCategoriesFilter";
import ProductCategoriesProducts from "./productCatProducts/ProductCategoriesProducts";
import axios from "axios";
import queryString from "query-string";
import ProductCategoryMob from "./productCategoryMobile/ProductCategoryMob";
import LoadingComponent from "./../../components/loadingComponent/LoadingComponent";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../constants/constant";

function ProductCategory(props) {
  const [data, setData] = useState([]);
  const history = useHistory();
  const [isLoading, setIsloading] = useState(true);

  let category = localStorage.getItem("category");
  let subCategory = localStorage.getItem("subCategory");
  let subCategoryType = localStorage.getItem("subCategoryType");

  let productSort = queryString.parse(history.location.search).sort;
  let minPrice = queryString.parse(history.location.search).min;
  let maxPrice = queryString.parse(history.location.search).max;
  let page = queryString.parse(history.location.search).page;

  useEffect(() => {
    async function fetchData() {
      let formData = new FormData();
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("subCategoryType", subCategoryType);
      formData.append("pageSize", 20);
      if (page) {
        formData.append("pageNo", page - 1);
      } else {
        formData.append("pageNo", 0);
      }

      if (productSort) {
        formData.append("productSort", productSort);
      } else {
        formData.append("productSort", "productId");
      }
      if (minPrice) {
        formData.append("minPrice", minPrice);
      }
      if (maxPrice) {
        formData.append("maxPrice", maxPrice);
      }

      const response = await axios.post(
        `${BASE_URL}/productSearch/filter`,
        formData
      );
      setIsloading(false);
      setData(response.data);
    }
    fetchData();
  }, [
    category,
    subCategory,
    subCategoryType,
    productSort,
    minPrice,
    maxPrice,
    page,
  ]);

  return (
    <div className="productCategory">
      <ProductCategoryHeader
        category={category}
        subCategory={subCategory}
        subCategoryType={subCategoryType}
        filter={data}
      />
      <ProductCategoryMob />
      <div className="productCategory-tools">
        <div className="productCategory-tools-item productCategory-tools-item-filter">
          <ProductCategoriesFilter />
        </div>

        
        <div className="productCategory-tools-item">
          {isLoading? (
            <LoadingComponent />
          ) : (
            <ProductCategoriesProducts data={data} />
          )}
        </div>



      </div>
    </div>
  );
}

export default ProductCategory;
