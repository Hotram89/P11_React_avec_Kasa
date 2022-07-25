import React from "react";
import companyLogo from "../../assets/LOGO_white.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <img src={companyLogo} alt="logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
