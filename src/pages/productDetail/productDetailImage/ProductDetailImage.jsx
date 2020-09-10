import React, { useState, useEffect } from "react";
import "./ProductDetailImage.scss";

const ProductDetailImage = (props) => {
  const initialImage = props.data.productImageList;
  
   const [imgSrc, setImgSrc] = useState();
   
  useEffect(() => {
    setImgSrc(initialImage && initialImage[0].image);
  }, [initialImage]);

  const getImage = (param) => (e) => {
    e.preventDefault();
    setImgSrc(param);
  };

  const handleClick = () => {
    console.log(imgSrc);
  };

  return (
    <div className="productDetailImage">
      <div className="productDetailImage-main">
        <img id="img-area" src={imgSrc} alt="" onClick={handleClick}></img>
      </div>
      <div className="productDetailImage-sample">
        {initialImage &&
          initialImage.map((val, index) => {
            return (
              <div className="productDetailImage-sample-item" key={index}>
                <img src={val.image} alt="" onClick={getImage(val.image)}></img>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ProductDetailImage;
