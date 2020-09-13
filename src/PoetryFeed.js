import React from "react";
import "./PoetryFeed.css";
import PoetryFeedHeader from "./PoetryFeedHeader";
import PoetryPost from "./PoetryPost";

function PoetryFeed() {
  return (
    <div className="poetry__feed">
      <PoetryFeedHeader />
      <PoetryPost />
      <PoetryPost />
      <PoetryPost />
      <PoetryPost />
      <PoetryPost />
      <PoetryPost />
      <PoetryPost />
      <PoetryPost />
      <PoetryPost />
    </div>
  );
}

export default PoetryFeed;
