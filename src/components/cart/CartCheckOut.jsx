import React,{useState,useEffect} from 'react';
import BasketItem from './BasketItem';
import {useStateValue} from "./../contexApi/stateProvider/StateProvider";
import {getCartByUserId} from "../../service/cartService/CartService";
import {deleteCartByCartId} from "../../service/cartService/CartService";
import SavedForLater from "./SavedForLater";
import { useHistory } from 'react-router-dom';
function CartCheckOut(){
  const history = useHistory();
  const [{savedForLater},dispatch]=useStateValue();
  const [{basket},dispatch1]=useStateValue();
  const totalQuantity=basket.reduce((totalItem,basket) => totalItem + basket.productQuantity, 0);
  const totalSalePrice=basket.reduce((totalSale,basket) => totalSale + (basket.salePrice*basket.productQuantity) , 0);
  const user=JSON.parse( localStorage.getItem("user"));
  const [cart,setCart]=useState([]);
  const [userTotalQuantity,setUserTotalQuantity]=useState();
  const [userTotalSalePrice,setUserTotalSalePrice]=useState();
  const removeAnItem =(value) =>{
    console.log("productName",value);
    dispatch1({
        type:"REMOVE_FROM_BASKET",
        id:value,
        
      }
     
      
      );
}
async function deleteCart(c){
  return await deleteCartByCartId(c);
}
  useEffect(() => {
  
    if(user!=null){
      
    getCartByUserId(user.id).then(response=>{
      setCart(response.data);

      const data1=response.data;
      setUserTotalQuantity(data1.reduce((totalItem1,data1) => totalItem1 + data1.quantity, 0));
      setUserTotalSalePrice(data1.reduce((totalSale1,data1) => totalSale1 + (data1.price) , 0));
     
      });
    }
    else{
      setCart(null);
    }
    
  }, [removeAnItem,deleteCart]);


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


const incrementQuantity = (i) => {
  setUserTotalQuantity(userTotalQuantity+1);
  setUserTotalSalePrice(userTotalSalePrice+i);
}
const decrementQuantity= (d) => {
  setUserTotalQuantity(userTotalQuantity-1);
  setUserTotalSalePrice(userTotalSalePrice-d);
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
         user!= null ? (
          cart.map((item,index) => (
             
            <BasketItem
            
              
            
            key={index}
            id={item.productId}
            cartId={item.cartId}
            image={item.thumbnail}
            productName={item.productName}
            quantity={item.quantity}
            salePrice={item.price/item.quantity}
            
            onDelete={deleteCart}
            increment={incrementQuantity}
            // price={updatePrice}
            decrement={decrementQuantity}
            addToSave={AddToSavedForLater}
            />
           

          ))
         )  : (
          basket.map((item,index) => (
             
            <BasketItem
            
              
            
            key={index}
            id={item.id}
            image={item.productImage}
            productName={item.productName}
            quantity={item.productQuantity}
            salePrice={item.salePrice}
            discountValue={item.discountValue}
            onDelete={removeAnItem}
            update={updateAnItem}
            addToSave={AddToSavedForLater}
            />
           

          ))
         )
            
          
        }
        
        
       
      </div>

      <div className="cart-tool-parent-item cart-tool-parent-item-budget">
        <div className="cart-tool-parent-item-budget-summary">Order Summary{user!=null ? (<span className="float-right">{userTotalQuantity}</span>
        ) : (
          <span className="float-right"> {totalQuantity}</span>
        )} item</div>
        <div className="cart-tool-parent-item-budget-subtotal">Subtotal{
          user!=null ?(<span className="float-right">{userTotalSalePrice}</span>) : (
            <span className="float-right">{totalSalePrice}</span>
          )
          }</div>
        <div className="cart-tool-parent-item-budget-delivery">
          Delivery charges<span className="float-right">
        Add your delivery address at checkout to see delivery charges.</span></div>
          <div className="cart-tool-parent-item-budget-total">Total{
            user!=null ? (<span className="float-right">{userTotalSalePrice}</span>) : (
              <span className="float-right">{totalSalePrice}</span>
            )
          }
          </div>
          <p className="float-right">Excluding delivery charges</p>
          <div className="cart-tool-parent-item-budget-checkout">
          <button onClick={() => history.push({
  pathname: '/checkout',
  state: { cart,basket}
})}>Contitnue to Checkout</button>
          </div>
      </div>
      <div className="cart-tool-parent-item cart-tool-parent-item-saved">
          <SavedForLater/>
      </div>
      </div>
    )
}
export default CartCheckOut;