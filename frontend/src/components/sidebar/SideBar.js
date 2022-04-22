import React from "react";
import { Link, useLocation } from "react-router-dom";
import useSideLinks from "../../utils/useSideLinks";

const SideBar = () => {
  const { pathname } = useLocation()
  const sideLinks = useSideLinks(pathname)
  return (
    <div className="user-sidebar">
      <div className="sidebar-inner">
        <ul className="navigation">
          {sideLinks.map(nav => (
            <li className={nav.active} key={nav.id}>
              <a href={nav.path}>
                <i className={nav.icon}></i>
                {nav.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="skills-percentage">
          <h4>Skills Percentage</h4>
          <p>Put value for "Cover Image" field to increase your skill up to "85%"</p>
          <div className="pie-graph">
            <div className="graph-outer">
              <div style={{ display: "inline", width: "234px", height: "234px" }}>
                <canvas width="234" height="234"></canvas>
                <input
                  type="text"
                  className="dial"
                  data-fgcolor="#7367F0"
                  data-bgcolor="transparent"
                  data-width="234"
                  data-height="234"
                  data-linecap="normal"
                  value="30"
                  readOnly
                  style={{ display: "none", width: "0px", visibility: "hidden" }}
                />
              </div>
              <div className="inner-text count-box counted">
                <span className="count-text txt" data-stop="30" data-speed="2000">
                  30
                </span>
                %
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
