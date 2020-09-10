import React ,{useState} from "react";
import {useStateValue} from "./../contexApi/stateProvider/StateProvider";
import axios from "axios";
function CheckoutSummary(props){
    const API_URL="http://localhost:8080/order";
   var [cart,setCart]=useState(JSON.parse(localStorage.getItem("cart")));
   const [delivery,setDelivery]=useState(JSON.parse(localStorage.getItem("delivery")));
   let payload={orderDetailsDtos:[]};
    for(var i in cart){

        var ram={
                productId:cart[i].id,
                colorId:cart[i].colorId,
                sizeId:cart[i].sizeId,
                totalQuantity:cart[i].productQuantity
            }
            payload.orderDetailsDtos.push(ram);
        
        }
        
    
    console.log(payload);
    


   
    
   const addToOrder =() => {
       console.log(delivery.state);
    axios.post(API_URL , {
        couponAmount: 0,    
        customerId: 1,
        
        
        deliveryDate: "2020-08-31T16:50:58.959Z",
        deliveryInstruction: "string",
        extraCharge: 0,
     
 orderDeliveryAddressDto: {
    city: delivery.city,
    contactNo: delivery.contactNo,
    contactPerson: delivery.contactPerson,
    district: delivery.district,
    state: delivery.state,
    street: delivery.street
  },
  
 orderDetailsDtos:payload.orderDetailsDtos,

  orderHistoryDto: {
    remark: "active"
  },
  orderStatusId: 1,
  paymentTypeId: 1,
  taxType: "percentage",
  taxValue: 0
            });
   }



    
    
    return(
    <div className="checkout-tools-main checkout-tools-main-payment-sum">
        <div className="checkout-tools-main checkout-tools-main-payment-sum-options">
            <span>Payment Options</span>

        </div>

        <div className="checkout-tools-main checkout-tools-main-payment-sum-voucher">
            <span>Add a Voucher/Gift Card</span>

        </div>
        <div className="checkout-tools-main checkout-tools-main-payment-sum-apply">

            <input name="gift_card_input" placeholder="Add a voucher/Gift card"/>

            <button>Apply</button>
        </div>
        <div className="checkout-tools-main checkout-tools-main-payment-sum-select">
            <span>Select an Address or Pickup Location to see Payment Methods</span>
        </div>
        <div className="checkout-tools-main checkout-tools-main-payment-sum-subtotal">
            Subtotal: <span className="float-right">Rs.{props.total}</span>

        </div>
        <div className="checkout-tools-main checkout-tools-main-payment-sum-total">
        Total: <span className="float-right">Rs.{props.total}</span>
        </div>

        <div className="checkout-tools-main checkout-tools-main-payment-sum-button">
            <button onClick={addToOrder}>Continue To Payment</button>
        </div>





    </div>);
}

export default CheckoutSummary;