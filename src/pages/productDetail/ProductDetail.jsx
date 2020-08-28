import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductDetail.scss";
import { Link } from "react-router-dom";
import ProductDetailImage from "./productDetailImage/ProductDetailImage";
import ProductDetailDesciption from "./ProductDetailDescription/ProductDetailDesciption";
import ProductDetailMenu from "./ProductDetailMenu/ProductDetailMenu";
import ProductDetailMenuMobile from "./ProductDetailMenu/ProductDetailMenuMobile/ProductDetailMenuMobile";
import DetailTopBar from "../../components/detailTopBar/DatailTopBar";

const ProductDetail = (props) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function searchProduct() {
      const res = await axios.get(
        `https://saptasoch.herokuapp.com/product/${props.match.params.productId}`
      );
      setPosts(res.data);
    }

    async function searchCategories() {
      const res = await axios.get(
        `https://saptasoch.herokuapp.com/product/categoriesName/${props.match.params.productId}`
      );
      setCategories(res.data);
    }
    searchProduct();
    searchCategories();
  }, [props.match.params.productId]);

  return (
    <div className="detailProduct">
      <DetailTopBar
        category={categories.category}
        subCategory={categories.subCategory}
        heading={categories.subCategoryType}
      />

      <div className="detailProduct-tools">
        <div className="detailProduct-tools-item">
          <ProductDetailImage data={posts} />
        </div>
        <div className="detailProduct-tools-item">
          <ProductDetailDesciption data={posts} />
        </div>
      </div>

      <div className="detailProduct-sold">
        <span>S</span>
        <span>
          Sold by{" "}
          <Link className="link ml-2 detailProduct-sold-link1" to="/">
            Aalmari
          </Link>
        </span>
        <span>
          <Link className="link detailProduct-sold-link2" to="/">
            Learn More
          </Link>
        </span>
      </div>

      <ProductDetailMenu data={posts} />
      <ProductDetailMenuMobile data={posts} />
    </div>
  );
};

export default ProductDetail;
