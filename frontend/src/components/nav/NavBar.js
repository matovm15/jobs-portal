/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import useLinks from "../../utils/useLinks";

const NavBar = () => {
  const location = useLocation();
  const navLinks = useLinks(location);

  return (
    <header className="main-header">
      <div className="main-box">
        <div className="nav-outer">
          <div className="logo-box">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.svg" alt="" title="" />
              </a>
            </div>
          </div>

          <nav className="nav main-menu">
            <ul className="navigation" id="navbar">
              {navLinks.map((nav) => (
                <li className={nav.current} key={nav.id}>
                  <Link to={nav.path}>{nav.name}</Link>
                </li>
              ))}
              <li className="mm-add-listing">
                <a href="/jobs/add" className="theme-btn btn-style-one">
                  Post a Job
                </a>
                <span>
                  <span className="contact-info">
                    <span className="phone-num">
                      <span>Call us</span>
                      <a href="tel:1234567890">123 456 7890</a>
                    </span>
                    <span className="address">
                      329 Queensberry Street, North Melbourne VIC <br />
                      3051, Australia.
                    </span>
                    <a href="mailto:support@superio.com" className="email">
                      support@superio.com
                    </a>
                  </span>
                  <span className="social-links">
                    <a href="#">
                      <span className="fab fa-facebook-f"></span>
                    </a>
                    <a href="#">
                      <span className="fab fa-twitter"></span>
                    </a>
                    <a href="#">
                      <span className="fab fa-instagram"></span>
                    </a>
                    <a href="#">
                      <span className="fab fa-linkedin-in"></span>
                    </a>
                  </span>
                </span>
              </li>
            </ul>
          </nav>
        </div>

        <div className="outer-box">
          <a href="candidate-dashboard-cv-manager.html" className="upload-cv">
            {" "}
            Upload your CV
          </a>
          <div className="btn-box">
            <a href="login-popup.html" className="theme-btn btn-style-three call-modal">
              Login / Register
            </a>
            <a href="/jobs/add" className="theme-btn btn-style-one">
              Post a Job
            </a>
          </div>
        </div>
      </div>

      <div className="mobile-header">
        <div className="logo">
          <a href="index.html">
            <img src="images/logo.svg" alt="" title="" />
          </a>
        </div>
        <div className="nav-outer clearfix">
          <div className="outer-box">
            <div className="login-box">
              <a href="login-popup.html" className="call-modal">
                <span className="icon-user"></span>
              </a>
            </div>

            <a href="#nav-mobile" className="mobile-nav-toggler">
              <span className="flaticon-menu-1"></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
