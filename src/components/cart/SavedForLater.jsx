import React, { useEffect } from "react";
import { useState } from "react";

import axios from "axios";


function SavedForLater(props){

   const [salePrice]=useState(props.salePrice);
    
   
    const user=JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        console.log("product",props.productName);
    }); 
  
    const deleteCart = () => {
        if(user!=null){
            props.onDelete(props.cartId);
        }
        else{
            props.onDelete(props.id);
        }
        
    }
 

return(
    <div>
      <div className="savedTitle"><span>Saved For Later</span></div>
        <div key={props.id} className="cart-tool-parent-item-saved-main cart-tool-parent-item-saved-main-product">
          <div className="cart-tool-parent-item-saved-main-product-image">
            <img src={props.image} alt=""></img>
            <span className="float-right">{props.productName}</span>
          </div>
          
    <div className="cart-tool-parent-item-saved-main-product-prices">Rs.{salePrice}</div>
          <div className="cart-tool-parent-item-saved-main-product-actions">
          <span className="cart-tool-parent-item-saved-main-product-actions-attribute cart-tool-parent-item-saved-main-product-actions-attribute-r" onClick={deleteCart}>Remove Item</span>
          
          <span className="cart-tool-parent-item-saved-main-product-actions-attribute cart-tool-parent-item-saved-main-product-actions-attribute-s " onClick={() => props.addToSave(props.id,props.image,props.productName,salePrice)}>Save For Later</span>
          </div>

        </div>

        
    </div>

);


}
export default SavedForLater;