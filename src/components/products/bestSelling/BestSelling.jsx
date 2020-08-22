import React, { Component } from "react";
import axios from "axios";
import ProductCard from "./../../productCard/firstProductCard/ProductCard";

const title = "BestSelling";

class BestSelling extends Component {
  componentDidMount() {
    this.getRecommended();
  }

  getRecommended() {
    axios
      .get(`https://saptasoch.herokuapp.com/product/tag/bestSelling`)
      .then((res) => {
        const posts = res.data.map((obj) => obj);
        this.setState({ posts });
      });
  }

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
    this.getRecommended = this.getRecommended.bind(this);
  }

  render() {
    return <ProductCard data={this.state.posts} title={title} />;
  }
}

export default BestSelling;
