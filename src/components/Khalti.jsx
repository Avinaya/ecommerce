import React from 'react';
import KhaltiCheckout from "khalti-checkout-web";
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
function Khalti() {
  return (
    <div>
    <button onClick={ checkout.show({amount: 1000})}>Khalti</button>
      
    </div>
  )
}

export default Khalti
