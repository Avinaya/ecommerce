import React from 'react';
import './MallSeller.scss';
import { useState ,useEffect} from 'react';
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { useRef } from 'react';


function LoginSeller() {
    const history=useHistory();
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const firstRender=useRef(true);
    const[disabled,setDisabled]=useState(true);
    const [userNameError,setUserNameError]=useState(null);
    const [passwordError,setPasswordError]=useState(null);

    useEffect(() => {
        if (firstRender.current) {
          firstRender.current = false;
          return;
        }
        setDisabled(formValidation());
      }, [username,password]);
      const formValidation = () => {
        if (username === "") {
          setUserNameError("otp code cant be blank!");
          return true;
        }
        if (password === "") {
            setPasswordError("otp code cant be blank!");
            return true;
          }
        else {
          setUserNameError(null);
          setPasswordError(null);
          return false;
        }
      };
      const handleSave = () => {
        axios("https://saptasoch.herokuapp.com/vendor/signin", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          data: { username,password},
        });
        history.push(`/`);
      };

    return (
         <div className="mallseller">
      <div className="mallseller-head">
        <h3>Login to SaptaBazarMall Seller</h3>
      </div>

      <div className="mallseller-main">
        <form>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter otp code"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {userNameError && <p>{userNameError}</p>}
          </div>
          <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p>{passwordError}</p>}
        </div>

          <button type="submit" className="btn btn-primary btn-block">
            Continue
          </button>
          <p className="forgot-password text-right">
            Don't have an account<a href="#"> sign up?</a>
          </p>
        </form>
      </div>
    </div>
    )
}

export default LoginSeller
