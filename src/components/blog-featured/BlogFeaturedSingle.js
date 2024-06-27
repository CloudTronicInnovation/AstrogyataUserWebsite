import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogFeaturedSingle = ({ data, singlePost }) => {
  const [bestBlog, setBestBlog] = useState(data);

  useEffect(() => {
    setBestBlog(data);
  }, [data]);

  return (
    <div className="col-lg-4 col-sm-6">
      <div className="blog-wrap mb-30 scroll-zoom">
        <div className="blog-img">
          <Link to={process.env.PUBLIC_URL + "/blog-standard/" + data?._id}>
            <img src={data?.img} alt="" />
          </Link>
          <div className="blog-category-names">
            <span className="purple"></span>
          </div>
        </div>
        <div className="blog-content-wrap">
          <div className="blog-content text-center">
            <h3>{data?.name}</h3>
            <span>By Admin </span>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogFeaturedSingle.propTypes = {
  singlePost: PropTypes.object,
};

export default BlogFeaturedSingle;
