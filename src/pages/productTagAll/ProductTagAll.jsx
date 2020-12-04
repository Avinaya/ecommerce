import React, { useState, useEffect } from "react";
import "./ProuductTagAll.scss";
import axios from "axios";
import SecondProductCard from "../../components/productCard/secondProductCard/SecondProductCard";
import DetailTopBar from "../../components/detailTopBar/DatailTopBar";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";

const ProductTagAll = (props) => {
  const tag = props.match.params.title;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tagData = () => {
      if (props.match.params.title === "recommended") {
        return "recommended";
      } else if (props.match.params.title === "latest") {
        return "latest";
      } else if (props.match.params.title === "bestselling") {
        return "bestSelling";
      }
    };
    const fetchData = async () => {
      const result = await axios.get(
        `https://saptasoch.herokuapp.com/product/tag/${tagData()}?pageNo=${0}&pageSize=${10}`
      );
      setIsLoading(false);
      setData(result.data.content);
    };
    fetchData();
  }, [props.match.params.title]);

  return (
    <div className="productTagAll">
      <DetailTopBar
        category={tag}
        subCategory="false"
        heading={tag + " Products"}
      />

      <div className="productTagAll-tools">
        {isLoading === true ? (
          <LoadingComponent />
        ) : (
          data.map((val, index) => {
            return (
              <div key={index} className="productTagAll-tools-item">
                <SecondProductCard data={val}/>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProductTagAll;
