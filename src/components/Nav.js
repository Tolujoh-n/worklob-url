import React, { useState, useEffect } from "react";
// import logo from 'assets/img/logo.png';
import { initHeaderScrolled } from "../assets/js/headerScrolled";

const Nav = () => {
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  // Toggle mobile nav
  const toggleMobileNav = () => {
    setMobileNavActive((prev) => !prev);
  };

  // Close mobile nav on link click
  const handleLinkClick = () => {
    setMobileNavActive(false);
  };

  // Add/remove class to body based on toggle
  useEffect(() => {
    if (isMobileNavActive) {
      document.body.classList.add("mobile-nav-active");
    } else {
      document.body.classList.remove("mobile-nav-active");
    }
  }, [isMobileNavActive]);

  useEffect(() => {
    initHeaderScrolled();
  }, []);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          {/* <img src={logo} alt="Logo" /> */}
          <h1 className="sitename">WorkLoob</h1>
          <span>.</span>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul style={{ textAlign: "right" }}>
            <li>
              <a href="#hero" className="active" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#crypto-jobs" onClick={handleLinkClick}>
                Full-Time Jobs
              </a>
            </li>
            <li>
              <a href="#freelancee" onClick={handleLinkClick}>
                Freelance Jobs
              </a>
            </li>
            <li className="dropdown">
              <a href="#browsegig" onClick={(e) => e.preventDefault()}>
                <span>Catalogs</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#browsegig" onClick={handleLinkClick}>
                    Browse Gigs
                  </a>
                </li>
                <li>
                  <a href="#browsegig" onClick={handleLinkClick}>
                    Browse Talents
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://app.workloob.com/" onClick={handleLinkClick}>
                Doc
              </a>
            </li>
            <li>
              <a href="https://app.workloob.com/" onClick={handleLinkClick}>
                Get Started
              </a>
            </li>
          </ul>

          {/* Toggle icon for mobile */}
          <i
            className={`mobile-nav-toggle d-xl-none bi ${
              isMobileNavActive ? "bi-x" : "bi-list"
            }`}
            onClick={toggleMobileNav}
          ></i>
        </nav>

        <a className="btn-getstarted" href="https://app.workloob.com/">
          Post Job
        </a>
      </div>
    </header>
  );
};

export default Nav;
