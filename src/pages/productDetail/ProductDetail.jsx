import React, { Component } from "react";
import axios from "axios";
import "./ProductDetail.scss";
import { Link } from "react-router-dom";
import ProductDetailImage from "./productDetailImage/ProductDetailImage";
import ProductDetailDesciption from "./ProductDetailDescription/ProductDetailDesciption";
import ProductDetailMenu from "./ProductDetailMenu/ProductDetailMenu";
import ProductDetailMenuMobile from "./ProductDetailMenu/ProductDetailMenuMobile/ProductDetailMenuMobile";
import DetailTopBar from "../../components/detailTopBar/DatailTopBar";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      categories: [],
    };
    this.searchProduct = this.searchProduct.bind(this);
    this.searchCategories = this.searchCategories.bind(this);
  }

  componentDidMount() {
    this.searchProduct();
    this.searchCategories();
  }

  searchProduct() {
    axios
      .get(
        `https://saptasoch.herokuapp.com/product/${this.props.match.params.productId}`
      )
      .then((res) => {
        const posts = res.data;
        this.setState({ posts });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  searchCategories() {
    axios
      .get(
        `https://saptasoch.herokuapp.com/product/categoriesName/${this.props.match.params.productId}`
      )
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="detailProduct">
        <DetailTopBar
          category={this.state.categories.category}
          subCategory={this.state.categories.subCategory}
          heading={this.state.categories.subCategoryType}
        />

        <div className="detailProduct-tools">
          <div className="detailProduct-tools-item">
            <ProductDetailImage data={this.state.posts} />
          </div>
          <div className="detailProduct-tools-item">
            <ProductDetailDesciption data={this.state.posts} />
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

        <ProductDetailMenu data={this.state.posts} />
        <ProductDetailMenuMobile data={this.state.posts} />
      </div>
    );
  }
}

export default ProductDetail;
