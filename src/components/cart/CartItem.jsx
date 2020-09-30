import React, { useEffect, useState } from "react";

import {useStateValue} from "./../contexApi/stateProvider/StateProvider";
import CartCheckOut from "./CartCheckOut";
import axios from "axios";
import {getCartByUserId} from "../../service/cartService/CartService";

 function CartItem(){
  const [{basket}]=useStateValue();
  const user=JSON.parse(localStorage.getItem("user"));
  const [cart,setCart]=useState([]);
  
  useEffect(() => {
    if(user!=null){

  getCartByUserId(user.id).then(response=>{
      setCart(response.data);
      });
    }

    
  },[]);
    return(
      <div>
           {basket?.length === 0 && cart.length==0 ? (
          <h2>Basket is empty</h2>
        ) :(
      <div>
      
            <CartCheckOut/>
        
      </div>
      
      )}
      </div>
    );
}
export default CartItem;