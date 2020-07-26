import React, { Component } from "react";
import axios from "axios";
import ProductCard from "./../../productCard/ProductCard";

const title = "Latest Products";

class Latest extends Component {
  componentDidMount() {
    this.getLatest();
  }

  getLatest() {
    axios.get(`http://202.51.74.217:8081/hello/product/latest`).then((res) => {
      const posts = res.data.latestProduct.map((obj) => obj);
      this.setState({ posts });
      console.log(posts);
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
    this.getLatest = this.getLatest.bind(this);
  }

  render() {
    return <ProductCard data={this.state.posts} title={title} />;
  }
}

export default Latest;
