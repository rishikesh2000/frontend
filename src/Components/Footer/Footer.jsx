import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={require("../../Assests/logo.png")} alt="Nayara Logo" className="logo" />
       
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/plans">Products & Services</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Support & Help</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/terms">Terms Policy</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><strong>info@thenayaraholidays.com</strong></p>
          <p className="note">
            NOTE: The Nayara Holidays is an independent service provider offering top-notch hotel and resort facilities.
            We are an independent service provider offering top-notch hotel and resort facilities.
          </p>
          <h4>Scan QR Code</h4>
          <img src={require("../../Assests/qrCode.png")} alt="QR Code" className="qr-code" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 <strong>The Nayara Holidays.</strong> All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
