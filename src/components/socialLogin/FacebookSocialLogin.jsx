import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import "./SocialLogin.scss";
import { useHistory } from "react-router-dom";

function FacebookSocialLogin() {
  const history = useHistory();

  const [islogin, setLogin] = useState(false);

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
    const facebook = {
      id: response.id,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      accessToken: response.accessToken,
    };
    localStorage.setItem("facebookData", JSON.stringify(facebook));
    history.push("/");
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
