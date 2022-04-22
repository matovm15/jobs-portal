import React from "react";
import { Link, useLocation } from "react-router-dom";
import useLinks from "../../utils/useLinks";

const LoggedInLayout = ({ children }) => {
  const location = useLocation();
  const navLinks = useLinks(location);
  return (
    <div className="page-wrapper dashboard mm-page mm-slideout" id="mm-0">
      <span className="header-span"></span>
      <header className="main-header header-shaddow">
        <div className="container-fluid">
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
                    <a href="add-listing.html" className="theme-btn btn-style-one">
                      Job Post
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
              <button className="menu-btn">
                <span className="count">1</span>
                <span className="icon la la-heart-o"></span>
              </button>

              <button className="menu-btn">
                <span className="icon la la-bell"></span>
              </button>
              <div className="dropdown dashboard-option">
                <a
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="images/resource/company-6.png" alt="avatar" className="thumb" />
                  <span className="name">My Account</span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="candidate-dashboard-profile.html">
                      <i className="la la-user-tie"></i>My Profile
                    </a>
                  </li>
                </ul>
              </div>
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

              <button id="toggle-user-sidebar">
                <img src="images/resource/company-6.png" alt="avatar" className="thumb" />
              </button>
              <a href="#nav-mobile" className="mobile-nav-toggler navbar-trigger">
                <span className="flaticon-menu-1"></span>
              </a>
            </div>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
};

export default LoggedInLayout;
