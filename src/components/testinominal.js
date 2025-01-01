import React from "react";

const FeaturesWithTestimonial = () => {

  return (

    <div className="features-testimonial-container">

      <div className="logomark">

        <img
          src="/Fictional-company-logo-6.png"
          alt="Candice Wu"
        />

      </div>

      
      <div className="testimonial-section">

        <h2>
          We have been using Untitled to kick start every new project and can not
          imagine working without it.
        </h2>

        <div className="testimonial-author">

          <img
            src="/profile.png"
            alt="Candice Wu"
            className="author-image"
          />

          <p className="testinominal-profile">Candice Wu</p>

          <p>Product Manager, Sisyphus</p>

        </div>

      </div>


      
      <div className="testinominal-container" style={{position: 'relative'}}>

        <div className="testinominal-content" style={{ margin: 'auto' }}>

          <p className="testiminal-features">Features</p>

          <h3>Cutting-edge features for advanced analytics</h3>

          <p className="testiminal-features-content">
            Powerful, self-serve product and growth analytics to help you convert,
            engage, and retain more users. Trusted by over 4,000 startups.
          </p>

        </div>

      
        <div className="testinominal-images">

          <img
            src="/hero.png"
            alt="Mobile analytics UI"
            className="testinominal-image-desktop"
          />

          <img
            src="/mobile.png"
            alt="Desktop analytics UI"
            className="testinominal-image-mobile"
          />

        </div>




        <div className="features-grid" style={{position: 'absolute' , top: '800px'}}>


          <div className="feature-card" style={{ height: '220px'}}>

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

            <p className="learn-more">Learn more &#8594;</p>

          </div>


          <div className="feature-card" style={{ height: '220px'}}>

            <div className="feature-img-card">
              <img
                src="/icon-2.png"
                alt="Dashboard screenshot"
                className="features-image"
              />
            </div>

            <h3>Share team inboxes</h3>

            <p>
            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
            </p>

            <p className="learn-more">Learn more &#8594;</p>

          </div>


          <div className="feature-card" style={{ height: '220px'}}>

            <div className="feature-img-card">
              <img
                src="/icon-3.png"
                alt="Dashboard screenshot"
                className="features-image"
              />
            </div>

            <h3>Share team inboxes</h3>

            <p>
            Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
            </p>

            <p className="learn-more">Learn more &#8594;</p>

          </div>

            

        </div>

      </div>

    </div>

  );
};

export default FeaturesWithTestimonial;