import React from "react";
import { useLocation } from "react-router-dom";
import useCSideLinks from "../../utils/useCSideLinks";

const CSidebar = () => {
  const { pathname } = useLocation();
  const sideLinks = useCSideLinks(pathname);
  return (
    <div className="user-sidebar">
      <div className="sidebar-inner">
        <ul className="navigation">
          {sideLinks.map((link) => (
            <li key={link.id} className={link.active}>
              <a href={link.path}>
                <i className={link.icon}></i>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CSidebar;
