import React, { Component } from "react";
import axios from "axios";
import CardWithDiscount from "../../productCard/cardWithDiscount/CardWithDiscount";
import "./BestSelling.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Setting from "./setting";

class BestSelling extends Component {
  componentDidMount() {
    this.getRecommended();
  }

  getRecommended() {
    axios
      .get(`http://202.51.74.217:8081/hello/product/bestSelling`)
      .then((res) => {
        const posts = res.data.map((obj) => obj);
        this.setState({ posts });
        console.log(posts);
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
    return (
      <div className="bestSelling">
        <h5>Best Selling Products</h5>
        <div className="bestSelling-tools">
          <Slider {...Setting}>
            {this.state.posts.map((val, key) => {
              return (
                <Link key={key} className="link" to="/">
                  <div className="bestSelling-tools-item">
                    <CardWithDiscount data={val} />
                  </div>
                </Link>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default BestSelling;
