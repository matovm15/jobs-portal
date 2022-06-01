/* eslint-disable */
import React from "react";

const Card = () => {
  return (
    <div className="job-block">
      <div className="inner-box">
        <div className="content">
          <span className="company-logo">
            <img src="images/resource/company-logo/1-1.png" alt="" />
          </span>
          <h4>
            <a href="#">Software Engineer (Android), Libraries</a>
          </h4>
          <ul className="job-info">
            <li>
              <span className="icon flaticon-briefcase"></span> Segment
            </li>
            <li>
              <span className="icon flaticon-map-locator"></span> London, UK
            </li>
            <li>
              <span className="icon flaticon-clock-3"></span> 11 hours ago
            </li>
            <li>
              <span className="icon flaticon-money"></span> $35k - $45k
            </li>
          </ul>
          <ul className="job-other-info">
            <li className="time">Full Time</li>
            <li className="privacy">Private</li>
            <li className="required">Urgent</li>
          </ul>
          <button className="bookmark-btn">
            <span className="flaticon-bookmark"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
