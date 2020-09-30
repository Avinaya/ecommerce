import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCartByUserId } from "../../service/cartService/CartService";

import axios from "axios";
function CheckoutSummary(props) {
  const API_URL = "http://localhost:8080/order";
  var [cart, setCart] = useState([]);
  const [delivery] = useState(JSON.parse(localStorage.getItem("delivery")));
  const history = new useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  let payload = { orderDetailsDtos: [] };
  useEffect(() => {
    if (user != null) {
      getCartByUserId(user.id).then((response) => {
        setCart(response.data);
        for (var i in response.data) {
          var ram = {
            productId: response.data[i].product.productId,

            totalQuantity: response.data[i].quantity,
          };
          payload.orderDetailsDtos.push(ram);
        }
      });
      console.log("payload", payload);
    } else {
      setCart(null);
    }
  }, [payload, user]);

  async function addToOrder() {
    if (user == null) {
      history.push("/login");
    } else {
      return await axios(API_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        data: {
          userId: user.id,
          orderDeliveryAddressDto: {
            city: delivery.city,
            contactNo: delivery.contactNo,
            contactPerson: delivery.contactPerson,
            district: delivery.district,
            state: delivery.state,
            street: delivery.street,
          },

          orderDetailsDtos: payload.orderDetailsDtos,

          orderHistoryDto: {
            remark: "active",
          },
          orderStatusId: 1,
          paymentTypeId: 2,
        },
      })
        .then((response) => {
          console.log("response", response.data);
        })
        .catch((error) => {
          console.log("error", error.response);
        });
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
        <button onClick={addToOrder}>Continue To Payment</button>
      </div>
    </div>
  );
}

export default CheckoutSummary;
