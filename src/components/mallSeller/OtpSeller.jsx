import React from "react";
import "./MallSeller.scss";
import { useState,useEffect } from "react";
import { useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

function OtpSeller() {
    const history=useHistory();
  const [otp, setOtp] = useState();
  const firstRender = useRef(true);
  const[disabled,setDisabled]=useState(true);
  const [otpCodeError, setOtpCodeError] = useState(null);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setDisabled(formValidation());
  }, [otp]);
  const formValidation = () => {
    if (otp === "") {
      setOtpCodeError("otp code cant be blank!");
      return true;
    }
    else {
      setOtpCodeError(null);
      
      return false;
    }
  };
  const handleSave = () => {
    let formData=new FormData();
    formData.append("otp",otp);
    return axios.post(
        "https://saptasoch.herokuapp.com/vendor/verifyOtp",
      formData
    );
    history.push(`/login-seller`);
  };
  return (
    <div className="mallseller">
      <div className="mallseller-head">
        <h3>Enter otp code sent to your email</h3>
      </div>

      <div className="mallseller-main">
        <form>
          <div className="form-group">
            <label>Otp Code</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter otp code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            {otpCodeError && <p>{otpCodeError}</p>}
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default OtpSeller;
