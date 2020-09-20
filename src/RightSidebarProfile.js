import React from "react";
import "./RightSidebarProfile.css";
import Avatar from "./avatar.png";
import { Link } from "react-router-dom";

function RightSidebarProfile() {
  return (
    <div className="right__sidebar__profile">
      <img src={Avatar} alt="" />
      <h2>Nancy Jewel</h2>
      <div className="follow_section">
        <div className="following">
          <h2>648</h2>
          <h4>Followers</h4>
        </div>
        <div className="following">
          <h2>58</h2>
          <h4>Following</h4>
        </div>
      </div>
      <Link to="/profile" style={{ textDecoration: 'none' }}>
        <h3 className="view_profile"> View Profile</h3>
      </Link>
    </div>
  );
}

export default RightSidebarProfile;
