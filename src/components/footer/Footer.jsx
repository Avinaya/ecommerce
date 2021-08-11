import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import FooterMobile from "./FooterMobile";

const footerList = [
  {
    title: "Let us help you",
    name: [
      "Help Center",
      "How to shop on Saptabazar",
      "Delivery option and timelines",
      "How to return a product on Saptabazar?",
      "Corporate and bulk purchases",
      "Report a Product",
    ],
  },
  {
    title: "ABOUT Saptabazar",
    name: [
      "About us",
      "SaptaBazar Careers",
      "Terms and Conditions",
      "Privacy policy",
      "Stay Safe",
    ],
  },
  {
    title: "Make Money with saptaBazar",
    name: [
      "Sell on saptabazar",
      "Become an Affiliate Partner",
      "Become a Sales Consultant",
      "Become a saptabazar Vendor Service Provider",
      "Become a Logistics Service Partner",
    ],
  },
  {
    title: "Payment",
    name: ["Saptabazar Pay", "Mastercard", "Visa", "Esewa", "Khalti"],
  },
];

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-section-top">
          <div className="footer-section-top-item footer-section-top-item-logo">
            <Link className="link" to="/">
              <img
                style={{ height: "3rem", objectFit: "cover" }}
                src={require("../../image/Saptabazzarlogo.png")}
                alt="saptabazar"
              />
            </Link>
          </div>
          <div className="footer-section-top-item footer-section-top-item-newsLetter">
            <span>New To SaptaBazar ?</span>
            <p>
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
            <div className="footer-section-top-item-newsLetter-contact">
              <input type="email" placeholder="Enter Email-Address" />
              <button className="mx-3">Male</button>
              <button>Female</button>
            </div>
          </div>
          <div className="footer-section-top-item footer-section-top-item-app">
            <div className="footer-section-top-item-app-top">
              <i className="fa fa-shopping-cart" />
              <div>
                <span>Download SaptaBazar FREE APP</span>
                <p>Get access to exclusive offers!</p>
              </div>
            </div>
            <div className="footer-section-top-item-app-bottom">
              <div className="footer-section-top-item-app-bottom-app mr-3">
                <i className="fa fa-apple mr-2" aria-hidden="true" />
                <div>
                  <p>download on the</p>
                  <span>App Store</span>
                </div>
              </div>
              <div className="footer-section-top-item-app-bottom-app">
                <i className="fa fa-play mr-2" aria-hidden="true"></i>
                <div>
                  <p>get it on</p>
                  <span>Google Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-section-middle">
          {footerList.map((val, index) => {
            return (
              <div key={index} className="footer-section-middle-item">
                <span className="avinaya">{val.title}</span>
                <ul className="footer-section-middle-item-list">
                  {val.name.map((value, ind) => {
                    return (
                      <li key={ind}>
                        <Link
                          to="/"
                          className="link footer-section-middle-item-list-link"
                        >
                          {value}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="footer-section-bottom">
          <span>
            Copyright ©2020{" "}
            <Link to="/" className="link">
              SaptaBazar.com
            </Link>{" "}
            All rights reserved
          </span>
        </div>
      </div>
      <FooterMobile />
    </footer>
  );
}

export default Footer;
