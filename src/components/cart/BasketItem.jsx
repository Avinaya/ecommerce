import React, { useEffect } from "react";
import { useState } from "react";
import {useStateValue} from "./../contexApi/stateProvider/StateProvider";
import axios from "axios";
import {incrementCartByCartId} from "../../service/cartService/CartService";
import {decrementCartByCartId} from "../../service/cartService/CartService";

function BasketItem(props){

   const [salePrice]=useState(props.salePrice);
    const [totalItemPrice,setTotalItemPrice]=useState(props.quantity*props.salePrice);
    const [quantity,setQuantity]=useState(props.quantity);
    const [{savedForLater},dispatch]=useStateValue();
    const user=JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        console.log("product",props.productName);
    }); 
    async function incerementItem() {
        if(user!=null){
            const productId=props.id;
            const userId=user.id;
            if(quantity<10){
                
            
         
         await incrementCartByCartId(props.cartId).then(response =>{
            setQuantity(quantity+1);
            setTotalItemPrice((quantity+1)*props.salePrice);
            props.increment(props.salePrice);
          });
            }
            else{
                return null;
            }
        }
        else{
            if(quantity<10){
                setQuantity(quantity+1);
                setTotalItemPrice((quantity+1)*props.salePrice);
                props.update(props.id,quantity+1);
                
       
               }else{
                   return null;
               }
        }
        
    }

    async function decerementItem(){
        if(user!=null){
            const productId=props.id;
            const userId=user.id;
            if(quantity>1){
                
                
                await decrementCartByCartId(props.cartId).then(response =>{
                    setQuantity(quantity-1);
                    setTotalItemPrice((quantity-1)*props.salePrice);
                    props.decrement(props.salePrice);
                  })
            }else{
                return null;
            }

        }
        else{
            if(quantity>1){
                setQuantity(quantity-1);
                setTotalItemPrice((quantity-1)*props.salePrice);
                props.update(props.id,quantity-1);
               }else{
                   return null;
               }
        }
      
    }
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
          <span className="cart-tool-parent-item-itemdetails-main-product-actions-attribute cart-tool-parent-item-itemdetails-main-product-actions-attribute-r" onClick={deleteCart}>Remove Item</span>
          
          <span className="cart-tool-parent-item-itemdetails-main-product-actions-attribute cart-tool-parent-item-itemdetails-main-product-actions-attribute-s " onClick={() => props.addToSave(props.id,props.image,props.productName,salePrice)}>Save For Later</span>
          </div>

        </div>

        
    </div>

);


}
export default BasketItem;