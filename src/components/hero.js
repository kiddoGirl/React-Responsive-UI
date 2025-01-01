import React from "react";
import "../index.css";

const HeroSection = () => {

  return (

    <section className="hero">

      <div className="hero-intro">

        <div className="hero-top-bar">

          <button className="new-feature">New feature</button>

          <p className="check-dashboard">Check out the team dashboard &#8594;</p>

        </div>

        <h1 className="hero-title">Beautiful analytics to grow smarter</h1>

        <p className="hero-description">
        Powerful, self-serve product and growth analytics to help you
        convert, engage, and retain more users. Trusted by over 4,000
        startups.
        </p>


        <div className="hero-actions">

          <button className="demo-btn">
            <img src="/play-circle.png" alt="Demo Icon" className="demo-icon" />
            Demo
          </button>

          <button className="signup-btn">Sign up</button>

        </div>

      </div>


      <div className="hero-image-container">
        <img
          src="/hero.png"
          alt="Dashboard screenshot"
          className="hero-image"
        />

        <div className="sponsers">

          <div className="sponsers-container">

            <p className="sponser-content">Join 4,000+ companies already growing</p>

            <div className="sponsers-icon">

              <img
                src="/Fictional-company-logo.png"
                alt="Dashboard screenshot"
                className="sponser-image"
              />

              <img
                src="/Fictional-company-logo-1.png"
                alt="Dashboard screenshot"
                className="sponser-image"
              />

              <img
                src="/Fictional-company-logo-2.png"
                alt="Dashboard screenshot"
                className="sponser-image"
              />
              
              <img
                src="/Fictional-company-logo-3.png"
                alt="Dashboard screenshot"
                className="sponser-image"
              />

              <img
                src="/Fictional-company-logo-4.png"
                alt="Dashboard screenshot"
                className="sponser-image"
              />

              <img
                src="/Fictional-company-logo-5.png"
                alt="Dashboard screenshot"
                className="sponser-image"
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};

export default HeroSection;
