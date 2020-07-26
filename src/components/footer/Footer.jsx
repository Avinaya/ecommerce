import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-tools-top">
        <div className="footer-tools-top-item footer-tools-top-mail-phone">
          <i className="fa fa-envelope footer-tools-top-item-icon"></i>
          <div>
            <span className="d-block footer-tools-top-item-heading ">
              Email Support
            </span>
            <span className="d-block">info@saptasoch.com</span>
          </div>
        </div>

        <div className="footer-tools-top-item footer-tools-top-mail-phone">
          <i className="fa fa-phone footer-tools-top-item-icon "></i>
          <div>
            <span className="d-block footer-tools-top-item-heading">
              Phone Support
            </span>
            <span className="d-block">+977 986026218x</span>
          </div>
        </div>

        <div className="footer-tools-top-item footer-tools-top-mail-phone ">
          <div>
            <span className="d-block footer-tools-top-item-heading  ">
              GET LATEST DEALS
            </span>
            <span className="d-block">
              Our best promotions sent to your inbox.
            </span>
          </div>
        </div>

        <div className="footer-tools-top-item">
          <form className="d-flex footer-form">
          <input className="footer-form-input"  type="text" name="email" placeholder="Email"/>
          <button className="btn footer-form-btn">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-tools-bottom">bottom</div>
    </div>
  );
};

export default Footer;
