import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

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
            <input
              className="footer-form-input"
              type="text"
              name="email"
              placeholder="Email"
            />
            <button className="btn footer-form-btn">Subscribe</button>
          </form>
        </div>
      </div>

      <div>
      <div className="more-option-menu">
      <span>
      MORE OPTIONS</span>
      </div>
        <div className="footer-tools-bottom">
          <div className="footer-tools-bottom-item">
            <div className="footer-tools-bottom-item-side1">
              <div className="footer-tools-bottom-item-side1-AK">
                <Link className="footer-tools-bottom-link" to="/">
                  ABOUT KONGA
                </Link>

                <ul className="about-konga">
                  <li>
                    <a className="op" href="/">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="op" href="/">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="op" href="/">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a className="op" href="/">
                      Our Blog
                    </a>
                  </li>
                  <li>
                    <a className="op" href="/">
                      Forum
                    </a>
                  </li>
                  <li>
                    <a className="op" href="/">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-tools-bottom-item-side1-AK">
                <Link className="footer-tools-bottom-link" to="/">
                  PAYMENT
                </Link>

                <ul className="about-konga">
                  <li>
                    <a className="op" href="/">
                      KongaPay
                    </a>
                  </li>
                  <li>
                    <a className="op" href="/">
                      Wallet
                    </a>
                  </li>
                  <li>
                    <a className="op" href="/">
                      Verve
                    </a>
                  </li>
                  <li>
                    <a className="op" href="/">
                      Mastercard
                    </a>
                  </li>
                  <li>
                    <a className="op" href="/">
                      Visa
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-tools-bottom-item-side1-AK">
                <Link className="footer-tools-bottom-link" to="/">
                  BUYING ON KONGO
                </Link>

                <ul className="about-konga">
                  <li>
                    <a className="op" target="_self" href="/">
                      Buyer Safety Centre
                    </a>
                  </li>
                  <li>
                    <a className="op" href="/">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a className="op" href="/">
                      Delivery
                    </a>
                  </li>
                  <li>
                    <a className="op" href="/">
                      Konga Return Policy
                    </a>
                  </li>
                  <li>
                    <a className="op" href="/">
                      Digital Services
                    </a>
                  </li>
                  <li>
                    <a className="op" href="/">
                      Bulk Purchase
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-tools-bottom-item-side1-AK">
                <Link className="footer-tools-bottom-link" to="/">
                  MORE INFO
                </Link>

                <ul className="about-konga">
                  <li>
                    <a className="op" href="/">
                      Site Map
                    </a>
                  </li>
                  <li>
                    <a className="op" href="/">
                      Track My Order
                    </a>
                  </li>
                  <li>
                    <a className="op" href="/">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="op" href="/">
                      Authentic Items Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-tools-bottom-item-side1-AK">
                <Link className="footer-tools-bottom-link" to="/">
                  MAKE MONEY ON KONGO
                </Link>

                <ul className="about-konga">
                  <li>
                    <a className="op" href="/">
                      Become a Konga Affiliate
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-tools-bottom-item-side2">
              <div className="unique">DOWNLOAD & CONNECT WITH US</div>
              <div className="footer-tools-bottom-item-side2-one">
                <div className="footer-tools-bottom-item-side2-one-part">
                  <a className="op1" href="/">
                    <div className="footer-tools-bottom-item-side2-one-part-Imag">
                      <img
                        src={require("../../image/app store1.png")}
                        height="28"
                        width="24"
                        alt=""
                      ></img>
                    </div>
                    <div className="footer-tools-bottom-item-side2-one-part-text">
                      <p>Download on</p>
                      <h10>APP STORE</h10>
                    </div>
                  </a>
                  <a className="op1" href="/">
                    <div className="footer-tools-bottom-item-side2-one-part-Imag">
                      <img
                        src={require("../../image/app store1.png" ) } alt=""
                        height="28"
                        width="24"
                      ></img>
                    </div>
                    <div className="footer-tools-bottom-item-side2-one-part-text">
                      <p>Download on</p>
                      <h10>APP STORE</h10>
                    </div>
                  </a>
                </div>
              </div>

              <div className="footer-tools-bottom-item-side2-part2">
                <div className="unique">CONNECT WITH US</div>
                <div className="footer-tools-bottom-item-side2-part2-links">
                  <a className="op2" href="/">
                    <img src={require("../../image/fb.png")} alt=""></img>
                  </a>
                  <a className="op2" href="/">
                    <img src={require("../../image/tw.png")} alt=""></img>
                  </a>
                  <a className="op2" href="/">
                    <img src={require("../../image/fb.png")} alt=""></img>
                  </a>
                  <a className="op2" href="/">
                    <img src={require("../../image/you.png")} alt=""></img>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-tools-bottom-borderrakhum">
            <div className="footer-tools-bottom-borderrakhum-text">
              Copyright &copy;{new Date().getFullYear()} OfferBazzar.com. All
              rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
