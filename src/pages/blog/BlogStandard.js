import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogSidebar from "../../wrappers/blog/BlogSidebar";
import BlogPagination from "../../wrappers/blog/BlogPagination";
import BlogPosts from "../../wrappers/blog/BlogPosts";
import { Container } from "react-bootstrap";
import { Col, Row } from "reactstrap";
import axiosConfig from "../../axiosConfig";

// const BlogStandard = ({  }) => {

//   const [BlogViewData, setBlogViewData] = useState([]);
class BlogStandard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data:{},
      BlogViewData: [],
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
    axiosConfig
      .get(`/user/blog_by_category/${id}`)
      .then(response => {
        console.log(response.data.data);
        this.setState({
          BlogViewData: response.data.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { BlogViewData } = this.state;
    return (
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}

        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              backgroundColor: "#ffcc01",
              width: "100%",
              padding: "70px 0px",
              backgroundSize: "cover",
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h1>Our Latest Blog</h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-lg-9">
                <div className="ml-20">
                  <div className="row">
                    {/* blog posts */}
                    {BlogViewData &&
                      BlogViewData.map((single, key) => {
                        return (
                          <BlogPosts
                            data={single}
                            key={key}
                            sliderClass="swiper-slide rtt"
                          />
                        );
                      })}
                  </div>

                  {/* blog pagination */}
                  <BlogPagination />
                </div>
              </div>
              <div className="col-lg-3">
                {/* blog sidebar */}
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    );
  }
}
// BlogStandard.propTypes = {
//   location: PropTypes.object
// };

export default BlogStandard;
