/* eslint-disable */
import React from "react";
import Card from "../components/job/Card";
import Layout from "../components/layout/Layout";

const Jobs = () => {
  return (
    <Layout>
      <section className="page-title style-two">
        <div className="auto-container">
          <div className="job-search-form">
            <form method="post" action="job-list-v10.html">
              <div className="row">
                <div className="form-group col-lg-4 col-md-12 col-sm-12">
                  <span className="icon flaticon-search-1"></span>
                  <input
                    type="text"
                    name="field_name"
                    placeholder="Job title, keywords, or company"
                  />
                </div>
                <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
                  <span className="icon flaticon-map-locator"></span>
                  <input type="text" name="field_name" placeholder="City or postcode" />
                </div>
                <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
                  <span className="icon flaticon-briefcase"></span>
                  <select className="chosen-select">
                    <option value="">All Categories</option>
                    <option value="44">Accounting / Finance</option>
                    <option value="106">Automotive Jobs</option>
                    <option value="46">Customer</option>
                    <option value="48">Design</option>
                    <option value="47">Development</option>
                    <option value="45">Health and Care</option>
                    <option value="105">Marketing</option>
                    <option value="107">Project Management</option>
                  </select>
                </div>
                <div className="form-group col-lg-2 col-md-12 col-sm-12 text-right">
                  <button type="submit" className="theme-btn btn-style-one">
                    Find Jobs
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="ls-section">
        <div className="auto-container">
          <div className="filters-backdrop"></div>

          <div className="row">
            <div className="filters-column col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="filters-outer">
                  <button type="button" className="theme-btn close-filters">
                    X
                  </button>
                  <div className="switchbox-outer">
                    <h4>Job type</h4>
                    <ul className="switchbox">
                      <li>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                          <span className="title">Freelance</span>
                        </label>
                      </li>
                      <li>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                          <span className="title">Full Time</span>
                        </label>
                      </li>
                      <li>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                          <span className="title">Internship</span>
                        </label>
                      </li>
                      <li>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                          <span className="title">Part Time</span>
                        </label>
                      </li>
                      <li>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                          <span className="title">Temporary</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="checkbox-outer">
                    <h4>Date Posted</h4>
                    <ul className="checkboxes">
                      <li>
                        <input id="check-f" type="checkbox" name="check" />
                        <label for="check-f">All</label>
                      </li>
                      <li>
                        <input id="check-a" type="checkbox" name="check" />
                        <label for="check-a">Last Hour</label>
                      </li>
                      <li>
                        <input id="check-b" type="checkbox" name="check" />
                        <label for="check-b">Last 24 Hours</label>
                      </li>
                      <li>
                        <input id="check-c" type="checkbox" name="check" />
                        <label for="check-c">Last 7 Days</label>
                      </li>
                      <li>
                        <input id="check-d" type="checkbox" name="check" />
                        <label for="check-d">Last 14 Days</label>
                      </li>
                      <li>
                        <input id="check-e" type="checkbox" name="check" />
                        <label for="check-e">Last 30 Days</label>
                      </li>
                    </ul>
                  </div>
                  <div className="checkbox-outer">
                    <h4>Experience Level</h4>
                    <ul className="checkboxes square">
                      <li>
                        <input id="check-ba" type="checkbox" name="check" />
                        <label for="check-ba">All</label>
                      </li>
                      <li>
                        <input id="check-bb" type="checkbox" name="check" />
                        <label for="check-bb">Internship</label>
                      </li>
                      <li>
                        <input id="check-bc" type="checkbox" name="check" />
                        <label for="check-bc">Entry level</label>
                      </li>
                      <li>
                        <input id="check-bd" type="checkbox" name="check" />
                        <label for="check-bd">Associate</label>
                      </li>
                      <li>
                        <input id="check-be" type="checkbox" name="check" />
                        <label for="check-be">Mid-Senior level4</label>
                      </li>
                      <li>
                        <button className="view-more">
                          <span className="icon flaticon-plus"></span> View More
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="filter-block">
                    <h4>Salary</h4>
                  </div>
                  <div className="filter-block">
                    <h4>Tags</h4>
                    <ul className="tags-style-one">
                      <li>
                        <a href="#">app</a>
                      </li>
                      <li>
                        <a href="#">administrative</a>
                      </li>
                      <li>
                        <a href="#">android</a>
                      </li>
                      <li>
                        <a href="#">wordpress</a>
                      </li>
                      <li>
                        <a href="#">design</a>
                      </li>
                      <li>
                        <a href="#">react</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="call-to-action-four">
                  <h5>Recruiting?</h5>
                  <p>
                    Advertise your jobs to millions of monthly users and search 15.8 million CVs in
                    our database.
                  </p>
                  <a href="#" className="theme-btn btn-style-one bg-blue">
                    <span className="btn-title">Start Recruiting Now</span>
                  </a>
                  <div
                    className="image"
                    style={{backgroundImage: "url(images/resource/ads-bg-4.png)"}}
                  ></div>
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
                      Showing <strong>41-60</strong> of <strong>944</strong> jobs
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <Card key={index} />
                ))}
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

export default Jobs;
