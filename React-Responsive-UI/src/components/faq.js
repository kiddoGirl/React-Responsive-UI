import React, { useState } from "react";
import "../index.css";

const FaqSection = () => {

    const [openQuestion, setOpenQuestion] = useState (null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

  return (

    <div className="faq-section">

      <div className="faq-intro">

        <h3>Frequently Asked Questions</h3>

        <p>Everything you need to know about the product and billing.</p>

      </div>


      <div className="faq-container">

        <div className="faq-item" onClick={() => toggleQuestion(0)}>

          <div className="faq-question">
            Is there a free trial available?
            <span className="faq-icon">{openQuestion === 0 ? "−" : "+"}</span>
          </div>

          {openQuestion === 0 && (
            <div className="faq-answer">
              Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
            </div>
          )}

        </div>


        <div className="faq-item" onClick={() => toggleQuestion(1)}>

          <div className="faq-question">
            Can I change my plan later?
            <span className="faq-icon">{openQuestion === 1 ? "−" : "+"}</span>
          </div>

          {openQuestion === 1 && <div className="faq-answer">Yes, you can upgrade or downgrade your plan anytime.</div>}
        </div>


        <div className="faq-item" onClick={() => toggleQuestion(2)}>

          <div className="faq-question">
            What is your cancellation policy?
            <span className="faq-icon">{openQuestion === 2 ? "−" : "+"}</span>
          </div>

          {openQuestion === 2 && <div className="faq-answer">You can cancel anytime, and your subscription will remain active until the end of the billing cycle.</div>}
        </div>


        <div className="faq-item" onClick={() => toggleQuestion(3)}>

          <div className="faq-question">
            Can other info be added to an invoice?
            <span className="faq-icon">{openQuestion === 3 ? "−" : "+"}</span>
          </div>

          {openQuestion === 3 && <div className="faq-answer">Yes, you can customize invoices with additional information as needed.</div>}
        </div>


        <div className="faq-item" onClick={() => toggleQuestion(4)}>

          <div className="faq-question">
            How does billing work?
            <span className="faq-icon">{openQuestion === 4 ? "−" : "+"}</span>
          </div>

          {openQuestion === 4 && <div className="faq-answer">We bill you at the beginning of each billing cycle based on your subscription plan.</div>}
        </div>

      </div>


        <div className="faq-img-container">

            <div className="faq-img">

              <img
                src="/Avatar group.png"
                alt="Candice Wu"
                className="author-image1"
              />

            </div>

            <div className="faq-content">

              <p className="faq-title">Still have questions?</p>
              <p className="faq-contents">Can not find the answer you’re looking for? Please chat to our friendly team.</p>
              <button>Get In touch</button>

            </div>

        </div>


    </div>
   

  );
};

export default FaqSection;


