import React from "react";
import "../index.css";

const HeroSection = () => {

  return (

    <section className="hero">

      <div className="hero-top-bar">

        <button className="new-feature">New feature</button>

        <p className="check-dashboard">Check out the team dashboard</p>

      </div>

      <h1 className="hero-title">Beautiful analytics to grow smarter</h1>
      <p className="hero-description">
        Powerful, self-serve product and growth analytics to help you
        convert, engage, and retain more users. Trusted by over 4,000
        startups.
      </p>


      <div className="hero-actions">
        <button className="demo-btn">Demo</button>
        <button className="signup-btn">Sign up</button>
      </div>

      <div className="hero-image-container">
        <img
          src="/hero.png"
          alt="Dashboard screenshot"
          className="hero-image"
        />
      </div>

    </section>

  );

};

export default HeroSection;
