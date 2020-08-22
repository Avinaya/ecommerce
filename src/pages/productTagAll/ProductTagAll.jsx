import React, { useState, useEffect } from "react";
import "./ProuductTagAll.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import SecondProductCard from "../../components/productCard/secondProductCard/SecondProductCard";

const ProductTagAll = (props) => {
  const tag = props.match.params.title; 

  const [data, setData] = useState([]);

  useEffect(() => {
    const tagData = () =>{
      if(props.match.params.title === 'recommended'){
        return 'recommended'
      }
      else if(props.match.params.title === 'latest'){
        return 'latest'
      }
      else if(props.match.params.title === 'bestselling'){
        return 'bestSelling'
      }
    }    
    const fetchData = async () => {
       const result = await axios.get(
        `https://saptasoch.herokuapp.com/product/tag/${tagData()}`
      );
      setData(result.data);
    };
    fetchData();
  }, [props.match.params.title]);

  return (
    <div className="productTagAll">
      <div className="detailProduct-menu">
        <Link to="/" className="link">
          <span>Home</span>
        </Link>
        <i className="fa fa-angle-right mx-2"></i>
        <Link to="/" className="link productTagAll-tag">
          <span>{tag}</span>
        </Link>

        <h4 className="detailProduct-menu-subcategorytype">
          {tag + " Products"}
        </h4>
      </div>

      <div className="productTagAll-tools">
        {data && data.map((val, index) => {
          return (
            <div key={index} className="productTagAll-tools-item">
              <SecondProductCard data={val} />
            </div>
          );
        })}
        
      </div>
    </div>
  );
};

export default ProductTagAll;
