import React from "react";
import { useState } from "react";


function SavedForLater(props){

   
    const [totalItemPrice,setTotalItemPrice]=useState(props.quantity*props.salePrice);
    
 

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
          <br/>
          <span className="cart-tool-parent-item-itemdetails-main-product-actions-attribute cart-tool-parent-item-itemdetails-main-product-actions-attribute-s">Save For Later</span>
          </div>

        </div>

        
    </div>

);


}
export default SavedForLater;