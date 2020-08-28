import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Search from "./search/Search";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="navBar-tools">
        <div className="navBar-tools-item navBar-tools-item-logo">
          <Link to="/" className="link">
            <span className="navBar-tools-item-logo-text1">Sapta</span>
            <span className="navBar-tools-item-logo-text2">Bazar</span>
          </Link>
        </div>
        <div className="navBar-tools-item navBar-tools-item-store">
          <Link to="/" className="link">
            Store <br></br> Locator
          </Link>
        </div>
        <div className="navBar-tools-item navBar-tools-item-help">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle navBar-tools-item-help-btn"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Help
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/">
                FAQs
              </a>
              <a className="dropdown-item" href="/">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="navBar-tools-item navBar-tools-item-search">
          <Search />
        </div>
        <div className="navBar-tools-item navBar-tools-item-sell">
          <Link to="/" className="link">
            Sells On <br></br>SaptaBazar
          </Link>
        </div>
        <div className="navBar-tools-item navBar-tools-item-login">
          <Link to="/" className="link">
            Login / <br></br>Signup
          </Link>
        </div>
        <div className="navBar-tools-item navBar-tools-item-cart">
          <i className="fa fa-shopping-cart mr-1"></i>
          <span className="mr-1 navBar-tools-item-cart-text">My Cart</span>
          <span className="navBar-tools-item-item">0</span>
        </div>

        <div className="navBar-tools-item-sell_cart-mob">
          <div className="navBar-tools-item-sell_cart-mob-sell mr-3">
            <Link to="/" className="link">
              <i className="fas fa-store-alt"></i>
            </Link>
          </div>
          <div className="navBar-tools-item-sell_cart-mob-cart">
            <Link to="/" className="link">
              <i className="fa fa-shopping-cart mr-1"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="nav-searchBar-mob">
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
