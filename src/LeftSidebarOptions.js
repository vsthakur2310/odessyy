import React from "react";
import "./LeftSidebarOptions.css";

function LeftSidebarOptions({ active, text, Icon }) {
  return (
    <div
     className={`left__Sidebar__option ${active && `leftSidebar__option--active`}`}>
    
      {/* <Icon /> */}
      <h2>{text}</h2>
    </div>
  );
}

export default LeftSidebarOptions;
