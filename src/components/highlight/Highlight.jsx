import React, { Component } from "react";
import "./Highlight.scss";
import axios from "axios";
import {Carousel} from "react-bootstrap";
import HighlightSecondary from "./HighlightSecondary";
import {Link} from 'react-router-dom';

class Highlight extends Component {
  componentDidMount() {
    this.getHighlight();
  }

  getHighlight() {
    axios.get(`https://saptasoch.herokuapp.com/highlight`).then((res) => {
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
    this.getHighlight = this.getHighlight.bind(this);
  }

  render() {
    var limited = this.state.posts.filter((val,i)=>i<5)
    return (
      <div className="highlight">
        <div className="highlight-tools">
          <div className="highlight-tools-item highlight-item1">
            <Carousel>
              {limited.map((val,index)=>{
                return(
                  <Carousel.Item key={index}>
                  <Link className="link" to="/">
                  <img
                    className="d-block w-100"
                    src={val.highlightImage}
                    alt={val.highlightName}
                  />
                  </Link>
                </Carousel.Item>
                )
              })}
             
            </Carousel>
          </div>
          <div className="highlight-tools-item highlight-item2">
              <HighlightSecondary/>
          </div>
        </div>
      </div>
    );
  }
}
export default Highlight;
