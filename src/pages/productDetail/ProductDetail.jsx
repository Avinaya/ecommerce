import React,{Component} from 'react'
import './ProductDetail.scss'
import axios from "axios";


class ProductDetail extends Component{
    constructor(props) {
        super(props);
        this.state = { posts: [] };
      }
    
      componentDidMount() {
        axios
        .get(`https://saptasoch.herokuapp.com/product/${this.props.match.params.productId}`)
        .then((res) => {
            const posts = res.data;
            this.setState({ posts });
            console.log(posts)
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    render(){
        
    return(
        <div className="productDetail">
        <div className="productDetail-tools">
        <div className="productdetail-tools-item">
        </div>
        <h1>{this.state.posts.description}</h1>
        <div className="productdetail-tools-item"></div>

        </div>
        </div>
    )
}

}

export default ProductDetail;