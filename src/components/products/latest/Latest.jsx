import React, { Component } from "react";
import axios from "axios";
import ProductCard from "./../../productCard/ProductCard";

const title = "Latest Products";

class Latest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
    this.getLatest = this.getLatest.bind(this);
  }

  componentDidMount() {
    this.getLatest();
  }

  getLatest() {
    axios.get(`https://saptasoch.herokuapp.com/product/tag/latest`).then((res) => {
      const posts = res.data.map((obj) => obj);
      this.setState({ posts });
    });
  }



  render() {
    return <ProductCard data={this.state.posts} title={title} />;
  }
}

export default Latest;
