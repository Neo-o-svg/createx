import React from "react";
import NewsItem from "./NewsItem";

export default function NewsItems({ news_items_data }) {
  return (
    <div className="container">
      <main className="news-main">
        <div className="news-main__wrapper">
          {news_items_data.map((el) => (
            <NewsItem key={el.id} item={el} />
          ))}
        </div>
      </main>
    </div>
  );
}
