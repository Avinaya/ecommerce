import React from "react";
import "./Footer.scss";

function FooterMobile() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footerMobile">
      <div className="footerMobile-scroll" onClick={scrollTop}>
        <i className="fas fa-angle-up" />
        <p>Back To Top</p>
      </div>
      <div className="footerMobile-tools">
        <div className="footerMobile-tools-item">Help Center</div>
        <div className="footerMobile-tools-item">Contact Us</div>
        <div className="footerMobile-tools-item">Terms & Conditions</div>
        <div className="footerMobile-tools-item">Become a Seller</div>
        <div className="footerMobile-tools-item">Report a Product</div>
      </div>
      <p>All Right Reserved</p>
    </div>
  );
}

export default FooterMobile;
