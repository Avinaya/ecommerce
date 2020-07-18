import React from "react";
import "./Navbar.scss";
import Image from "../../image/konga.png";
import { Link } from "react-router-dom";
import CollasableMenu from "../collapsMenu/CollasableMenu";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="header-tools">
          <div className="header-tools-item i1">
            <Link className="header-link" to="/">
<img src={Image} alt="konga" /></Link>
          </div>
          <div className="header-tools-item i2">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle drop-btn"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Help
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link className="dropdown-item" to="/">
                  FAQs
                </Link>
                <Link className="dropdown-item" to="/">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="header-tools-item i3">
            <form>
              <div className="input-group py-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Products, Brands, Categories......"
                />
                <div className="input-group-append">
                  <button className="btn header-search-btn"><i className="fa fa-search"></i></button>
                </div>
              </div>
            </form>
          </div>
          <div className="header-tools-item i4">
          <Link  className="header-link"to="/">Sells On Kanga</Link>
          </div>
          <div className="header-tools-item i5">
          <Link  className="header-link"to="/"><i className="fa fa-user-o"></i> Login / SignUp</Link>
          </div>
        </div>
        <CollasableMenu/>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
