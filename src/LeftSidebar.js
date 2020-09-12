import React from "react";
import "./LeftSidebar.css";
import LeftSidebarOptions from "./LeftSidebarOptions";
import Logo from "./logo.png";

function LeftSidebar() {
  return (
    <div className="left__Sidebar">
      <img className="logo" src={Logo} alt="" />

      <h3 className="top__text">Discover</h3>
      <LeftSidebarOptions text="Books" />
      <LeftSidebarOptions text="Blogs" />
      <LeftSidebarOptions active text="Poetry" />
      <LeftSidebarOptions text="Quotes" />
    </div>
  );
}

export default LeftSidebar;
