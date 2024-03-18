import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard.jsx";
import { getBlogs } from "../../apis/api.js";
import { parseBlogData } from "../../utilities/parsers/index.jsx";
import "./styles.scss";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";
import {
  incrementViewCount,
  setBlogList,
} from "../../store/Actions/BlogActions/blogActions.js";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/index.jsx";

const BlogPosts = () => {
  const [loading, setLoading] = useState(false);
  const blogsList = useSelector((state) => state.blogs.blogList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(blogsList)) {
      fetchBlogsData();
    }
  }, []);

  const fetchBlogsData = async () => {
    setLoading(true);
    try {
      const resp = await getBlogs();
      const parsedData = parseBlogData(resp?.data);
      dispatch(setBlogList(parsedData));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleViewCounter = (id) => {
    dispatch(incrementViewCount(id));
  };

  return (
    <div>
      <div className="nav-to">
        <Link to={"/propertySearch"}>
          <Button variant="contained">Go to Property Search</Button>
        </Link>
      </div>
      <div className="blog-container">
        <div className="bl-list">
          {blogsList.map((bl, index) => (
            <BlogCard
              key={index}
              cardData={bl}
              handleViewCounter={handleViewCounter}
            />
          ))}
        </div>
      </div>
      <Loader loading={loading} />
    </div>
  );
};

export default BlogPosts;
