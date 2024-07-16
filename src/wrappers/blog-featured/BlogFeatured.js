import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import blogFeaturedData from "../../data/blog-featured/blog-featured.json";
import BlogFeaturedSingle from "../../components/blog-featured/BlogFeaturedSingle";
// import SectionTitle from "../../components/section-title/SectionTitle";
import textbottom from "../../assets/img/textbottom.png";
// import appImg from "../../assets/img/app.jpeg";
import axiosConfig from "../../axiosConfig";

const BlogFeatured = ({ spaceTopClass, spaceBottomClass }) => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    axiosConfig
      .get(`/user/active_blog_category`)
      .then(response => {
        if (response.data.status === true) {
          setBlogData(response.data.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className={`blog-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="heading mt-70">
          <h2 id="blogs">Blogs </h2>
          <img src={textbottom} alt="" />
        </div>
        <div className="row">
          {blogData &&
            blogData.slice(0, 3).map((single, key) => {
              return (
                <BlogFeaturedSingle
                  data={single}
                  key={key}
                  sliderClass="swiper-slide rtt"
                />
              );
            })}
        </div>
        <div>
          <div style={{ width: "100%" }}>
            {/* <img src={appImg} height={100} alt="" /> */}
          </div>
          {/* Download link
          <a className="px-2" href="https://astrogyata.in/app-release.apk">
            https://astrogyata.in/app-release.apk
          </a>
          <span className="px-2">Only for android</span> */}
        </div>
      </div>
    </div>
  );
};

BlogFeatured.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default BlogFeatured;
