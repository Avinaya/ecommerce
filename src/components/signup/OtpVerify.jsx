import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import "./SignUp.scss"

import AuthService from "../../service/auth.service";

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };



 class OtpVerify extends Component{


    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeVerificationCode=this.onChangeVerificationCode.bind(this);
        
      
        this.state={
          customername:this.props.location.state.customername,
          contactno:this.props.location.state.contactno,
         
          email:this.props.location.state.email,
          
          password:this.props.location.state.password,
          
          verificationcode:"",
         
            successful: false,
            message: ""
        };
    }

       
      onChangeVerificationCode(e) {
        this.setState({
          verificationcode: e.target.value
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
          
          

          AuthService.verifyOtpCode(this.state.contactno,this.state.verificationcode).then(response =>{
            this.setState({
              message: response,
              successful: true
            }
            );
            console.log("message", response); 
            AuthService.register(
              this.state.customername,
              this.state.contactno,
             
              this.state.email,
             
              this.state.password,
              
  
              
            ).then(
              response => {
                this.setState({
                  message: response.data.message,
                  successful: true
                });
                console.log("message", response.data.message);
                // localStorage.setItem("user",JSON.stringify(this.state));
                this.props.history.push('/login');
               
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
                        <h1 className="signup-items-account-header-element">Verifcation</h1>
                    </header>
                    <div className="signup-items-account-entity">
                        <Form className="signup-items-account-entity-form" 
                         onSubmit={this.handleRegister}
                         ref={c => {
                           this.form = c;
                         }}
                        >
                        <div className="signup-items-account-entity-form-point">
                            <label htmlFor="fullname">Type OTP Code send in your number</label>
                            <Input
                    type="text"
                    className="signup-items-account-entity-form-control"
                    name="fullname"
                    placeholder="Enter Full Name"
                    value={this.state.verificationcode}
                    onChange={this.onChangeVerificationCode}
                   validations={[required]}
                  />
                        </div>

                      

                        <div className="signup-items-account-entity-form-point">
                  <button className="btn btn-primary btn-block">Verify</button>
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

                

                        </Form>
                    </div>
                   
                </div>
            </div>
        </div>
        );
}

  }
  export default withRouter(OtpVerify);

 

