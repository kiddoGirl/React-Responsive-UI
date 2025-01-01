import React from "react";
import "../index.css";


const FeaturesSection = () => {

  return (

    <div className="features-container">

      <div className="feature-intro">

        <p className="features">Features</p>

        <h2>Analytics that feels like it is from the future</h2>

        <p className="features-content">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>


      </div>

      <div className="features-grid">


        <div className="feature-card">

          <div className="feature-img-card">
            <img
              src="/icon-1.png"
              alt="Dashboard screenshot"
              className="features-image"
            />
          </div>

          <h3>Share team inboxes</h3>

          <p>
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>

        </div>


        <div className="feature-card">

          <div className="feature-img-card">
            <img
              src="/icon-2.png"
              alt="Dashboard screenshot"
              className="features-image"
            />
          </div>

          <h3>Deliver instant answers</h3>

          <p>
            An all-in-one customer service platform that helps you balance
            everything your customers need to be happy.
          </p>

        </div>


        <div className="feature-card">

          <div className="feature-img-card">
            <img
              src="/icon-3.png"
              alt="Dashboard screenshot"
              className="features-image"
            />
          </div>

          <h3>Manage your team with reports</h3>

          <p>
            Measure what matters with Untitled easy-to-use reports. You can
            filter, export, and drill down on the data in a couple clicks.
          </p>

        </div>


        <div className="feature-card">

          <div className="feature-img-card">
            <img
              src="/icon-4.png"
              alt="Dashboard screenshot"
              className="features-image"
            />
          </div>

          <h3>Connect with customers</h3>

          <p>
            Solve a problem or close a sale in real-time with chat. If no one is
            available, customers are seamlessly routed to email without
            confusion.
          </p>

        </div>


        <div className="feature-card">

          <div className="feature-img-card">
            <img
              src="/icon-5.png"
              alt="Dashboard screenshot"
              className="features-image"
            />
          </div>

          <h3>Connect the tools you already use</h3>

          <p>
            Explore 100+ integrations that make your day-to-day workflow more
            efficient and familiar. Plus, our extensive developer tools.
          </p>

        </div>


        <div className="feature-card">

          <div className="feature-img-card">
            <img
              src="/icon-6.png"
              alt="Dashboard screenshot"
              className="features-image"
            />
          </div>

          <h3>Our people make the difference</h3>

          <p>
            We are an extension of your customer service team, and all of our
            resources are free. Chat to our friendly team 24/7 when you need
            help.
          </p>

        </div>

      </div>

    </div>

  );
};

export default FeaturesSection;
