import React from "react";
import NavBar from "../nav/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="page-wrapper mm-page mm-slideout" id="mm-0">
        <NavBar />
        {children}
      </div>
    </>
  );
};

export default Layout;
