import React from "react";
import { useNavigate } from "react-router-dom";

export default function News() {
  const navigate = useNavigate();
  return (
    <section className="news">
      <div className="news-top default-top">
        <div className="container flex">
          <span className="h2">Recent news</span>
        </div>
      </div>

      <div className="news__items">
        <div className="container grid">
          <div className="news__main-itm">
            <div className="news__img">
              <img src="/img/main-news-itm.jpg" alt="Main news img" />
            </div>
            <div className="news__main-content">
              <div className="news-default-top">
                <span className="h4">
                  How to Build Climate Change-Resilient Infrastructure
                </span>
                <div className="news-default-social">
                  <div className="flex">
                    <a href="!#">Industry News</a>
                    <a href="!#">June 24, 2020</a>
                    <a href="!#" className="comment">
                      4 comments
                    </a>
                  </div>
                </div>
                <p>
                  Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas
                  faucibus. Tincidunt aliquet sit
                  <br /> vel, venenatis nulla. Integer bibendum turpis convallis
                  enim, nibh convallis...
                </p>
              </div>
            </div>
          </div>

          <div className="news__small-itm news__small-itm--1">
            <div className="news__img">
              <img
                src="/img/small-news-itm-1.jpg"
                alt="First small news img"
              />
            </div>
            <div className="news__main-content">
              <div className="news-default-top">
                <span className="h4">How Construction Can Help Itself</span>
                <div className="news-default-social">
                  <div className="flex">
                    <a href="!#">Innovation</a>
                    <a href="!#">June 12, 2020</a>
                    <a href="!#" className="comment">
                      4 comments
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="news__small-itm news__small-itm--2">
            <div className="news__img">
              <img
                src="/img/small-news-itm-2.jpg"
                alt="Second small news img"
              />
            </div>
            <div className="news__main-content">
              <div className="news-default-top">
                <span className="h4">Types of Flooring Materials</span>
                <div className="news-default-social">
                  <div className="flex">
                    <a href="!#">Company News</a>
                    <a href="!#">December 1, 2019</a>
                    <a href="!#" className="comment">
                      No comments
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-bottom-btm default-btm">
        <div className="container flex">
          <span className="h3">Explore all our news posts</span>
          <button className="btn orange" onClick={() => navigate("/news")}>
            View all news
          </button>
        </div>
      </div>
    </section>
  );
}
