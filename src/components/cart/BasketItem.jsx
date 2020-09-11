import React from "react";
import { useState } from "react";

function BasketItem(props){

   
    const [totalItemPrice,setTotalItemPrice]=useState(props.quantity*props.salePrice);
    const [quantity,setQuantity]=useState(props.quantity);
   

    const incerementItem=() => {
        if(quantity<10){
         setQuantity(quantity+1);
         setTotalItemPrice((quantity+1)*props.salePrice);
         props.update(props.id,quantity+1);
         

        }else{
            return null;
        }
    }

    const decerementItem=() => {
        if(quantity>1){
         setQuantity(quantity-1);
         setTotalItemPrice((quantity-1)*props.salePrice);
         props.update(props.id,quantity-1);
        }else{
            return null;
        }
    }
 

return(
    <div>
        <div key={props.id} className="cart-tool-parent-item-itemdetails-main cart-tool-parent-item-itemdetails-main-product">
          <div className="cart-tool-parent-item-itemdetails-main-product-image">
            <img src={props.image} alt=""></img>
            <span className="float-right">{props.productName}</span>
          </div>
          <div className="cart-tool-parent-item-itemdetails-main-product-quantities">
          <div className="d-inline">
       <div className="count">
        <button className="count-btn"  onClick={incerementItem}>+</button>
         <input disabled className="count-input" value={quantity} />
        <button className="count-btn" onClick={decerementItem}>- </button>
        </div>
        </div>
          </div>
    <div className="cart-tool-parent-item-itemdetails-main-product-prices">Rs.{totalItemPrice}</div>
          <div className="cart-tool-parent-item-itemdetails-main-product-actions">
          <span className="cart-tool-parent-item-itemdetails-main-product-actions-attribute cart-tool-parent-item-itemdetails-main-product-actions-attribute-r" onClick={() => props.onDelete(props.id)}>Remove Item</span>
          <span className="cart-tool-parent-item-itemdetails-main-product-actions-attribute cart-tool-parent-item-itemdetails-main-product-actions-attribute-s">Save For Later</span>
          </div>

        </div>

        
    </div>

);


}
export default BasketItem;