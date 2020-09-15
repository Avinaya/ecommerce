import React from "react";
import "./SimilarProduct.scss";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import SecondProductCard from './../../../components/productCard/secondProductCard/SecondProductCard';

function SimilarProduct(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function response() {
      const formData = new FormData();
      formData.append("subCategory", props.data);
      formData.append("pageNo", 0);
      formData.append("pageSize", 5);
      const catResponse = await axios.post(
        `https://saptasoch.herokuapp.com/productSearch/filter`,
        formData
      );
      setData(catResponse.data.content.filter(val=> val.productId !== parseInt(props.productId)));
      console.log("dataaaa", catResponse.data.content.filter(val=> val.productId !== parseInt(props.productId)));
    }
    response();
  }, [props.data]);

  return (
    <div className="similarProduct">
      <div className="similarProduct-heading">
        <h2 className="color-text">Similar Items You May Like</h2>
      </div>
      <div className="similarProduct-body">

      {data.map((val,index)=>{
          return(
            <div key={index} className="similarProduct-body-item"><SecondProductCard data={val} style={false}/></div>
          )
      })}

      </div>
    </div>
  );
}

export default SimilarProduct;
