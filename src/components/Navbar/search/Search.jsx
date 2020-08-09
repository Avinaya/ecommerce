import React, { Component } from 'react'
import './Search.scss'
import axios from "axios";
import { Link } from 'react-router-dom';


 class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: '',
            posts: [],
            display:'none'
        }
        this.searchApi = this.searchApi.bind(this);

    }

    searchApi(text) {
        axios.get(`https://saptasoch.herokuapp.com/product/search?keyword=${text}`).then((res) => {
          const posts = res.data.map((obj) => obj);
          console.log(posts)
          this.setState({ posts });
        });
      }

    handleSubmit(event){
        event.preventDefault();
        var text = this.state.text;
        this.searchApi(text);
        console.log("form submmit value "+text)
        this.setState({text:''})
    }

    handelChange(event){
        var text = event.target.value;
        this.searchApi(text);
        if(text===''){
            this.setState({display: 'none'})

        }else {
            this.setState({display: 'block'})
        }
        console.log(text)
        this.setState({text: text});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="input-group py-2">
              <input
              onChange={this.handelChange.bind(this)}
              value={this.state.text}
                type="text"
                className="form-control"
                placeholder="Search Products, Brands, Categories......"
              />
              <div className="input-group-append">
                <button className="btn header-search-btn">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
            <div className="list-group search-dropdown" style={{display: this.state.display }} >

            {this.state.posts.map((val,index)=>{
                return(
                    <Link to="#" key={index} className="list-group-item list-group-item-action">{val.description}</Link>
                )
            })}

            </div>
          </form>
        )
    }
}
export default Search
