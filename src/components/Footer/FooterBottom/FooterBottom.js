import React from "react";
import "./FooterBottom.css";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div>
        <span>
          Made with <i class="fa fa-heart pulse"></i> in{" "}
          <a
            href="https://www.google.de/maps/place/Augsburger+Puppenkiste/@48.360357,10.903245,17z/data=!3m1!4b1!4m2!3m1!1s0x479e98006610a511:0x73ac6b9f80c4048f"
            target="_blank"
          ></a>
          <span style={{ postion: "relative", left: "20px" }}>India</span>
        </span>
      </div>
    </div>
  );
};

export default FooterBottom;
