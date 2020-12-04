import React from "react";
import axios from "axios";
const API_URL="https://saptasoch.herokuapp.com/cart";

 

    export default async function addToCart(productId,quantity,userId)  {
        return await axios(API_URL , {
            method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
            data:{
            productId,
                 quantity,
                  userId
            }
          });
    }

   export async function getCartByUserId(userId){
        return await axios.get(
           API_URL+ `/test/${userId}`
          );
    }

    export async function decrementCartByCartId(cartId){
        return await axios.put(
            API_URL+ `/decrement/${cartId}`
        );
    }

    export async function deleteCartByCartId(cartId){
      return await axios.delete(API_URL+`/${cartId}`)
    }

        export async function incrementCartByCartId(cartId){
          return await axios.put(
              API_URL+ `/increment/${cartId}`
          );
  

    }

    
