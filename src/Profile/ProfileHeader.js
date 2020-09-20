import React from "react";
import "./ProfileHeader.css";
import TopHeader from "../TopHeader";
import ProfileInfo from "./ProfileInfo";

function ProfileHeader() {
  return (
    <div className="profile__header">
      <TopHeader />
      <ProfileInfo />
    </div>
  );
}

export default ProfileHeader;
