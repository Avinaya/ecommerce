import React from "react";
import "./Cart.scss";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import DetailTopBar from "./../detailTopBar/DatailTopBar";

import {useStateValue} from "./../contexApi/stateProvider/StateProvider";

function Cart(){
  const [{basket}]=useStateValue();
  const totalQuantity=basket.reduce((totalItem,basket) => totalItem + basket.productQuantity, 0);
  const totalSalePrice=basket.reduce((totalSale,basket) => totalSale + (basket.salePrice*basket.productQuantity) , 0);
  const category="Home";
  const subCategory="Cart";
  const heading="Shopping Cart";
  return(
    <div>
      {/* <div>
      <DetailTopBar
        
        subCategory={subCategory}
        heading={heading}
      />  
      </div> */}
    <div className="cart">

      <div className="cart-tot">
        <div>
        <span >Total({totalQuantity} items)</span>
        <span className="float-right">Rs.{totalSalePrice}</span>
        </div>
      </div>
      <div className="cart-shop">
     
      <Link to="/" className="cart-shop-continue">
    <i className="fa fa-angle-left mr-2" />
    continue shopping
  </Link>
      </div>

      <div className="cart-tool">
        <CartItem />

        
      </div>

    </div>
  
    </div>
  );

  
}

  export default Cart;
