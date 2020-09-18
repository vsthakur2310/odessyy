import React from "react";
import "./LeftSidebarOptions.css";

function LeftSidebarOptions({ active, text, button_icon }) {
  return (
    <div
    className={`left__Sidebar__option ${active && `leftSidebar__option--active`}`}>
    
      <span>
        {button_icon}
        </span>
      
      <h2>{text}</h2>
    </div>
  );
}

export default LeftSidebarOptions;
