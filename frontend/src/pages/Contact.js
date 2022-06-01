/* eslint-disable */
import React from "react";
import Layout from "../components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="map-section">
        <div className="map-outer">
          <div
            className="map-canvas"
            data-zoom="12"
            data-lat="-37.817085"
            data-lng="144.955631"
            data-type="roadmap"
            data-hue="#ffc400"
            data-title="Envato"
            data-icon-path="images/icons/contact-map-marker.png"
            data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>"
          ></div>
        </div>
      </section>
      <section className="contact-section">
        <div className="auto-container">
          <div className="upper-box">
            <div className="row">
              <div className="contact-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <span className="icon">
                    <img src="images/icons/placeholder.svg" alt="" />
                  </span>
                  <h4>Address</h4>
                  <p>
                    329 Queensberry Street, North
                    <br /> Melbourne VIC 3051, Australia.
                  </p>
                </div>
              </div>
              <div className="contact-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <span className="icon">
                    <img src="images/icons/smartphone.svg" alt="" />
                  </span>
                  <h4>Call Us</h4>
                  <p>
                    <a href="#" className="phone">
                      123 456 7890
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <span className="icon">
                    <img src="images/icons/letter.svg" alt="" />
                  </span>
                  <h4>Email</h4>
                  <p>
                    <a href="#">contact.london@example.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form default-form">
            <h3>Leave A Message</h3>
            <form method="post" action="#" id="email-form">
              <div className="row">
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                  <div className="response"></div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="username"
                    className="username"
                    placeholder="Your Name*"
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                  <label>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    className="email"
                    placeholder="Your Email*"
                    required
                  />
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="subject"
                    placeholder="Subject *"
                    required
                  />
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Write your message..."
                    required=""
                  ></textarea>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <button
                    className="theme-btn btn-style-one"
                    type="button"
                    id="submit"
                    name="submit-form"
                  >
                    Send Massage
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="call-to-action style-two">
        <div className="auto-container">
          <div className="outer-box">
            <div className="content-column">
              <div className="sec-title">
                <h2>Recruiting?</h2>
                <div className="text">
                  Advertise your jobs to millions of monthly users and search 15.8 million
                  <br /> CVs in our database.
                </div>
                <a href="#" className="theme-btn btn-style-one bg-blue">
                  <span className="btn-title">Start Recruiting Now</span>
                </a>
              </div>
            </div>

            <div className="image-column" style={{backgroundImage: "url(images/resource/image-1.png)"}}>
              <figure className="image">
                <img src="images/resource/image-1.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
