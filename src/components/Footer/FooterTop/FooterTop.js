import React from "react";
import "./FooterTop.css";

const FooterTop = () => {
  return (
    <footer className="footer-top">
      <div className="footer-logo">
        <img
          src="https://i.ibb.co/2g1LBpB/AK-PNG.png"
          width="200px"
          alt="logo"
          className="footer-img"
        />
      </div>
      <div className="footer-desc">
        <p>
          {" "}
          AK Health Care, is one of India’s most trusted pharmacies, with over
          many years’ experience in dispensing quality medicines.
        </p>
      </div>
    </footer>
  );
};

export default FooterTop;
