import React,{useRef,useEffect} from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { useState } from "react";
import "./MallSeller.scss";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
function MallSeller(props) {
  const history=useHistory();
  const [disabled,setDisabled]=useState(true);
  const firstRender=useRef(true);
  const [vendorName, setVendorName] = useState();
  const [vendorNameError,setVendorNameError]=useState(null);
  const [businessTypeError, setBusinessTypeError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [contactNoError, setContactNoError] = useState(null);
  const [countryError, setCountryError] = useState(null);
  const [districtError, setDistrictError] = useState(null);
  const [stateError, setStateError] = useState(null);
  const [areaError, setAreaError] = useState(null);
  const [streetError, setStreetError] = useState(null);
  const [panNoError, setPanNoError] = useState(null);
  const [taxClearanceNoError, setTaxClearanceNoError] = useState(null);
  const [userNameError, setUserNameError] = useState(null);
  const [zipCodeError, setZipCodeError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [commissionAmountError, setCommissionAmountError] = useState(null);
  const [businessType, setBusinessType] = useState();
  const [email, setEmail] = useState();
  const [contactNo, setContactNo] = useState();
  const [country, setCountry] = useState();
  const [district, setDistrict] = useState();
  const [state, setState] = useState();
  const [area, setArea] = useState();
  const [street, setStreet] = useState();
  const [panNo, setPanNo] = useState();
  const [taxClearanceNo, setTaxClearanceNo] = useState();
  const [username, setUsername] = useState();
  const [zipCode, setZipCode] = useState();
  const [password, setPassword] = useState();
  const [commissionAmount, setCommissionAmount] = useState();
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setDisabled(formValidation());
  }, [vendorName, businessType, email,contactNo,country,district,state,area,street,panNo,taxClearanceNo,username,zipCode,password,commissionAmount]);
  const formValidation = () => {
    if (vendorName === "") {
      setVendorNameError("Vendor Name cant be blank!");
      return true;
    }
    if (businessType === "") {
      setBusinessTypeError("Business type cant be blank!");
      return true;
    }
    if (email === "") {
      setEmailError("Email cant be blank!");
      return true;
    }
    if (contactNo === "") {
      setContactNoError("Contact number cant be blank!");
      return true;
    }
    if (country === "") {
      setCountryError("Country cant be blank!");
      return true;
    }
    if (district === "") {
      setDistrictError("District cant be blank!");
      return true;
    }
    if (state === "") {
      setStateError("State cant be blank!");
      return true;
    }
    if (area === "") {
      setAreaError("Area cant be blank!");
      return true;
    }
    if (street === "") {
      setStreetError("Street cant be blank!");
      return true;
    }
    if (panNo === "") {
      setPanNoError("Pan number cant be blank!");
      return true;
    }
    if (taxClearanceNo === "") {
      setTaxClearanceNoError("Tax clearance number cant be blank!");
      return true;
    }
    if (username === "") {
      setUserNameError("User Name cant be blank!");
      return true;
    }
    if (zipCode === "") {
      setZipCodeError("Zipcode cant be blank!");
      return true;
    }
    if (password === "") {
      setPasswordError("Password cant be blank!");
      return true;
    }
    if (commissionAmount === "") {
      setCommissionAmountError("Commission Amount cant be blank!");
      return true;
    }
     else {
       setVendorNameError(null);
      setBusinessTypeError(null);
      setEmailError(null);
      setContactNoError(null);
      setCountryError(null);
      setDistrictError(null);
      setAreaError(null);
      setStateError(null);
      setStreetError(null);
      setPanNoError(null);
      setTaxClearanceNoError(null);
      setUserNameError(null);
      setZipCodeError(null);
      setPasswordError(null);
      setCommissionAmountError(null);
      return false;
    }
  };
  const handleSignUp =()=>{

    axios("https://saptasoch.herokuapp.com/vendor/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: { vendorName, businessType, email,contactNo,country,district,state,area,street,panNo,taxClearanceNo,username,zipCode,password,commissionAmount },
    });
    history.push(`/otp-seller`);
  };
  return (
    <div className="mallseller">
      <div className="mallseller-head">
        <h3>Sign Up As SaptaBazarMall Seller</h3>
      </div>

      <div className="mallseller-main">
        <form onSubmit={handleSignUp}>
          <div className="form-group">
            <label>Vendor name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter vendor name"
              value={vendorName}
              onChange={(e) => setVendorName(e.target.value)}
            />
            {vendorNameError && <p>{vendorNameError}</p>}
          </div>

          <div className="form-group">
            <label>Business type</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter business type"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
            />
            {businessTypeError && <p>{businessTypeError}</p>}
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p>{emailError}</p>}
          </div>
          <div className="form-group">
            <label>Contact number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter contact number"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
            {contactNoError && <p>{contactNoError}</p>}
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
          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            {countryError && <p>{countryError}</p>}
          </div>
          <div className="form-group">
            <label>District</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
            {districtError && <p>{districtError}</p>}
          </div>
          <div className="form-group">
          <label>State</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          {stateError && <p>{stateError}</p>}
        </div>
        <div className="form-group">
            <label>Area</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
            {areaError && <p>{areaError}</p>}
          </div>
          <div className="form-group">
            <label>Street</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            {streetError && <p>{streetError}</p>}
          </div>
          <div className="form-group">
          <label>Pan number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter pan number"
            value={panNo}
            onChange={(e) => setPanNo(e.target.value)}
          />
          {panNoError && <p>{panNoError}</p>}
        </div>
        <div className="form-group">
            <label>Tax clearance number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter tax clearance number"
              value={taxClearanceNo}
              onChange={(e) => setTaxClearanceNo(e.target.value)}
            />
            {taxClearanceNoError && <p>{taxClearanceNoError}</p>}
          </div>
          <div className="form-group">
            <label>User name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter user name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {userNameError && <p>{userNameError}</p>}
          </div>
          <div className="form-group">
            <label>Zip code</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter zip code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            {zipCodeError && <p>{zipCodeError}</p>}
          </div>
          <div className="form-group">
            <label>Commission amount</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter commission amount"
              value={commissionAmount}
              onChange={(e) => setCommissionAmount(e.target.value)}
            />
            {commissionAmountError && <p>{commissionAmountError}</p>}
          </div>

          

          <button type="submit" className="btn btn-primary btn-block" disabled={disabled}>
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default MallSeller;
