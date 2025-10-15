import React from "react";

export default function NewsItem(props) {
  return (
    <div class="news__main-itm news-item">
      <div class="news__img">
        <img src={`/img/${props.item.img}`} alt={props.item.desc} />
      </div>
      <div class="news__main-content">
        <div class="news-default-top">
          <span class="h4">
            {props.item.title}
          </span>
          <div class="news-default-social">
            <div class="flex">
              <a href="!#">{props.item.sphere}</a>
              <a href="!#">{props.item.date}</a>
              <a href="!#" class="comment">
                {props.item.commentCount} comments
              </a>
            </div>
          </div>
          <p>
            {props.item.text}
          </p>
        </div>
      </div>
    </div>
  );
}
