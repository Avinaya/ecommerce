import React, { Component } from "react";
import axios from "axios";
import "./ProductDetail.scss";
import { Link } from "react-router-dom";
import ProductDetailImage from './productDetailImage/ProductDetailImage';
import ProductDetailDesciption from "./ProductDetailDescription/ProductDetailDesciption";
import ProductDetailDescriptionMenu from "./productDetailDescriptionMenu/ProductDetailDescriptionMenu";


class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    axios
      .get(
        `https://saptasoch.herokuapp.com/product/${this.props.match.params.productId}`
      )
      .then((res) => {
        const posts = res.data;
        this.setState({ posts });
        console.log(posts);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="detailProduct">
        <div className="detailProduct-tag">
          <Link className="link" to="/">
            Tag
          </Link>
          <h1 className="detailProduct-tag-heading">{this.state.posts.name}</h1>
        </div>
        <div className="detailProduct-tools">
          <div className="detailProduct-tools-item">
          <ProductDetailImage data={this.state.posts}
                                img1={this.state.posts.image1}/>
          </div>
          <div className="detailProduct-tools-item">
          <ProductDetailDesciption data={this.state.posts}/>
          </div>
        </div>

        <div className="detailProduct-sold">
        <span>S</span>
        <span>Sold by <Link className="link ml-2 detailProduct-sold-link1" to="/">Aalmari</Link></span>
        <span><Link className="link detailProduct-sold-link2" to="/">Learn More</Link></span>
        </div>
        <ProductDetailDescriptionMenu/>
      </div>
    );
  }
}

export default ProductDetail;
