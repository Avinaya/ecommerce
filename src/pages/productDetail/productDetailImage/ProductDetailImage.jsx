import React, { Component } from "react";
import "./ProductDetailImage.scss";

class ProductDetailImage extends Component {
  render() {
    return (
      <div className="productDetailImage">
        <div className="productDetailImage-main">
          <img src={this.props.data.image1} alt=""></img>
        </div>
        <div className="productDetailImage-sample">
          <div className="productDetailImage-sample-item">
            <img src={this.props.data.image1} alt=""></img>
          </div>
          <div className="productDetailImage-sample-item">
            <img src={this.props.data.image2} alt=""></img>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetailImage;
