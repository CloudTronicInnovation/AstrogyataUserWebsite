import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosConfig from "../../axiosConfig";
import ReactHtmlParser from "react-html-parser";
const BlogPosts = ({ data }) => {
  const [latestBlog, setLatestBlog] = useState(data);

  useEffect(() => {
    setLatestBlog(data);
  }, [data]);

  return (
    <Fragment>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link
              to={
                process.env.PUBLIC_URL + "/blog-details-standard/" + data?._id
              }
            >
              <img src={data?.blogImg} alt="" />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>{data?.createdAt}</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                    4 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link
                to={
                  process.env.PUBLIC_URL + "/blog-details-standard" + data?._id
                }
              >
                {data?.blog_title}
              </Link>
            </h4>

            <p> {ReactHtmlParser(data?.desc)}</p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  read more
                </Link>
              </div>
              <div className="blog-share">
                <span>share :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-2.jpg"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>22 April, 2020</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                    4 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link
                to={
                  process.env.PUBLIC_URL + "/blog-details-standard/" + data?._id
                }
              >
                New collection of our shop
              </Link>
            </h4>
            <p>
              Aenean sollicitudin, lorem quis on endum uctor nisi elitod the
              cona sequat ipsum, necas sagittis sem natoque nibh id penatibus
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  read more
                </Link>
              </div>
              <div className="blog-share">
                <span>share :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-1.jpg"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>22 April, 2020</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                    4 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                Ipsum blog post two
              </Link>
            </h4>
            <p>
              Aenean sollicitudin, lorem quis on endum uctor nisi elitod the
              cona sequat ipsum, necas sagittis sem natoque nibh id penatibus
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  read more
                </Link>
              </div>
              <div className="blog-share">
                <span>share :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-2.jpg"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>22 April, 2020</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                    4 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                New shop collection
              </Link>
            </h4>
            <p>
              Aenean sollicitudin, lorem quis on endum uctor nisi elitod the
              cona sequat ipsum, necas sagittis sem natoque nibh id penatibus
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  read more
                </Link>
              </div>
              <div className="blog-share">
                <span>share :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-1.jpg"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>22 April, 2020</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                    4 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                Lorem blog post four
              </Link>
            </h4>
            <p>
              Aenean sollicitudin, lorem quis on endum uctor nisi elitod the
              cona sequat ipsum, necas sagittis sem natoque nibh id penatibus
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  read more
                </Link>
              </div>
              <div className="blog-share">
                <span>share :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-2.jpg"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>22 April, 2020</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                    4 <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                Ipsum blog post five
              </Link>
            </h4>
            <p>
              Aenean sollicitudin, lorem quis on endum uctor nisi elitod the
              cona sequat ipsum, necas sagittis sem natoque nibh id penatibus
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  read more
                </Link>
              </div>
              <div className="blog-share">
                <span>share :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default BlogPosts;
