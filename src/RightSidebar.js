import React, { useState } from "react";
import "./RightSidebar.css";
import RightSidebarProfile from "./RightSidebarProfile";
import pen_button from "./pen.png";
import poetry_button from "./poetry.png";
import blog_button from "./blog.png";
import quotes_button from "./quotes.png";

function RightSidebar() {
  const [showButtons, setshowButtons] = useState(false);

  return (
    <div className="right__Sidebar">
      <RightSidebarProfile />

      {/* <div className="small__buttons"> */}

      {showButtons && (
        <div className="right__Sidebar__buttons">
          <div className="tooltip_small">
            <img className="small__icons  poetry" src={poetry_button} alt="" />
            <span class="tooltiptext_small">Write a Poetry</span>
          </div>

          <div className="tooltip_small">
            <img className="small__icons  blog" src={blog_button} alt="" />
            <span class="tooltiptext_small">Write a Blog</span>
          </div>

          <div className="tooltip_small">
            <img className="small__icons  quotes" src={quotes_button} alt="" />
            <span class="tooltiptext_small">Write a quote</span>
          </div>
        </div>
      )}

      {/* </div> */}

      <div className="tooltip">
        <img
          onClick={() => setshowButtons(!showButtons)}
          className="main__icon"
          src={pen_button}
          alt=""
        />
        <span class="tooltiptext">Write</span>
      </div>

      {/* <img className="main__icon" src={pen_button} alt="" onClick={() => setshowButtons(true)} /> */}
      {/* {showButtons ? {smallButtons} : null} */}
    </div>
  );
}

export default RightSidebar;
