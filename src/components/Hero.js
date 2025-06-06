import React from "react";
import heroImg from "../assets/img/hero-img.png";

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="container">
        <div className="row gy-4 align-items-center">
          {/* Text Section */}
          <div className="col-12 col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Unified Network for Global Talent and Work</h1>
            <p>
              WorkLoob is the ultimate decentralized platform connecting job
              seekers, employers, and freelancers, enhanced with AI-powered
              agents to assist users in completing specialized tasks — WorkLoob
              combines blockchain technology with AI to bring everything about
              jobs and opportunities into one seamless experience.
            </p>
            <div className="d-flex">
              <a
                href="/"
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
