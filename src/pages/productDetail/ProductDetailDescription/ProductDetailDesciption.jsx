import React,{useEffect,useState} from "react";
import "./ProductDetailDesciption.scss";
import { Link } from "react-router-dom";
import Quantity from "./../quantity/Quantity";
import axios from "axios";
import { useHistory } from 'react-router-dom';

import Rating from '../../../components/rating/rating';
import { useStateValue } from "../../../components/contexApi/stateProvider/StateProvider";


function ProductDetailDesciption(props) {
 

  const history = useHistory();
  const brand = props.data.brand;
  const [quantity,setQuantity]=useState(0);
  const initialImage = props.data.productImageList;
  const [rating,setRating]=useState();
  const [imgSrc, setImgSrc] = useState();
  
 useEffect(() => {
   setImgSrc(initialImage && initialImage[0].image);
   axios.get(
    `https://saptasoch.herokuapp.com/rating/${props.data.productId}`
  ).then(response=>{
    setRating(response.data.averageRating);
    
  });
   
 }, [initialImage,props.data.productId]);


 const updateQuantity=(value) => {
   console.log(value);
    setQuantity(value);
  };

  const [{basket},dispatch]=useStateValue();
  
  const AddToBasket= () => {
   
    //Add item to basket
    dispatch({
      type:"ADD_TO_BASKET",
      item: {

        id:props.data.productId,
        productImage:imgSrc,
        productName:props.data.productName,
        brand:brand.brandName,
        productQuantity:quantity,
        salePrice:props.data.salePrice,
        discountValue:props.data.discountValue
      }
      
    }
   
    
    );
    history.push('/cart');
   
  };
  

  


  return (
    <div className="productDetailDesciption">
      <div className="productDetailDesciption-heading">
        <h4>{props.data.productName}</h4>
        <span className="d-block">Product Code: {props.data.productCode}</span>
        <span>
          <Link className="link" to="/">
          Brand: {brand && brand.brandName}
          </Link>
        </span>
        <Rating data={rating}/>
        </div>
      <div className="productDetailDesciption-price">
        <h4 className="d-inline productDetailDesciption-price-actualPrice">
          Rs.{props.data.salePrice}
        </h4>
        <span className="d-inline mx-2 productDetailDesciption-price-growPrice">
          Rs.{(props.data.salePrice)+(props.data.discountValue)}
        </span>
        <p className="d-inline productDetailDesciption-price-discountPrice">
          You save Rs.{props.data.discountValue}
        </p>
      </div>
      <div className="productDetailDesciption-quantity">
        <Quantity qnt={updateQuantity} />
        <span className="ml-md-3  productDetailDesciption-quantity-detail">
          Call us for Bulk Purchases: 986026218x
        </span>
      </div>
      <div className="productDetailDesciption-button">
 
              <button onClick={AddToBasket}>Buy Now</button>
               
        
        <div>
          
            
          
          <i className="fa fa-heart" />
          <span className="ml-2">Save For Later</span>
        </div>
      </div>
      <div className="productDetailDesciption-icon">
        <div>
          <i className="fas fa-building mr-2"></i> <span>SaptaSoch Warehouse</span>
        </div>
        <div>
          <i className="fas fa-truck mr-2 "></i>{" "}
          <span>Express Delivery Available</span>
        </div>
      </div>

      <div className="productDetailDesciption-social">
      <p>Share With Friends</p>
      <i className="fa fa-facebook-official mt-3"></i>
      <i className="fa fa-twitter mx-4"></i>
      <i className="fa fa-instagram"></i>

      </div>
    </div>

    
  );
}
export default ProductDetailDesciption;
