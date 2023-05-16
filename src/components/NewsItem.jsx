import React from "react";
import { useState } from "react";
const NewsItem = ({
  key,
  title,
  description,
  publishedAt,
  author,
  url,
  urlToImage,
}) => {
  const date = (val) => {
    const dateval = new Date(val);
    const month = dateval.toLocaleString("default", { month: "short" });
    return `${month} ${dateval.getDay()},${dateval.getFullYear()}`;
  };

  const [showMore, setshowMore] = useState(false);
  const handleLinkClick = (argument) => {
    window.location.href = `${argument}`;
  };
  const handleClick = (event) => {
    event.stopPropagation();
    setshowMore(!showMore);
  };
  return (
    <div
      className="card "
      onClick={() => {
        handleLinkClick(url);
      }}
    >
      <h1>{key}</h1>
      <div className="author-name">
        <span className="text-bold">{author}</span>
      </div>
      <div className="date">
        <p>{date(publishedAt)}</p>
      </div>
      <div className="title_image">
        <h1 className="title">{title}</h1>

        <img
          className="img-class"
          alt="no img"
          src={
            urlToImage == null || urlToImage === undefined
              ? "./l.png"
              : urlToImage
          }
        />
        <p className="description">
          {showMore ? description : `${description.substring(0, 100)}`}
          {description.length > 100 && (
            <button className="show-btn" onClick={handleClick}>
              {showMore ? "showLess" : "ShowMore"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
