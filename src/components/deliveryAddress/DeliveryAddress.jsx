import React, { useState } from "react";
import {useStateValue} from "./../contexApi/stateProvider/StateProvider";
import "./../login/Login.scss";


function DeliveryAddress(props){
    const [{deliveryAddress},dispatch]=useStateValue();
    const [city,setCity]=useState(0);
    const [contactNo,setContactNo]=useState(0);
    const[district,setDistrict]=useState(0);
    const [state,setState]=useState(0);
    const [street,setStreet]=useState(0);
    const[contactPerson,setContactPerson]=useState(0);
    const onChangeCity = (e) =>{
        setCity(e.target.value);
    }
    const onChangeContactNo=(e) =>{
        setContactNo(e.target.value);
    }
    const onChangeDistrict= (e) => {
        setDistrict(e.target.value);
    }

    const onChangeState = (e) => {
        setState(e.target.value);
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    }

    const onChangeContactPerson = (e) => {
        setContactPerson(e.target.value);
    }

    const addToDelivery= () =>{
     
        dispatch({
            type:"ADD_TO_DELIVERY",
            item:{
                city:city,
                contactNo:contactNo,
                district:district,
                state:state,
                street:street,
                contactPerson:contactPerson
                

            }
            
          }
         
          
          );
          props.data(false);
          
            }

    const required = value => {
        if(!value){
            return(
                <div className="alert alert-danger" role="alert">
                    This field is requird!
                </div>
            )
        }
    };
return(   <div className="login">
<div className="login-items">

    <div className="login-items-account">
        
        <div className="login-items-account-entity">

         

            

                   

        <div className="text">
            <label htmlFor="contactNo">Contact Number</label>
            <input
              type="text"
              className="login-items-account-entity-form-control"
              name="contactNo"
              placeholder="Enter contact no"
             
              onChange={onChangeContactNo}
              validations={[required]}
            />
          </div>

          <div className="text">
            <label htmlFor="contactPerson">Contact Person</label>
            <input
              type="text"
              className="login-items-account-entity-form-control"
              name="contactPerson"
              placeholder="Enter contact person name"
              onChange={onChangeContactPerson}
              validations={[required]}
            />
          </div>
          <div className="text">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="login-items-account-entity-form-control"
              name="city"
              placeholder="Enter city"
              onChange={onChangeCity}
              validations={[required]}
            />
          </div>
          <div className="text">
            <label htmlFor="district">District</label>
            <input
              type="text"
              className="login-items-account-entity-form-control"
              name="district"
              placeholder="Enter district"
              onChange={onChangeDistrict}
              validations={[required]}
            />
          </div>

          <div className="text">
            <label htmlFor="state">State</label>
            <input
              type="text"
              className="login-items-account-entity-form-control"
              name="state"
              placeholder="Enter state"
              onChange={onChangeState}
              validations={[required]}
            />
          </div>

          <div className="text">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              className="login-items-account-entity-form-control"
              name="street"
              placeholder="Enter street"
              
              onChange={onChangeStreet}
              validations={[required]}
            />
          </div>

          <div className="text">
            <button className="btn btn-primary btn-block" onClick={addToDelivery}>Add Address</button>
          </div>

        </div>
       
    </div>
</div>
</div>

);
}
export default DeliveryAddress;