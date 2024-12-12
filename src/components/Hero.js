import React from "react";
import heroImg from "../assets/img/hero-img.png"; // Uncomment if you're using an image

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Central Hub for Jobs and Talent</h1>
            <p>
              WorkLob is the ultimate platform connecting job seekers,
              employers, and freelancers. Whether you're looking for full-time,
              part-time, or freelance work—or you're a job creator searching for
              top talent—WorkLob brings everything about jobs and opportunities
              into one place.
            </p>
            {/* <div className="d-flex">
              <a
                style={{ marginRight: "10px" }}
                href="#about"
                className="btn-get-started"
              >
                Find Job
              </a>
              <a href="#about" className="btn-get-started">
                Find Talent
              </a>
            </div> */}
            <div className="d-flex">
              <a
                href="https://forms.gle/gFNerRLqiF38wf5h9"
                target="_blank"
                className="btn-get-started"
              >
                Join Waitlist
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img
              src={heroImg} // Update with actual path if you're using an image
              className="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
