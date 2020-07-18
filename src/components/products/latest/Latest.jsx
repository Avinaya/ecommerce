import React, { Component } from 'react';
import axios from 'axios';
import ProductCard from './../../productCard/ProductCard';

const title= 'Latest Products'

class Latest extends Component {

  componentWillMount(){
    this.getLatest();
  }

  getLatest(){
    axios.get(`http://202.51.74.64:8080/justNep/product/latest`)
    .then(res => {
      const posts = res.data.latestProduct.map(obj => obj);
      this.setState({posts});
      console.log(posts)
    });
  }

  constructor(props){
    super(props);

    this.state = {
      posts:[],
    };
    this.getLatest = this.getLatest.bind(this);
  }

  render(){
    return(

          <ProductCard data = {this.state.posts}
                        title = {title}/>
    );
  }
}

export default Latest;