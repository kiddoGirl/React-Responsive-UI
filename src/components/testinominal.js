import React from "react";

const FeaturesWithTestimonial = () => {

  return (

    <div className="features-testimonial-container">

      <div className="logomark">

        <img
          src="/logomark-1.png"
          alt="Candice Wu"
          className="author-image"
        />

        <img
          src="/testinominal.png"
          alt="Candice Wu"
          className="author-image"
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

          <p>
            <strong>Candice Wu</strong>
            <br />
            Product Manager, Sisyphus
          </p>

        </div>

      </div>


      
      <div className="features-container">

        <h3>Cutting-edge features for advanced analytics</h3>

        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        <div className="feature-images">

          <img
            src="/hero.png"
            alt="Mobile analytics UI"
            className="feature-image-mobile"
          />

          <img
            src="/mockup-wrap.png"
            alt="Desktop analytics UI"
            className="feature-image-desktop"
          />

        </div>

      </div>

    </div>

  );
};

export default FeaturesWithTestimonial;