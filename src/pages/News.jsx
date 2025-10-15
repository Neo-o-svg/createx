import { useState } from "react";
import HeroLayout from "../components/heroLayout/HeroLayout";
import Categories from "../components/categories/Categories";
import NewsItems from "../components/newsItems/NewsItems";
import ContactForm from "../components/сontactForm/ContactForm";

const news_hero_data = {
  bgImage: "../img/news-bg.jpg",
  heroTitle: "NEWS",
  heroText: `
        Stay tuned with our news, expert tips and articles.
    `,
};

export default function News() {
  const [items] = useState([
    {
      id: 1,
      category: "industry-news",
      title: `
        How to Build Climate Change-Resilient Infrastructure
        `,
      img: "../../img/news-item-1.jpg",
      desc: `
        How to Build Climate Change-Resilient Infrastructure
        `,
      sphere: "Industry News",
      date: "June 24, 2020",
      commentCount: "4",
      text: `
        Ipsum aliquet nisi, hendrerit rhoncus quam tortor, 
        maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla.
        Integer bibendum turpis convallis...`,
    },
    {
      id: 2,
      category: "innovation",
      title: `
        How Construction Can Help Itself
        `,
      img: "../img/news-item-2.jpg",
      desc: `
        How Construction Can Help Itself
        `,
      sphere: "Innovation",
      date: "June 12, 2020",
      commentCount: "No",
      text: `
        Porta habitant vitae quam interdum. 
        Leo viverra non volutpat rhoncus placerat vitae scelerisque. 
        Rhoncus augue faucibus maecenas lacus...`,
    },
    {
      id: 3,
      category: "expert-tips",
      title: `
        The Difference Between a Digger and an Excavator
        `,
      img: "../img/news-item-3.jpg",
      desc: `
        The Difference Between a Digger and an Excavator
        `,
      sphere: "Expert Tips",
      date: "May 16, 2020",
      commentCount: "No",
      text: `
        Cras est nisi purus velit facilisi vitae, dolor. 
        Lorem scelerisque integer duis et nulla lobortis cursus. 
        Viverra erat sollicitudin praesent viverra...`,
    },
    {
      id: 4,
      category: "expert-tips",
      title: `
        Building Construction Hand Tools
        `,
      img: "../img/news-item-4.jpg",
      desc: `
        Building Construction Hand Tools
        `,
      sphere: "Expert Tips",
      date: "February 25, 2020",
      commentCount: "1",
      text: `
        Tellus quis aliquet volutpat nunc pulvinar donec sed sapien. 
        Vitae elit id dolor, tristique massa. Fames lobortis orci 
        rutrum bibendum integer...`,
    },
    {
      id: 5,
      category: "industry-news",
      title: `
        Top 10 Construction Trends
        `,
      img: "../img/news-item-5.jpg",
      desc: `
        Top 10 Construction Trends
        `,
      sphere: "Industry News",
      date: "January 14, 2020",
      commentCount: "No",
      text: `
        Dignissim sed enim, eleifend morbi condimentum. 
        Congue id quis vulputate dignissim eget. 
        Ac ullamcorper nunc habitasse enim interdum platea...`,
    },
    {
      id: 6,
      category: "company-news",
      title: `
        Types of Flooring Materials
        `,
      img: "../img/news-item-6.jpg",
      desc: `
       Types of Flooring Materials
        `,
      sphere: "Company News",
      date: "December 1, 2019",
      commentCount: "No",
      text: `
        Maecenas donec lacinia nunc, quam sit magnis mauris. 
        Neque bibendum et mauris, aenean. Vel arcu amet in sem parturient  
        integer duis et nulla...`,
    },
  ]);

  const [currentItems, setCurrentItems] = useState([]);

  const chooseCategory = (category) => {
    if (category === "all-news") {
      setCurrentItems([...items]);
      return;
    }
    setCurrentItems(items.filter((el) => el.category === category));
  };
  return (
    <>
      <HeroLayout
        bgImage={news_hero_data.bgImage}
        heroTitle={news_hero_data.heroTitle}
        heroText={news_hero_data.heroText}
      />
      <Categories chooseCategory={chooseCategory} />
      <NewsItems news_items_data={currentItems} />
      <ContactForm/>
    </>
  );
}
