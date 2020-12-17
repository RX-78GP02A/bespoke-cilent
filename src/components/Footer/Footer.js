import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
         
          <div className="footer-link-items">
            <h2>Contact Me</h2>
            <a href="mailto:mridley@knights.ucf.edu?subject='Hello'">
              Support
            </a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a target = "_blank" href="https://www.linkedin.com/in/marcus-ridley/" >LinkedIn</a>

          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
        <div className="footer-logo">
            <Link to="/" className="social-logo">
              BESPOKE
            </Link>
          </div>
          <small className="website-rights">©  Marcus Ridley Codes 2020</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
