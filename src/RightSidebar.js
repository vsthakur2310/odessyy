import React from "react";
import "./RightSidebar.css";
import RightSidebarProfile from "./RightSidebarProfile";
import pen_button from "./pen.png"

function RightSidebar() {
  return (
    <div className="right__Sidebar">
      <RightSidebarProfile />
      <img src={pen_button} alt=""/>
    </div>
  );
}

export default RightSidebar;
