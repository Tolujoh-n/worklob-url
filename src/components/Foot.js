import React from "react";

const Foot = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">WorkLoob</span>
            </a>
            <div className="footer-contact pt-3">
              <p>
                WorkLoob is a Decentralized freelance marketplace on the BASE
                Blockchain, offering lower fees, transparent operations, and
                secure payments, empowering freelancers and clients to connect
                directly and control their work through community-driven
                governance.
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a
                href="https://x.com/workloobglobal?s=21"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://discord.gg/8scmgMb7"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="bi bi-discord"></i>
              </a>
              <a
                href="https://t.me/workloob"
                target="_blank"
                aria-label="Telegram"
              >
                <i className="bi bi-telegram"></i>
              </a>
              <a
                href="https://www.facebook.com/workloob/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="https://www.linkedin.com/company/workloob"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Premium</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 footer-links">
            <h4>Categories in Jobs</h4>
            <ul>
              <li>
                <a href="#">Design & Creative Jobs</a>
              </li>
              <li>
                <a href="#">Web, Mobile & Software Jobs</a>
              </li>
              <li>
                <a href="#">Writing & Translation</a>
              </li>
              <li>
                <a href="#">Sales & Marketing</a>
              </li>
              <li>
                <a href="#">Customer Service & Support</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Freelance Jobs</a>
              </li>
              <li>
                <a href="#">Full-time Jobs </a>
              </li>
              <li>
                <a href="#">Gigs</a>
              </li>
              <li>
                <a href="#">AI Agents</a>
              </li>
              <li>
                <a href="#">Atm Card</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>
          <strong className="px-1 sitename">WorkLoob 2025</strong>
          <span>All Rights Reserved</span>
        </p>
      </div>

      {/* Scroll Top Button */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
        aria-label="Scroll to top"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </footer>
  );
};

export default Foot;
