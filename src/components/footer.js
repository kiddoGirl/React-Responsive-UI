import React from "react";
import "../index.css";

const FooterSection = () => {
  return (
    <div className="footer-section">
      <div className="trial-section">
        <h1 className="trial-heading">Start your free trial</h1>
        <p className="trial-subheading">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="trial-buttons">
          <button className="btn learn-more">Learn more</button>
          <button className="btn get-started">Get started</button>
        </div>
      </div>

      <div className="footer-links">
        <div className="link-column">
          <h4>Product</h4>
          <ul>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions <span className="new-badge">New</span></li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>
        <div className="link-column">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="link-column">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="link-column">
          <h4>Use cases</h4>
          <ul>
            <li>Startups</li>
            <li>Enterprise</li>
            <li>Government</li>
            <li>SaaS Centre</li>
            <li>Marketplaces</li>
            <li>Ecommerce</li>
          </ul>
        </div>
        <div className="link-column">
          <h4>Social</h4>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </div>
        <div className="link-column">
          <h4>Legal</h4>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <img
          src="/brand.png"
          alt="Brand Logo"
          className="brand-logo"
        />
        <span className="copyright">© 2077 Untitled UI. All rights reserved.</span>
      </div>
    </div>
  );
};

export default FooterSection;
