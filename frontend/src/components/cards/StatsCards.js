import React from "react";

const StatsCards = ({ icon, title, count}) => {
  return (
    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
      <div class="ui-item">
        <div class="left">
          <i class={`icon ${icon}`}></i>
        </div>
        <div class="right">
          <h4>{count}</h4>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
