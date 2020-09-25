import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Link } from "react-router-dom";

import "./Login.scss";
import AuthService from "../../service/auth.service";
import FacebookSocialLogin from "./../socialLogin/FacebookSocialLogin";

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      <div className="login">
        <div className="login-items">
          <Link className="login-link" to="/">
            <span className="logos">Sapta</span>
            <span className="logos-1">Bazar</span>
          </Link>
          <div className="login-items-account">
            <header className="login-items-account-header">
              <h1 className="login-items-account-header-element">Login</h1>
            </header>
            <div className="login-items-account-entity">
              <Form
                className="login-items-account-entity-form"
                onSubmit={this.handleLogin}
                ref={(c) => {
                  this.form = c;
                }}
              >
                <div className="login-items-account-entity-form-point">
                  <label htmlFor="phonenumber">Email or Phone Number</label>
                  <Input
                    type="text"
                    className="login-items-account-entity-form-control"
                    name="phonenumber"
                    placeholder="Enter email or phone number"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required]}
                  />
                </div>

                <div className="login-items-account-entity-form-point">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="login-items-account-entity-form-control"
                    name="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="login-items-account-entity-form-point">
                  <button
                    className="btn btn-primary btn-block"
                    disabled={this.state.loading}
                  >
                    {this.state.loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Login</span>
                  </button>
                </div>

                {this.state.message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {this.state.message}
                    </div>
                  </div>
                )}
                <CheckButton
                  style={{ display: "none" }}
                  ref={(c) => {
                    this.checkBtn = c;
                  }}
                />
              </Form>
              <FacebookSocialLogin />
            </div>

            <div className="extra">
              <span>Don't have an account?</span>
              <a className="extra-click" href="/signup">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
