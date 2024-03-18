import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useParams } from "react-router-dom";
import { getSingleBlog } from "../../apis/api";
import { parseSingleBlogData } from "../../utilities/parsers";
import { useSelector } from "react-redux";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const blogsList = useSelector((state) => state.blogs.blogList);
  const count = useSelector((state) => state.blogs);

  useEffect(() => {
    fetchBlogDetail();
  }, []);

  const fetchBlogDetail = async () => {
    try {
      const resp = await getSingleBlog(id);
      const parsedData = parseSingleBlogData(resp?.data);
      setBlog(parsedData);
    } catch (error) {
      console.log(error);
    }
  };

  const views = blogsList.find((item) => item.id === id);
  return (
    <div className="bl-container">
      <div className="title-sec">
        <div className="w-70">
          <div className="views">
            <span>Posted on October 5th 2024</span>
            <span>{views?.viewCount} views</span>
          </div>
          <h3>Should I Buy a New Car or Lease a New Car in 2024? </h3>
          <p>
            We provide a full range of front end mechanical repairs for all
            makes and modal of cars, no matter the cause. this includes, We
            provide a full range of front end mechanical
          </p>
        </div>
      </div>
      <img src={blog?.img} className="cov-img" />
      <div className="title-sec">
        <div className="w-70">
          <h3>{blog?.title}</h3>
          <p>{blog?.article}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
