import React, { useEffect } from "react";

import {useStateValue} from "./../contexApi/stateProvider/StateProvider";
import CartCheckOut from "./CartCheckOut";

function CartItem(){
  const [{basket}]=useStateValue();
  
  useEffect(() => {
    console.log(basket?.length);
    const posts = basket.map((obj) => obj);
    console.log(posts);
  }, [basket]);
    return(
      <div>
           {basket?.length === 0  ? (
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