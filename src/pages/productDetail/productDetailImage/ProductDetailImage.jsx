import React, { useState, useEffect } from "react";
import "./ProductDetailImage.scss";

const ProductDetailImage = (props) => {
  const initialImage = props.data.productImageList;

  const [imgSrc, setImgSrc] = useState();


  useEffect(() => {
    setImgSrc(initialImage && initialImage[0].image);
  }, [initialImage]);

 

  const[appState,changeState]=useState({
    activeObject:null,
    initialState:" initial"
})

const getImage = (param,index) => (e) => {
  e.preventDefault();
  setImgSrc(param);
  console.log("index",index)
  changeState({...appState,activeObject: index})


};

function toggleActiveStyle(index){
    if(index ===  appState.activeObject){
        return " activeBorder"
    }else{
        return " inactiveBorder"
    }
}

  return (
    <div className="productDetailImage">
      <div className="productDetailImage-main">
        <img id="img-area" src={imgSrc} alt=""></img>
      </div>
      <div className="productDetailImage-sample">
        {initialImage &&
          initialImage.map((val, index) => {
            return (
              <div className={"productDetailImage-sample-item"+toggleActiveStyle(index)} key={index}
              >
                <img src={val.image} alt="" onClick={getImage(val.image,index)}></img>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ProductDetailImage;
