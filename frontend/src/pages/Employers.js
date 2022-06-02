/* eslint-disable */
import React from "react";
import Layout from "../components/layout/Layout";

const Employers = () => {
  return (
    <Layout>
      <section className="page-title">
        <div className="auto-container">
          <div className="title-outer">
            <h1>Companies</h1>
            <ul className="page-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Companies</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="ls-section">
        <div className="auto-container">
          <div className="filters-backdrop"></div>
          <div className="row">
            <div className="filters-column col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column pd-right">
                <div className="filters-outer">
                  <button type="button" className="theme-btn close-filters">
                    X
                  </button>
                  <div className="filter-block">
                    <h4>Search by Keywords</h4>
                    <div className="form-group">
                      <input
                        type="text"
                        name="listing-search"
                        placeholder="Job title, keywords, or company"
                      />
                      <span className="icon flaticon-search-3"></span>
                    </div>
                  </div>
                  <div className="filter-block">
                    <h4>Location</h4>
                    <div className="form-group">
                      <input type="text" name="listing-search" placeholder="City or postcode" />
                      <span className="icon flaticon-map-locator"></span>
                    </div>
                    <p>Radius around selected destination</p>
                    <div className="range-slider-one">
                      <div className="area-range-slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                        {/* slider here */}
                      </div>
                      <div className="input-outer">
                        <div className="amount-outer">
                          <span className="area-amount">50</span>km
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="filter-block">
                    <h4>Category</h4>
                    <div className="form-group">
                      <select className="chosen-select">
                        <option>Choose a category</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Industrial</option>
                        <option>Apartments</option>
                      </select>
                      <span className="icon flaticon-briefcase"></span>
                    </div>
                  </div>

                  <div className="filter-block">
                    <h4>Company Size</h4>
                    <div className="form-group">
                      <select className="chosen-select">
                        <option>1-100 Members</option>
                        <option>100-200 Members</option>
                        <option>200-500 Members</option>
                        <option>500-1000 Members</option>
                        <option>1000-10000 Members</option>
                      </select>
                      <span className="icon flaticon-briefcase"></span>
                    </div>
                  </div>
                  <div className="filter-block">
                    <h4>Founded Date</h4>
                    <div className="range-slider-one">
                      <div className="range-slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                        {/* slider here */}
                      </div>
                      <div className="input-outer">
                        <div className="amount-outer">
                          <span className="count">1923 - 2023</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-column col-lg-8 col-md-12 col-sm-12">
              <div className="ls-outer">
                <button type="button" className="theme-btn btn-style-two toggle-filters">
                  Show Filters
                </button>
                <div className="ls-switcher">
                  <div className="showing-result">
                    <div className="text">
                      Showing <strong>41-60</strong> of <strong>944</strong> employer
                    </div>
                  </div>
                  <div className="sort-by">
                    <select className="chosen-select">
                      <option>New Jobs</option>
                      <option>Freelance</option>
                      <option>Full Time</option>
                      <option>Internship</option>
                      <option>Part Time</option>
                      <option>Temporary</option>
                    </select>
                    <select className="chosen-select">
                      <option>Show 10</option>
                      <option>Show 20</option>
                      <option>Show 30</option>
                      <option>Show 40</option>
                      <option>Show 50</option>
                      <option>Show 60</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="company-block-four col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                      <span className="featured">Featured</span>
                      <span className="company-logo">
                        <img src="images/resource/company-logo/6-1.png" alt="" />
                      </span>
                      <h4>
                        <a href="#">Netflix</a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-map-locator"></span> London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-briefcase"></span> Accounting / Finance
                        </li>
                      </ul>
                      <div className="job-type">Open Jobs &dash; 2</div>
                    </div>
                  </div>
                  <div className="company-block-four col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                      <span className="featured">Featured</span>
                      <span className="company-logo">
                        <img src="images/resource/company-logo/6-2.png" alt="" />
                      </span>
                      <h4>
                        <a href="#">Opendoor</a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-map-locator"></span> London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-briefcase"></span> Accounting / Finance
                        </li>
                      </ul>
                      <div className="job-type">Open Jobs &dash; 2</div>
                    </div>
                  </div>
                  <div className="company-block-four col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                      <span className="featured">Featured</span>
                      <span className="company-logo">
                        <img src="images/resource/company-logo/6-3.png" alt="" />
                      </span>
                      <h4>
                        <a href="#">Checkr</a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-map-locator"></span> London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-briefcase"></span> Accounting / Finance
                        </li>
                      </ul>
                      <div className="job-type">Open Jobs &dash; 2</div>
                    </div>
                  </div>
                  <div className="company-block-four col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                      <span className="featured">Featured</span>
                      <span className="company-logo">
                        <img src="images/resource/company-logo/6-4.png" alt="" />
                      </span>
                      <h4>
                        <a href="#">Mural</a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-map-locator"></span> London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-briefcase"></span> Accounting / Finance
                        </li>
                      </ul>
                      <div className="job-type">Open Jobs &dash; 2</div>
                    </div>
                  </div>
                  <div className="company-block-four col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                      <span className="featured">Featured</span>
                      <span className="company-logo">
                        <img src="images/resource/company-logo/6-5.png" alt="" />
                      </span>
                      <h4>
                        <a href="#">Astronomer</a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-map-locator"></span> London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-briefcase"></span> Accounting / Finance
                        </li>
                      </ul>
                      <div className="job-type">Open Jobs &dash; 2</div>
                    </div>
                  </div>
                  <div className="company-block-four col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                      <span className="featured">Featured</span>
                      <span className="company-logo">
                        <img src="images/resource/company-logo/6-6.png" alt="" />
                      </span>
                      <h4>
                        <a href="#">Figma</a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-map-locator"></span> London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-briefcase"></span> Accounting / Finance
                        </li>
                      </ul>
                      <div className="job-type">Open Jobs &dash; 2</div>
                    </div>
                  </div>
                  <div className="company-block-four col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                      <span className="featured">Featured</span>
                      <span className="company-logo">
                        <img src="images/resource/company-logo/6-7.png" alt="" />
                      </span>
                      <h4>
                        <a href="#">Mural</a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-map-locator"></span> London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-briefcase"></span> Accounting / Finance
                        </li>
                      </ul>
                      <div className="job-type">Open Jobs &dash; 2</div>
                    </div>
                  </div>
                  <div className="company-block-four col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                      <span className="featured">Featured</span>
                      <span className="company-logo">
                        <img src="images/resource/company-logo/6-8.png" alt="" />
                      </span>
                      <h4>
                        <a href="#">Astronomer</a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-map-locator"></span> London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-briefcase"></span> Accounting / Finance
                        </li>
                      </ul>
                      <div className="job-type">Open Jobs &dash; 2</div>
                    </div>
                  </div>
                  <div className="company-block-four col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                      <span className="featured">Featured</span>
                      <span className="company-logo">
                        <img src="images/resource/company-logo/6-9.png" alt="" />
                      </span>
                      <h4>
                        <a href="#">Figma</a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-map-locator"></span> London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-briefcase"></span> Accounting / Finance
                        </li>
                      </ul>
                      <div className="job-type">Open Jobs &dash; 2</div>
                    </div>
                  </div>
                </div>
                <nav className="ls-pagination">
                  <ul>
                    <li className="prev">
                      <a href="#">
                        <i className="fa fa-arrow-left"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#" className="current-page">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li className="next">
                      <a href="#">
                        <i className="fa fa-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Employers;
