import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Link } from "react-router-dom";
import Cart from "./../cart/Cart";
import { withRouter } from 'react-router-dom';
import qs from "querystring";
import { isEmail } from "validator";
import "./SignUp.scss"

import AuthService from "../../service/auth.service";
const query=require('qs');
const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const email = value => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };

  const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };

  const vphone = value => {
    if (value.length < 14 || value.length > 14) {
      return (
        <div className="alert alert-danger" role="alert">
          Your number must be 10 digits.
        </div>
      );
    }
  };

 class SignUp extends Component{


    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeCustomername = this.onChangeCustomername.bind(this);
        this.onChangeContactno=this.onChangeContactno.bind(this);
        this.onChangeArea=this.onChangeArea.bind(this);
        this.onChangeStreet=this.onChangeStreet.bind(this);
        this.onChangeDistrict=this.onChangeDistrict.bind(this);
        this.onChangeState=this.onChangeState.bind(this);
        this.onChangeCountry=this.onChangeCountry.bind(this);        
        this.onChangeZipcode=this.onChangeZipcode.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangeUsername=this.onChangeUsername.bind(this); 
        this.onChangePassword=this.onChangePassword.bind(this);
        

        this.state={
          customername:"",
          contactno:"",
          area:"",
          street:"",
          district:"",
          state:"",
          country:"",
          zipcode:"",
          email:"",
          username:"",
          password:"",
          image:"abcd",
          verificationcode:"123",
          status:"inactive",
            successful: false,
            message: ""
        };
    }

    onChangeCustomername(e) {
      this.setState({
        customername: e.target.value
      });
    }

    
      onChangeContactno(e) {
        this.setState({
          contactno: e.target.value
        });
      }

      onChangeArea(e) {
        this.setState({
          area: e.target.value
        });
      }

      onChangeStreet(e) {
        this.setState({
          street: e.target.value
        });
      }

      onChangeDistrict(e) {
        this.setState({
          district: e.target.value
        });
      }

      onChangeState(e) {
        this.setState({
          state: e.target.value
        });
      }

      onChangeCountry(e) {
        this.setState({
          country: e.target.value
        });
      }

      onChangeZipcode(e) {
        this.setState({
          zipcode: e.target.value
        });
      }

      
      
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
      }

      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
      }

      onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
      }

      

      handleRegister(e) {
        e.preventDefault();
        
        
    
        this.setState({
          message: "",
          successful: false
        });
    
        this.form.validateAll();
    
        if (this.checkBtn.context._errors.length === 0) {
          AuthService.checkCredentials(
            this.state.customername,
            this.state.contactno,
            this.state.area,
            this.state.street,
            this.state.district,
            this.state.state,
            this.state.country,
            this.state.zipcode,
            this.state.email,
            this.state.username,
            this.state.password,
            this.state.image,
            this.state.verificationcode,
            this.state.status

            
          ).then(
            response => {
              this.setState({
                message: response.data.message,
                successful: true
              });
             
              
            }, 
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              this.setState({
                successful: false,
                message: resMessage
              });
            }
          );
          

          AuthService.sendOtpCode(this.state.contactno).then(response =>{
            this.setState({
              message: response.data.message,
              successful: true
            });
           
          }, 
          error => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            this.setState({
              successful: false,
              message: resMessage
            });
          }
          
          );
          this.props.history.push({ pathname: '/verify',
              search: '?query=abc',
              state: this.state
            });
        }
        
      }


    render(){
        return(
        <div className="signup">
            <div className="signup-items">
            <Link className="signup-link" to="/">
                <span className="logo">Sapta</span><span className="logo-1">Bazar</span>
                </Link>
                <div className="signup-items-account">
                    <header className="signup-items-account-header">
                        <h1 className="signup-items-account-header-element">Create An Account</h1>
                    </header>
                    <div className="signup-items-account-entity">
                        <Form className="signup-items-account-entity-form" 
                         onSubmit={this.handleRegister}
                         ref={c => {
                           this.form = c;
                         }}
                        >
                        <div className="signup-items-account-entity-form-point">
                            <label htmlFor="fullname">Full Name</label>
                            <Input
                    type="text"
                    className="signup-items-account-entity-form-control"
                    name="fullname"
                    placeholder="Enter Full Name"
                    value={this.state.customername}
                    onChange={this.onChangeCustomername}
                   validations={[required]}
                  />
                        </div>

                        <div className="signup-items-account-entity-form-point">
                            <label htmlFor="phonenumber">Phone Number</label>
                            <Input
                    type="text"
                    className="signup-items-account-entity-form-control"
                    name="phonenumber"
                    placeholder="Enter Phone Number"
                    value={this.state.contactno}
                    onChange={this.onChangeContactno}
                   validations={[required,vphone]}
                  />
                        </div>

                        <div className="signup-items-account-entity-form-point">
                            <label htmlFor="area">Area</label>
                            <Input
                    type="text"
                    className="signup-items-account-entity-form-control"
                    name="area"
                    placeholder="Enter Area"
                    value={this.state.area}
                    onChange={this.onChangeArea}
                   validations={[required]}
                  />
                        </div>

                        <div className="signup-items-account-entity-form-point">
                            <label htmlFor="street">Street</label>
                            <Input
                    type="text"
                    className="signup-items-account-entity-form-control"
                    name="street"
                    placeholder="Enter Street"
                    value={this.state.street}
                    onChange={this.onChangeStreet}
                   validations={[required]}
                  />
                        </div>
                    
                        <div className="signup-items-account-entity-form-point">
                            <label htmlFor="district">District</label>
                            <Input
                    type="text"
                    className="signup-items-account-entity-form-control"
                    name="district"
                    placeholder="Enter District"
                    value={this.state.district}
                    onChange={this.onChangeDistrict}
                   validations={[required]}
                  />
                        </div>

                        <div className="signup-items-account-entity-form-point">
                            <label htmlFor="state">State</label>
                            <Input
                    type="text"
                    className="signup-items-account-entity-form-control"
                    name="state"
                    placeholder="Enter State"
                    value={this.state.state}
                    onChange={this.onChangeState}
                   validations={[required]}
                  />
                        </div>

                        <div className="signup-items-account-entity-form-point">
                            <label htmlFor="country">Country</label>
                            <Input
                    type="text"
                    className="signup-items-account-entity-form-control"
                    name="country"
                    placeholder="Enter Country"
                    value={this.state.country}
                    onChange={this.onChangeCountry}
                   validations={[required]}
                  />
                        </div>

                        <div className="signup-items-account-entity-form-point">
                            <label htmlFor="zipcode">ZipCode</label>
                            <Input
                    type="text"
                    className="signup-items-account-entity-form-control"
                    name="zipcode"
                    value={this.state.zipcode}
                    placeholder="Enter Zipcode"
                    onChange={this.onChangeZipcode}
                   validations={[required]}
                  />
                        </div>
                        <div className="signup-items-account-entity-form-point">
                            <label htmlFor="email">Email</label>
                            <Input
                    type="text"
                    className="signup-items-account-entity-form-control"
                    name="email"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                   validations={[required,email]}
                  />
                        </div>
                        <div className="signup-items-account-entity-form-point">
                            <label htmlFor="username">Username</label>
                            <Input
                    type="text"
                    className="signup-items-account-entity-form-control"
                    name="username"
                    placeholder="Enter Username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                   validations={[required]}
                  />
                        </div>

                        <div className="signup-items-account-entity-form-point">
                            <label htmlFor="password">Password</label>
                            <Input
                    type="password"
                    className="signup-items-account-entity-form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    placeholder="Enter password"
                   validations={[required,vpassword]}
                  />
                        </div>

                        <div className="signup-items-account-entity-form-point">
                  <button className="btn btn-primary btn-block">Sign Up</button>
                </div>

                {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />

                <div className="signup-items-account-entity-form-terms">
                    <span>By signing up you accept our</span>
                    <a href="/signup"> terms and conditions</a>

                    <div>
                        <p class="signup-items-account-entity-form-terms-para"> & <a href="/signup"> privacy policy</a></p>
                        
                    </div>

                </div>

                        </Form>
                    </div>
                    <div className="signup-items-account-login">
                        <span>Already have an account?</span>
                        <a className="signup-items-account-login-click" href="/login">Login</a>
                    </div>
                </div>
            </div>
        </div>
        );
}

  }
  export default withRouter(SignUp);

 

