import React from "react";
import "./PoetryPost.css";
import avatar2 from "./avatar2.png";
import { Icon, InlineIcon } from "@iconify/react";
import bookmarkIcon from "@iconify/icons-bi/bookmark";
import heartOutlined from "@iconify/icons-ant-design/heart-outlined";
import twitterRetweet from "@iconify/icons-mdi/twitter-retweet";
import paperPlane from "@iconify/icons-fa-solid/paper-plane";
import outlineInsertComment from "@iconify/icons-ic/outline-insert-comment";

function PoetryPost() {
  return (
    <div className="poetry__post">
      <div className="poetry__post__upper">
        <div className="user">
          <img src={avatar2} alt="" className="avatar" />
          <div className="user__details">
            <h4>Christopher Campbell</h4>
            <h5>@christopher</h5>
          </div>
        </div>

        <Icon
          className="icons"
          icon={bookmarkIcon}
          style={{ color: "#999999", fontSize: "23px" }}
        />
      </div>

      <div className="line__upper"></div>

      <div className="poetry__post__content">
        <h2>The Ballad of Reading Gaol</h2>
        <p>
          He did not wear his scarlet coat,
          <br />
          For blood and wine are red, <br />
          And blood and wine were on his hands
          <br />
          When they found him with the dead,
          <br />
          The poor dead woman whom he loved,
          <br />
          And murdered in her bed.
        </p>
      </div>

      <h4 className="read_more">Read More</h4>

      <div className="poetry__post__footer">
        <div className="poetry__post__footer__left">
          <div className="icons__numbers">
            <Icon
              className="icons"
              icon={heartOutlined}
              style={{ color: "#999999", fontSize: "23px" }}
            />
            <h4 className="numbers">184</h4>
          </div>

          <div className="icons__numbers">
            <Icon
              className="icons"
              icon={twitterRetweet}
              style={{ color: "#999999", fontSize: "27px" }}
            />
            <h4 className="numbers">46</h4>
          </div>
        </div>

        <div className="poetry__post__footer__right">
          <Icon
            className="icons"
            icon={paperPlane}
            style={{ color: "#999999", fontSize: "16px" }}
          />

          <div className="line__vertical"></div>
          <div className="icons__numbers">
            <Icon
              className="icons"
              icon={outlineInsertComment}
              style={{ color: "#999999", fontSize: "19px" }}
            />
            <h4 className="numbers">46</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoetryPost;
