/* eslint-disable */
import React from "react";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <section className="page-title">
        <div className="auto-container">
          <div className="title-outer">
            <h1>About Us</h1>
            <ul className="page-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="about-section-three">
        <div className="auto-container">
          <div className="images-box">
            <div className="row">
              <div className="column col-lg-3 col-md-6 col-sm-6">
                <figure className="image">
                  <img src="images/resource/about-img-1.jpg" alt="" />
                </figure>
              </div>
              <div className="column col-lg-3 col-md-6 col-sm-6">
                <figure className="image">
                  <img src="images/resource/about-img-2.jpg" alt="" />
                </figure>
                <figure className="image">
                  <img src="images/resource/about-img-3.jpg" alt="" />
                </figure>
              </div>
              <div className="column col-lg-3 col-md-6 col-sm-6">
                <figure className="image">
                  <img src="images/resource/about-img-4.jpg" alt="" />
                </figure>
                <figure className="image">
                  <img src="images/resource/about-img-5.jpg" alt="" />
                </figure>
              </div>
              <div className="column col-lg-3 col-md-6 col-sm-6">
                <figure className="image">
                  <img src="images/resource/about-img-6.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="fun-fact-section">
            <div className="row">
              <div
                className="counter-column col-lg-4 col-md-4 col-sm-12 wow fadeInUp animated"
                style={{visibility: "visible", animationName: "fadeInUp"}}
              >
                <div className="count-box counted">
                  <span className="count-text" data-speed="3000" data-stop="4">
                    4
                  </span>
                  M
                </div>
                <h4 className="counter-title">4 million daily active users</h4>
              </div>
              <div
                className="counter-column col-lg-4 col-md-4 col-sm-12 wow fadeInUp animated"
                data-wow-delay="400ms"
                style={{visibility: "visible", animationDelay: "400", animationName: "fadeInUp" }}
              >
                <div className="count-box counted">
                  <span className="count-text" data-speed="3000" data-stop="12">
                    12
                  </span>
                  k
                </div>
                <h4 className="counter-title">Over 12k open job positions</h4>
              </div>
              <div
                className="counter-column col-lg-4 col-md-4 col-sm-12 wow fadeInUp animated"
                data-wow-delay="800ms"
                style={{visibility: "visible", animationDelay: "800", animationName: "fadeInUp"}}
              >
                <div className="count-box counted">
                  <span className="count-text" data-speed="3000" data-stop="20">
                    20
                  </span>
                  M
                </div>
                <h4 className="counter-title">Over 20 million stories shared</h4>
              </div>
            </div>
          </div>

          <div className="text-box">
            <h4>About Superio</h4>
            <p>
              Far much that one rank beheld bluebird after outside ignobly allegedly more when oh
              arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud
              meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot
              and much as goodness some froze the sullen much connected bat wonderfully on
              instantaneously eel valiantly petted this along across highhandedly much.
            </p>
            <p>
              Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers
              loosely yikes that as or eel underneath kept and slept compactly far purred sure
              abidingly up above fitting to strident wiped set waywardly far the and pangolin horse
              approving paid chuckled cassowary oh above a much opposite far much hypnotically more
              therefore wasp less that hey apart well like while superbly orca and far hence one.Far
              much that one rank beheld bluebird after outside ignobly allegedly more when oh
              arrogantly vehement irresistibly fussy.
            </p>
          </div>
        </div>
      </section>
      <section className="call-to-action-two" style={{backgroundImage: "url(images/background/1.jpg)"}}>
      <div className="auto-container">
        <div className="sec-title light text-center">
          <h2>Your Dream Jobs Are Waiting</h2>
          <div className="text">Over 1 million interactions, 50,000 success stories Make yours now.</div>
        </div>

        <div className="btn-box">
          <a href="#" className="theme-btn btn-style-three">Search Job</a>
          <a href="#" className="theme-btn btn-style-two">Apply Job Now</a>
        </div>
      </div>
    </section>
    <section className="work-section style-two">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2>How It Works?</h2>
          <div className="text">Job for anyone, anywhere</div>
        </div>
        <div className="row">
          <div className="work-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <figure className="image">
                  <img src="images/resource/work-1.png" alt="" /></figure>
              <h5>Free Resume Assessments</h5>
              <p>Employers on average spend 31 seconds scanning resumes to identify potential matches.</p>
            </div>
          </div>
          <div className="work-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <figure className="image">
                  <img src="images/resource/work-2.png" alt="" /></figure>
              <h5>Job Fit Scoring</h5>
              <p>Employers on average spend 31 seconds scanning resumes to identify potential matches.</p>
            </div>
          </div>

          <div className="work-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <figure className="image">
                  <img src="images/resource/work-3.png" alt="" /></figure>
              <h5>Help Every Step of the Way</h5>
              <p>Employers on average spend 31 seconds scanning resumes to identify potential matches.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
    </Layout>
  );
};

export default About;
