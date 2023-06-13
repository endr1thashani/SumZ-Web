import React from 'react'
import './footer.css'
const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-heading">
      <h1 className="gradient__text">Do you want to step in to the endless future?</h1>
    </div>

    <div className="footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        <h1>SumZ</h1>
        <p>Prishtina , Kosovo, <br /> All Rights Reserved</p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>Prishtina , Kosovo</p>
        <p>044 111 111</p>
        <p>info@sumz.net</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2023 SumZ. All rights reserved.</p>
    </div>
  </div>
);


export default Footer
