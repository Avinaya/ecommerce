import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import "./SocialLogin.scss";
import { useHistory } from "react-router-dom";
import CartService from "../../service/cartService/CartService";

import AuthService from "../../service/auth.service";

function FacebookSocialLogin() {
  const history = useHistory();
  
  const [islogin, setLogin] = useState(false);
  const [cart]=useState(JSON.parse(localStorage.getItem("cart")));


  const handleButtonOnClick = () => {
    return (
      <FacebookLogin
        appId="928755534285619"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    );
  };

  const responseFacebook = (response) => {
    
   const user= AuthService.socialLogin(response.email,response.picture.data.url,response.id,response.name,response.name).then(res=>{
    const facebook = {
      id: res.id,
      username: response.name,
      roles: ["ROLE_USER"],
      email: response.email,
      picture: response.picture.data.url,
      accessToken: response.accessToken,
    };
    localStorage.setItem("user", JSON.stringify(facebook));
    if (cart != null) {
      const user = JSON.parse(localStorage.getItem("user"));
      for (var i in cart) {
        var ram = {
          productId: cart[i].id,
          quantity: cart[i].productQuantity,
          userId: user.id,
        };
        var productId = ram.productId;
        var quantity = ram.quantity;
        var userId = ram.userId;
        CartService(productId, quantity, userId).then((response) => {
          localStorage.removeItem("cart");
          history.push("/");
        });
      }
    }
      else{
        history.push("/");
      }
      
    });
    
  
  };

  return (
    <div className="socialLogin">
      <div className="socialLogin-facebook">
        <button onClick={() => setLogin(true)}>
          Login With <span>Facebook</span>  
        </button>
      </div>
      {islogin ? handleButtonOnClick() : null}
    </div>

    /**
        <FacebookLogin
        appId="928755534285619"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook} />
         */
  );
}

export default FacebookSocialLogin;
