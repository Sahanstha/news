import React from "react";
import "./NewsItem.css";
import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";

const NewsList = ({ searchData }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=keyword&apiKey=2808de29d6c34430b8f7b4563c3b3c11"
    )
      .then((result) => result.json())
      .then((val) => {
        setArticles(val.articles);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container_card_main">
      {searchData
        ? articles.map(
            (article, index) =>
              article.title.toLowerCase().includes(searchData) && (
                <NewsItem
                  key={index}
                  title={article.title}
                  url={article.url}
                  urlToImage={article.urlToImage}
                  description={article.description}
                  publishedAt={article.publishedAt}
                  author={article.author}
                />
              )
          )
        : articles?.map((article, index) => (
            <NewsItem
              key={index}
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              description={article.description}
              publishedAt={article.publishedAt}
              author={article.author}
            />
          ))}
    </div>
  );
};
export default NewsList;
