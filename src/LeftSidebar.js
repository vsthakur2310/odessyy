import React from "react";
import "./LeftSidebar.css";
import LeftSidebarOptions from "./LeftSidebarOptions";
import Logo from "./logo.png";
import { Icon, InlineIcon } from "@iconify/react";
import penTool from "@iconify/icons-zondicons/pen-tool";
import bookIcon from "@iconify/icons-icomoon-free/book";
import textPage from "@iconify/icons-dashicons/text-page";
import quillPenFill from "@iconify/icons-ri/quill-pen-fill";
import { Link } from "react-router-dom";

function LeftSidebar() {
  return (
    <div className="left__Sidebar">
      <img className="logo" src={Logo} alt="" />

      <h3 className="top__text">Discover</h3>

      <LeftSidebarOptions button_icon={<Icon icon={bookIcon} />} text="Books" />
      <Link to="/" style={{ textDecoration: 'none' }}>
        <LeftSidebarOptions
          active
          button_icon={<Icon icon={penTool} />}
          text="Poetry"
        />
      </Link>
      <LeftSidebarOptions button_icon={<Icon icon={textPage} />} text="Blogs" />
      <LeftSidebarOptions
        button_icon={<Icon icon={quillPenFill} />}
        text="Quotes"
      />

      <h5>Log Out</h5>

      <div className="footer">
        <h4>About</h4>
        <h4>Contact us</h4>
        <h4>Privacy</h4>
        <h4>Terms of Service</h4>
      </div>
    </div>
  );
}

export default LeftSidebar;
