import React from "react";
import "./TopHeader.css";
import { Icon, InlineIcon } from "@iconify/react";
import bxSearchAlt2 from "@iconify/icons-bx/bx-search-alt-2";
import bookmarkFill from "@iconify/icons-bi/bookmark-fill";
import baselineNotifications from "@iconify/icons-ic/baseline-notifications";

function Search() {
  return (
    <div className="top__header">
      <span></span>
      <div className="search">
        <Icon icon={bxSearchAlt2} />
        <input placeholder="Search"></input>
      </div>

      <Icon className="icon" icon={bookmarkFill} />
      <div className="line"></div>
      <Icon className="icon" icon={baselineNotifications} />
    </div>
  );
}

export default Search;
