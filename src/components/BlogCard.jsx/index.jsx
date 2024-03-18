import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const BlogCard = ({ cardData,handleViewCounter}) => {

  const {id, subTitle, title, img ,viewCount} = cardData;
 
  return (
    <div className="container" onClick={()=>handleViewCounter(id)}>
      <Link to={`/blog/${id}`} >
        <img className="img" src={img} />
        <div className="view-flex">
          <span>Posted on October 5th 2024</span>
          <span>{viewCount} views</span>
        </div>
        <p className="title">{title}</p>
        <p className="para">{subTitle}</p>
      </Link>
    </div>
  );
};
export default BlogCard;

