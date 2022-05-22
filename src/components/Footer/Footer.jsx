import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='footer-text-container'>
        <div className='footer-logo'>
          <img src='/logo-03.png' alt='' />
        </div>
        <div className='footer-text'>&copy; Kasa. All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
