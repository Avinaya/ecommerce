import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

class HighlightSecondary extends Component {
  componentDidMount() {
    this.getHighlightSecondary();
  }

  getHighlightSecondary() {
    axios.get(`https://saptasoch.herokuapp.com/secondaryHighlight`).then((res) => {
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
    this.getHighlightSecondary = this.getHighlightSecondary.bind(this);
  }
  render() {
    var limited = this.state.posts.filter((val,i)=>i<4)
    return (
        <React.Fragment>
        {limited.map((val,index)=>{
            return(
                <div key={index} className="highlight-item2-items">
                <Link to="/">
                  <img src={val.secondaryHighlightImage} alt={val.secondaryHighlightName} />
                </Link>
              </div>
            )
        })}
        </React.Fragment>
    )
  }
}
export default HighlightSecondary;
