import React, { Component } from "react";
import axios from "axios";

const RecommendedContex = React.createContext();
//when ever we create contex object it comes with two things i.e Provider and consumer

class RecommendedProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    axios
    .get(`https://saptasoch.herokuapp.com/product/tag/recommended`)
    .then((res) => {
        const posts = res.data.map((obj) => obj);
        this.setState({ posts });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <RecommendedContex.Provider value={this.state.posts}>
        {this.props.children}
      </RecommendedContex.Provider>
    );
  }
}

const RecommendedProductConsumer = RecommendedContex.Consumer;

export { RecommendedProductProvider, RecommendedProductConsumer };
