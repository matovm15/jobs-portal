/* eslint-disable */
import React from "react";

const MobileNav = () => {
  return (
    <div
      id="nav-mobile"
      className="mm-menu mm-menu_offcanvas mm-menu_position-bottom mm-menu_fullscreen mm-menu_theme-black"
      aria-hidden="true"
    >
      <div className="mm-panels">
        <div id="navbar" className="mm-panel mm-panel_opened">
          <div className="mm-navbar mm-navbar_sticky">
            <a className="mm-navbar__title">
              <span>Menu</span>
            </a>
          </div>
          <ul className="navigation mm-listview">
            <li className="current dropdown mm-listitem">
              <a className="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-1">
                Home
              </a>
            </li>

            <li className="dropdown has-mega-menu mm-listitem" id="has-mega-menu">
              <a className="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-2">
                Find Jobs
              </a>
            </li>

            <li className="dropdown mm-listitem">
              <a className="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-3">
                Employers<span className="mm-sronly">Open submenu</span>
              </a>
            </li>

            <li className="dropdown mm-listitem">
              <a className="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-6">
                Candidates<span className="mm-sronly">Open submenu</span>
              </a>
            </li>

            <li className="dropdown mm-listitem">
              <a className="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-9">
                Blog<span className="mm-sronly">Open submenu</span>
              </a>
            </li>

            <li className="dropdown mm-listitem">
              <a className="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-10">
                Pages<span className="mm-sronly">Open submenu</span>
              </a>
            </li>

            <li className="mm-add-listing mm-listitem">
              <a href="add-listing.html" className="theme-btn btn-style-one mm-listitem__text">
                Job Post
              </a>
              <span className="mm-listitem__text">
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
        </div>
        <div className="mega-menu mm-panel mm-hidden" id="mm-1" aria-hidden="true">
          <div className="mm-navbar mm-navbar_sticky">
            <a
              className="mm-btn mm-btn_prev mm-navbar__btn"
              href="#navbar"
              aria-haspopup="true"
              aria-owns="navbar"
            >
              <span className="mm-sronly">Close submenu</span>
            </a>
            <a className="mm-navbar__title" href="#navbar" aria-hidden="true">
              <span>Home</span>
            </a>
          </div>
          <div className="mega-menu-bar row pt-0">
            <div className="column col-lg-3 col-md-3 col-sm-12">
              <ul>
                <li className="current">
                  <a href="index.html">Home Page 01</a>
                </li>
                <li>
                  <a href="index-2.html">Home Page 02</a>
                </li>
                <li>
                  <a href="index-3.html">Home Page 03</a>
                </li>
                <li>
                  <a href="index-4.html">Home Page 04</a>
                </li>
                <li>
                  <a href="index-5.html">Home Page 05</a>
                </li>
              </ul>
            </div>

            <div className="column col-lg-3 col-md-3 col-sm-12">
              <ul>
                <li>
                  <a href="index-6.html">Home Page 06</a>
                </li>
                <li>
                  <a href="index-7.html">Home Page 07</a>
                </li>
                <li>
                  <a href="index-8.html">Home Page 08</a>
                </li>
                <li>
                  <a href="index-9.html">Home Page 09</a>
                </li>
                <li>
                  <a href="index-10.html">Home Page 10</a>
                </li>
              </ul>
            </div>

            <div className="column col-lg-3 col-md-3 col-sm-12">
              <ul>
                <li>
                  <a href="index-11.html">Home Page 11</a>
                </li>
                <li>
                  <a href="index-12.html">Home Page 12</a>
                </li>
                <li>
                  <a href="index-13.html">Home Page 13</a>
                </li>
                <li>
                  <a href="index-14.html">Home Page 14</a>
                </li>
                <li>
                  <a href="index-15.html">Home Page 15</a>
                </li>
              </ul>
            </div>

            <div className="column col-lg-3 col-md-3 col-sm-12">
              <ul>
                <li>
                  <a href="index-16.html">Home Page 16</a>
                </li>
                <li>
                  <a href="index-17.html">Home Page 17</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mega-menu mm-panel mm-hidden" id="mm-2" aria-hidden="true">
          <div className="mm-navbar mm-navbar_sticky">
            <a
              className="mm-btn mm-btn_prev mm-navbar__btn"
              href="#navbar"
              aria-haspopup="true"
              aria-owns="navbar"
            >
              <span className="mm-sronly">Close submenu</span>
            </a>
            <a className="mm-navbar__title" href="#navbar" aria-hidden="true">
              <span>Find Jobs</span>
            </a>
          </div>
          <div className="mega-menu-bar row">
            <div className="column col-lg-3 col-md-3 col-sm-12">
              <h3>Jobs Listing</h3>
              <ul>
                <li>
                  <a href="job-list-v1.html">Jobs List – v1</a>
                </li>
                <li>
                  <a href="job-list-v2.html">Jobs List – v2</a>
                </li>
                <li>
                  <a href="job-list-v3.html">Jobs List – v3</a>
                </li>
                <li>
                  <a href="job-list-v4.html">Jobs List – v4</a>
                </li>
                <li>
                  <a href="job-list-v5.html">Jobs List – v5</a>
                </li>
              </ul>
            </div>

            <div className="column col-lg-3 col-md-3 col-sm-12">
              <ul>
                <li>
                  <a href="job-list-v6.html">Jobs List – v6</a>
                </li>
                <li>
                  <a href="job-list-v7.html">Jobs List – v7</a>
                </li>
                <li>
                  <a href="job-list-v8.html">Jobs List – v8</a>
                </li>
                <li>
                  <a href="job-list-v9.html">Jobs List – v9</a>
                </li>
                <li>
                  <a href="job-list-v10.html">Jobs List – v10</a>
                </li>
              </ul>
            </div>

            <div className="column col-lg-3 col-md-3 col-sm-12">
              <ul>
                <li>
                  <a href="job-list-v11.html">Jobs List – v11</a>
                </li>
                <li>
                  <a href="job-list-v12.html">Jobs List – v12</a>
                </li>
                <li>
                  <a href="job-list-v13.html">Jobs List – v13</a>
                </li>
                <li>
                  <a href="job-list-v14.html">Jobs List – v14</a>
                </li>
              </ul>
            </div>

            <div className="column col-lg-3 col-md-3 col-sm-12">
              <h3>Jobs Single</h3>
              <ul>
                <li>
                  <a href="job-single.html">Job Single v1</a>
                </li>
                <li>
                  <a href="job-single-2.html">Job Single v2</a>
                </li>
                <li>
                  <a href="job-single-3.html">Job Single v3</a>
                </li>
                <li>
                  <a href="job-single-4.html">Job Single v4</a>
                </li>
                <li>
                  <a href="job-single-5.html">Job Single v5</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="mm-3" className="mm-panel mm-hidden" aria-hidden="true">
          <div className="mm-navbar mm-navbar_sticky">
            <a
              className="mm-btn mm-btn_prev mm-navbar__btn"
              href="#navbar"
              aria-haspopup="true"
              aria-owns="navbar"
            >
              <span className="mm-sronly">Close submenu</span>
            </a>
            <a className="mm-navbar__title" href="#navbar" aria-hidden="true">
              <span>Employers</span>
            </a>
          </div>
          <ul className="mm-listview">
            <li className="dropdown mm-listitem">
              <a className="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-4">
                Employers List<span className="mm-sronly">Open submenu</span>
              </a>
            </li>

            <li className="dropdown mm-listitem">
              <a className="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-5">
                Employers Single<span className="mm-sronly">Open submenu</span>
              </a>
            </li>
            <li className="mm-listitem">
              <a href="dashboard.html" className="mm-listitem__text">
                Employers Dashboard
              </a>
            </li>
          </ul>
        </div>
        <div id="mm-4" className="mm-panel mm-hidden" aria-hidden="true">
          <div className="mm-navbar mm-navbar_sticky">
            <a
              className="mm-btn mm-btn_prev mm-navbar__btn"
              href="#mm-3"
              aria-haspopup="true"
              aria-owns="mm-3"
            >
              <span className="mm-sronly">Close submenu</span>
            </a>
            <a className="mm-navbar__title" href="#mm-3" aria-hidden="true">
              <span>Employers List</span>
            </a>
          </div>
          <ul className="mm-listview">
            <li className="mm-listitem">
              <a href="employers-list-v1.html" className="mm-listitem__text">
                Employers LIst v1
              </a>
            </li>
            <li className="mm-listitem">
              <a href="employers-list-v2.html" className="mm-listitem__text">
                Employers LIst v2
              </a>
            </li>
            <li className="mm-listitem">
              <a href="employers-list-v3.html" className="mm-listitem__text">
                Employers LIst v3
              </a>
            </li>
            <li className="mm-listitem">
              <a href="employers-list-v4.html" className="mm-listitem__text">
                Employers LIst v4
              </a>
            </li>
          </ul>
        </div>
        <div id="mm-5" className="mm-panel mm-hidden" aria-hidden="true">
          <div className="mm-navbar mm-navbar_sticky">
            <a
              className="mm-btn mm-btn_prev mm-navbar__btn"
              href="#mm-3"
              aria-haspopup="true"
              aria-owns="mm-3"
            >
              <span className="mm-sronly">Close submenu</span>
            </a>
            <a className="mm-navbar__title" href="#mm-3" aria-hidden="true">
              <span>Employers Single</span>
            </a>
          </div>
          <ul className="mm-listview">
            <li className="mm-listitem">
              <a href="employers-single-v1.html" className="mm-listitem__text">
                Employers Single v1
              </a>
            </li>
            <li className="mm-listitem">
              <a href="employers-single-v2.html" className="mm-listitem__text">
                Employers Single v2
              </a>
            </li>
            <li className="mm-listitem">
              <a href="employers-single-v3.html" className="mm-listitem__text">
                Employers Single v3
              </a>
            </li>
          </ul>
        </div>
        <div id="mm-6" className="mm-panel mm-hidden" aria-hidden="true">
          <div className="mm-navbar mm-navbar_sticky">
            <a
              className="mm-btn mm-btn_prev mm-navbar__btn"
              href="#navbar"
              aria-haspopup="true"
              aria-owns="navbar"
            >
              <span className="mm-sronly">Close submenu</span>
            </a>
            <a className="mm-navbar__title" href="#navbar" aria-hidden="true">
              <span>Candidates</span>
            </a>
          </div>
          <ul className="mm-listview">
            <li className="dropdown mm-listitem">
              <a className="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-7">
                Candidates List<span className="mm-sronly">Open submenu</span>
              </a>
            </li>

            <li className="dropdown mm-listitem">
              <a className="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-8">
                Candidates Single<span className="mm-sronly">Open submenu</span>
              </a>
            </li>
            <li className="mm-listitem">
              <a href="candidate-dashboard.html" className="mm-listitem__text">
                Candidates Dashboard
              </a>
            </li>
          </ul>
        </div>
        <div id="mm-7" className="mm-panel mm-hidden" aria-hidden="true">
          <div className="mm-navbar mm-navbar_sticky">
            <a
              className="mm-btn mm-btn_prev mm-navbar__btn"
              href="#mm-6"
              aria-haspopup="true"
              aria-owns="mm-6"
            >
              <span className="mm-sronly">Close submenu</span>
            </a>
            <a className="mm-navbar__title" href="#mm-6" aria-hidden="true">
              <span>Candidates List</span>
            </a>
          </div>
          <ul className="mm-listview">
            <li className="mm-listitem">
              <a href="candidates-list-v1.html" className="mm-listitem__text">
                Candidates LIst v1
              </a>
            </li>
            <li className="mm-listitem">
              <a href="candidates-list-v2.html" className="mm-listitem__text">
                Candidates LIst v2
              </a>
            </li>
            <li className="mm-listitem">
              <a href="candidates-list-v3.html" className="mm-listitem__text">
                Candidates LIst v3
              </a>
            </li>
            <li className="mm-listitem">
              <a href="candidates-list-v4.html" className="mm-listitem__text">
                Candidates LIst v4
              </a>
            </li>
            <li className="mm-listitem">
              <a href="candidates-list-v5.html" className="mm-listitem__text">
                Candidates LIst v5
              </a>
            </li>
          </ul>
        </div>
        <div id="mm-8" className="mm-panel mm-hidden" aria-hidden="true">
          <div className="mm-navbar mm-navbar_sticky">
            <a
              className="mm-btn mm-btn_prev mm-navbar__btn"
              href="#mm-6"
              aria-haspopup="true"
              aria-owns="mm-6"
            >
              <span className="mm-sronly">Close submenu</span>
            </a>
            <a className="mm-navbar__title" href="#mm-6" aria-hidden="true">
              <span>Candidates Single</span>
            </a>
          </div>
          <ul className="mm-listview">
            <li className="mm-listitem">
              <a href="candidates-single-v1.html" className="mm-listitem__text">
                Candidates Single v1
              </a>
            </li>
            <li className="mm-listitem">
              <a href="candidates-single-v2.html" className="mm-listitem__text">
                Candidates Single v2
              </a>
            </li>
            <li className="mm-listitem">
              <a href="candidates-single-v3.html" className="mm-listitem__text">
                Candidates Single v3
              </a>
            </li>
          </ul>
        </div>
        <div id="mm-9" className="mm-panel mm-hidden" aria-hidden="true">
          <div className="mm-navbar mm-navbar_sticky">
            <a
              className="mm-btn mm-btn_prev mm-navbar__btn"
              href="#navbar"
              aria-haspopup="true"
              aria-owns="navbar"
            >
              <span className="mm-sronly">Close submenu</span>
            </a>
            <a className="mm-navbar__title" href="#navbar" aria-hidden="true">
              <span>Blog</span>
            </a>
          </div>
          <ul className="mm-listview">
            <li className="mm-listitem">
              <a href="blog-list-v1.html" className="mm-listitem__text">
                Blog LIst v1
              </a>
            </li>
            <li className="mm-listitem">
              <a href="blog-list-v2.html" className="mm-listitem__text">
                Blog LIst v2
              </a>
            </li>
            <li className="mm-listitem">
              <a href="blog-list-v3.html" className="mm-listitem__text">
                Blog LIst v3
              </a>
            </li>
            <li className="mm-listitem">
              <a href="blog-single.html" className="mm-listitem__text">
                Blog Single
              </a>
            </li>
          </ul>
        </div>
        <div id="mm-10" className="mm-panel mm-hidden" aria-hidden="true">
          <div className="mm-navbar mm-navbar_sticky">
            <a
              className="mm-btn mm-btn_prev mm-navbar__btn"
              href="#navbar"
              aria-haspopup="true"
              aria-owns="navbar"
            >
              <span className="mm-sronly">Close submenu</span>
            </a>
            <a className="mm-navbar__title" href="#navbar" aria-hidden="true">
              <span>Pages</span>
            </a>
          </div>
          <ul className="mm-listview">
            <li className="dropdown mm-listitem">
              <a className="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-11">
                Shop<span className="mm-sronly">Open submenu</span>
              </a>
            </li>
            <li className="mm-listitem">
              <a href="about.html" className="mm-listitem__text">
                About
              </a>
            </li>
            <li className="mm-listitem">
              <a href="pricing.html" className="mm-listitem__text">
                Pricing
              </a>
            </li>
            <li className="mm-listitem">
              <a href="faqs.html" className="mm-listitem__text">
                FAQ's
              </a>
            </li>
            <li className="mm-listitem">
              <a href="terms.html" className="mm-listitem__text">
                Terms
              </a>
            </li>
            <li className="mm-listitem">
              <a href="invoice.html" className="mm-listitem__text">
                Invoice
              </a>
            </li>
            <li className="mm-listitem">
              <a href="elements.html" className="mm-listitem__text">
                Ui Elements
              </a>
            </li>
            <li className="mm-listitem">
              <a href="contact.html" className="mm-listitem__text">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div id="mm-11" className="mm-panel mm-hidden" aria-hidden="true">
          <div className="mm-navbar mm-navbar_sticky">
            <a
              className="mm-btn mm-btn_prev mm-navbar__btn"
              href="#mm-10"
              aria-haspopup="true"
              aria-owns="mm-10"
            >
              <span className="mm-sronly">Close submenu</span>
            </a>
            <a className="mm-navbar__title" href="#mm-10" aria-hidden="true">
              <span>Shop</span>
            </a>
          </div>
          <ul className="mm-listview">
            <li className="mm-listitem">
              <a href="shop.html" className="mm-listitem__text">
                Shop List
              </a>
            </li>
            <li className="mm-listitem">
              <a href="shop-single.html" className="mm-listitem__text">
                Shop Single
              </a>
            </li>
            <li className="mm-listitem">
              <a href="shopping-cart.html" className="mm-listitem__text">
                Shopping Cart
              </a>
            </li>
            <li className="mm-listitem">
              <a href="shop-checkout.html" className="mm-listitem__text">
                Checkout
              </a>
            </li>
            <li className="mm-listitem">
              <a href="order-completed.html" className="mm-listitem__text">
                Order Completed
              </a>
            </li>
            <li className="mm-listitem">
              <a href="login.html" className="mm-listitem__text">
                Login
              </a>
            </li>
            <li className="mm-listitem">
              <a href="register.html" className="mm-listitem__text">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
