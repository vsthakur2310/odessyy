import React from "react";
import "./ProfileInfo.css";
import Avatar from "./avatar.png";
function ProfileInfo() {
  return (
    <div className="profile__info">
      <div className="insidebox">
        <div className="profile__pic__and__username">
          <img src={Avatar} alt="" className="profile__picture" />
          <h3 className="username">@nancy</h3>
        </div>
        <div className="user__info">
          <h2 className="userfullname">Nancy Jewel </h2>
          <p className="bio">
            . A writer here and there on this and that.
            <br />. I’ve written for the times, Express, Independent, Wall
            street journal, and The gaurdian.{" "}
          </p>
        </div>
        <div className="line__profile"></div>
        <div className="following__details">
          <div className="group">
            <h2 className="number">697</h2>
            <h3 className="text">Followers</h3>
          </div>
          <div className="group">
            <h2 className="number">58</h2>
            <h3 className="text">Following</h3>
          </div>
        </div>
      </div>
      <h5 className="edit">Edit</h5>
    </div>
  );
}

export default ProfileInfo;
