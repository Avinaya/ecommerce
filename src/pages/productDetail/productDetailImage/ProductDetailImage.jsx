import React, { useState } from "react";
import "./ProductDetailImage.scss";

const ProductDetailImage = (props) => {
  const [imgSrc, setImgSrc] = useState(props.img1);

  React.useEffect(() => {
    setImgSrc(props.img1);
  }, [props.img1]);

  const getImage = (param) => (e) => {
    e.preventDefault();
    setImgSrc(param)

  };
  return (
    <div className="productDetailImage">
      <div className="productDetailImage-main">
        <img id="img-area" src={imgSrc} alt=""></img>
      </div>
      <div className="productDetailImage-sample">
        <div className="productDetailImage-sample-item" >
          <img
            src={props.data.image1}
            alt=""
            onClick={getImage(props.data.image1)}
          ></img>
        </div>
        <div className="productDetailImage-sample-item">
          <img
            src={props.data.image2}
            alt=""
            onClick={getImage(props.data.image2)}
          ></img>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailImage;
