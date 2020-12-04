import React, { useEffect, useState } from "react";

import {useStateValue} from "./../contexApi/stateProvider/StateProvider";
import CartCheckOut from "./CartCheckOut";
import axios from "axios";
import {getCartByUserId} from "../../service/cartService/CartService";

 function CartItem(){
  const [{basket}]=useStateValue();
  const user=JSON.parse(localStorage.getItem("user"));
  const [cart,setCart]=useState([]);
  const [loading,setLoading]=useState(true);
  const [quantity,setQuantity]=useState();
  const [price,setPrice]=useState();

  const updateQuantity=(value) =>{
    setQuantity(value);
  }
  const updatePrice =(p) =>{
    setPrice(p);
  }
  
  useEffect(() => {
    if(user!=null){

  getCartByUserId(user.id).then(response=>{
      setCart(response.data);
      setLoading(false);
      });
    }
    else{
      setLoading(false);
    }

    
  },[loading,cart]);
    return(
      <div>

        {
          loading===true ?(
            <div>Loading...</div>
          ) :(
            
              basket?.length === 0 && cart.length===0 ? (
                
                <h2>Basket is empty</h2>
              ) :(
                <div>
      
            <CartCheckOut qnt={updateQuantity} pri={updatePrice} cart={cart}/>
        
      </div>
              )
            
          )
        }
      </div>
    );
}
export default CartItem;