import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCartByUserId } from "../../service/cartService/CartService";
import KhaltiCheckout from "khalti-checkout-web";

import axios from "axios";
function CheckoutSummary(props) {
  const API_URL = "http://localhost:8080/order";
  var [cart, setCart] = useState([]);
  const [delivery] = useState(JSON.parse(localStorage.getItem("delivery")));
  const history = new useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("props ho ni", props.pro);
  let config = {
    // replace this key with yours
    "publicKey": "test_public_key_a03a72fbb14442cea08994f28a6cc220",
    "productIdentity": "1234567890",
    "productName": "Drogon",
    "productUrl": "http://gameofthrones.com/buy/Dragons",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};

let checkout = new KhaltiCheckout(config);
 




  async function addToOrder() {
    if (user != null) {
      let payload = [];

      getCartByUserId(user.id).then((response) => {
        setCart(response.data);
        for (var i in response.data) {
          var ram = {
            productId: response.data[i].productId,

            totalQuantity: response.data[i].quantity,
          };
          payload.push(ram);
        }
      });
      return await axios(API_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        data: {
          couponAmount: 0,
          taxValue: 0,

          extraCharge: 0,
          userId: user.id,
          orderDeliveryAddressDto: {
            city: delivery.city,
            contactNo: delivery.contactNo,
            contactPerson: delivery.contactPerson,
            district: delivery.district,
            state: delivery.state,
            street: delivery.street,
          },

          orderDetailsDtos: props.pro,

          orderHistoryDto: {
            remark: "active",
          },
          orderStatusId: 1,
          paymentTypeId: 1,
        },
      })
        .then((response) => {})
        .catch((error) => {
          console.log("error", error.response);
        });
    } else {
      history.push("/login");
    }
  }

  return (
    <div className="checkout-tools-main checkout-tools-main-payment-sum">
      <div className="checkout-tools-main checkout-tools-main-payment-sum-options">
        <span>Payment Options</span>
      </div>

      <div className="checkout-tools-main checkout-tools-main-payment-sum-voucher">
        <span>Add a Voucher/Gift Card</span>
      </div>
      <div className="checkout-tools-main checkout-tools-main-payment-sum-apply">
        <input name="gift_card_input" placeholder="Add a voucher/Gift card" />

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
        <button  >Continue To Payment</button>
       
      </div>
    </div>
  );
}

export default CheckoutSummary;
