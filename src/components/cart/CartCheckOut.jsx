import React from 'react';
import BasketItem from './BasketItem';
import {useStateValue} from "./../contexApi/stateProvider/StateProvider";

import { useHistory } from 'react-router-dom';
function CartCheckOut(props){
  const history = useHistory();
  const [{savedForLater},dispatch]=useStateValue();
  const [{basket},dispatch1]=useStateValue();
  const totalQuantity=basket.reduce((totalItem,basket) => totalItem + basket.productQuantity, 0);
  const totalSalePrice=basket.reduce((totalSale,basket) => totalSale + (basket.salePrice*basket.productQuantity) , 0);


  const removeAnItem =(value) =>{
    console.log("productName",value);
    dispatch1({
        type:"REMOVE_FROM_BASKET",
        id:value,
        
      }
     
      
      );
}
const updateAnItem=(i,q)=>{
 
  dispatch1({
    type:"UPDATE_FROM_BASKET",
    item:{
      id:i,
      productQuantity:q
    }
    
  }
  );
}
const AddToSavedForLater=(i,r,p,it)=>{
 
  dispatch({
    type:"ADD_TO_SAVE",
    item:{
      id:i,
      productImage:r,
      productName:p,
      itemPrice:it
    }
    
  }
  );
}
    
    return(
        <div className="cart-tool-parent">
        <div className="cart-tool-parent-item cart-tool-parent-item-itemdetails">
          
        <div className="cart-tool-parent-item-itemdetails-main cart-tool-parent-item-itemdetails-main-name">
        <div className="cart-tool-parent-item-itemdetails-main-name-details">
    <span>Item Details</span>
        </div>
        <div className="cart-tool-parent-item-itemdetails-main-name-quantity">
          <span>Quantity</span>
        </div>
        <div className="cart-tool-parent-item-itemdetails-main-name-price">
          <span>Item Price</span>
        </div>
        <div className="cart-tool-parent-item-itemdetails-main-name-action">
          <span className="float-right">Action</span>
        </div>
        </div>
        {
          basket.map((item,index) => (
           
            <BasketItem
            key={index}
            id={item.id}
            image={item.productImage}
            colorId={item.colorId}
            sizeId={item.sizeId}
            productName={item.productName}
            quantity={item.productQuantity}
            salePrice={item.salePrice}
            discountValue={item.discountValue}
            onDelete={removeAnItem}
            update={updateAnItem}
            addToSave={AddToSavedForLater}
            />
           

          ))
        }
      </div>

      <div className="cart-tool-parent-item cart-tool-parent-item-budget">
        <div className="cart-tool-parent-item-budget-summary">Order Summary<span className="float-right">{totalQuantity} item</span></div>
        <div className="cart-tool-parent-item-budget-subtotal">Subtotal<span className="float-right">{totalSalePrice}</span></div>
        <div className="cart-tool-parent-item-budget-delivery">
          Delivery charges<span className="float-right">
        Add your delivery address at checkout to see delivery charges.</span></div>
          <div className="cart-tool-parent-item-budget-total">Total<span className="float-right">{totalSalePrice}</span></div>
          <p className="float-right">Excluding delivery charges</p>
          <div className="cart-tool-parent-item-budget-checkout">
          <button onClick={() => history.push('/checkout')}>Contitnue to Checkout</button>
          </div>
      </div>
      </div>
    )
}
export default CartCheckOut;