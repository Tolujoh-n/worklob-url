import React from "react";
import heroImg from "../assets/img/hero-img.png";

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="container">
        <div className="row gy-4 align-items-center">
          {/* Text Section */}
          <div className="col-12 col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>A global hub connecting Job seekers with work opportunities</h1>
            <p>
              WorkLoob is a decentralized platform linking job seekers,
              employers, and freelancers. Enhanced with AI-powered agents for
              specialized tasks—plus a crypto ATM card for easy withdrawals from
              crypto to your currency.
            </p>
            <div className="d-flex">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeOK0RwuDiFReZHLs9swtidRwcJDZ8IhLMdL0OaKrm2_Yd0iQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-get-started"
              >
                Join Waitlist
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-12 col-lg-6 order-1 order-lg-2 hero-img">
            <img
              src={heroImg}
              className="img-fluid animated"
              alt="Hero"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
