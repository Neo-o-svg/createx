import React from "react";

export default function Categories(props) {
  let categories = [
    {
      key: "all-news",
      name: "All News",
    },
    {
      key: "company-news",
      name: "Company News",
    },
    {
      key: "innovation",
      name: "Innovation",
    },
    {
      key: "industry-news",
      name: "Industry News",
    },
    {
      key: "expert-tips",
      name: "Expert Tips",
    },
    {
      key: "marketing",
      name: "Marketing",
    },
  ];
  return (
    <div className="categories">
      <div className="categories-top default-top">
        <div className="container">
          <span className="h2">Categories</span>
        </div>
      </div>
      <div className="categories__bottom">
        <div className="container flex">
          {categories.map((el) => (
            <div
              className="categories__item"
              key={el.key}
              onClick={() => props.chooseCategory(el.key)}
            >
              {el.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
