import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductDetail.scss";
import { Link } from "react-router-dom";
import ProductDetailImage from "./productDetailImage/ProductDetailImage";
import ProductDetailDesciption from "./ProductDetailDescription/ProductDetailDesciption";
import ProductDetailMenu from "./ProductDetailMenu/ProductDetailMenu";
import ProductDetailMenuMobile from "./ProductDetailMenu/ProductDetailMenuMobile/ProductDetailMenuMobile";
import DetailTopBar from "../../components/detailTopBar/DatailTopBar";
import SimilarProduct from "./similarProduct/SimilarProduct";

const ProductDetail = (props) => {
  const [posts, setPosts] = useState([]);
  const[category,setCategory]=useState()
  const[subCategory,setSubCategory]=useState()
  const[heading,setHeading]=useState()



  useEffect(() => {
    async function searchProduct() {
      const res = await axios.get(
        `https://saptasoch.herokuapp.com/product/${props.match.params.productId}`
      );
      setCategory(res.data.category.categoryName)
      setSubCategory(res.data.subCategory.subCategoryName)
      setHeading(res.data.subCategoryType.subCategoryTypeName)
      setPosts(res.data);
    }
    searchProduct();
  }, [props.match.params.productId]);

  return (
    <div className="detailProduct">
      <DetailTopBar
        category={category}
        subCategory={subCategory}
        heading={heading}
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
      <SimilarProduct 
      data={subCategory}
      productId={props.match.params.productId} />
    </div>
  );
};

export default ProductDetail;
