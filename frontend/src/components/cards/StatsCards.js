/* eslint-disable */
import React from "react";

const StatsCards = ({ icon, title, count}) => {
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
      <div className="ui-item">
        <div className="left">
          <i className={`icon ${icon}`}></i>
        </div>
        <div className="right">
          <h4>{count}</h4>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
