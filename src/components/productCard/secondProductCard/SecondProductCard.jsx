import React,{useState,useEffect} from "react";
import "./SecondProductCard.scss";
import Rating from "../../rating/ProductRating";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../../components/contexApi/stateProvider/StateProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SecondProductCard = (props) => {
  const history = useHistory();
  const initialImage = props.data.productImageList;
  
  const [imgSrc, setImgSrc] = useState();
  const [loading,setLoading]=useState(false);
  
 useEffect(() => {
   setImgSrc(initialImage && initialImage[0].image);
   
   
 }, [initialImage,props.data.productId]);


 const brand = props.data.brand;

  const [{basket},dispatch]=useStateValue();
  
  const AddToBasket= () => {
    setLoading(true);
    //Add item to basket
    dispatch({
      
      type:"ADD_TO_BASKET",
      item: {

        id:props.data.productId,
        productImage:imgSrc,
        productName:props.data.productName,
        brand:brand.brandName,
        productQuantity:1,
        salePrice:props.data.salePrice,
        discountValue:props.data.discountValue
      }
      
    }
    
   
    
    );
    
    toast.success("Successfully added to cart!");
    setLoading(false);
    
   
  };
  

  

  const getDetail = (param) => (e) => {
    e.preventDefault();
    history.push(`/product/${param.productId}`);
  };

  const discount = Math.round(
    100 -
      (props.data.salePrice /
        (props.data.salePrice + props.data.discountValue)) *
        100
  );
  const fun = () => {
    if (discount === 0) {
      return "discountNot";
    } else return "discount";
  };
  return (
    <div className="secondProductCard" >
      <div className="secondProductCard-tools">
        <div>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
          <div className="secondProductCard-tools-item secondProductCard-tools-item1" onClick={getDetail(props.data)}>
            <div className="secondProductCard-tools-item1-image">
              <img src={props.data.productImageList[0].image} alt="" />
            </div>
            <span className={"secondProductCard-tools-item1-discount " + fun()}>
              {discount + "% Off"}
            </span>
          </div>
        </div>

        <div>
          <div className="secondProductCard-tools-item secondProductCard-tools-item-name" onClick={getDetail(props.data)}>
            <span>{props.data.productName}</span>
          </div>
          <div className="secondProductCard-tools-item secondProductCard-tools-item-price" onClick={getDetail(props.data)}>
            <span>{"Rs." + props.data.salePrice}</span>
            <span className={fun()}>
              {"Rs." + (props.data.salePrice + props.data.discountValue)}
            </span>
          </div>

        <div className="secondProductCard-tools-item secondProductCard-tools-item-seller" onClick={getDetail(props.data)}>
          <span>Sell by Saptabazar</span>
        </div>

        <div className="secondProductCard-tools-item">
          <Rating />
        </div>
        </div>

        <div className="secondProductCard-tools-item secondProductCard-tools-item-cart">
          <button className="btn" onClick={AddToBasket}
          disabled={loading}>
                      {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default SecondProductCard;
