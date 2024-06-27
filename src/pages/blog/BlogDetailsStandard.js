import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogSidebar from "../../wrappers/blog/BlogSidebar";
import BlogComment from "../../wrappers/blog/BlogComment";
import BlogPost from "../../wrappers/blog/BlogPost";
import { Col, Container, Row } from "reactstrap";
import { render } from "sass";
import axiosConfig from "../../axiosConfig";

class BlogDetailsStandard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // data: {},
      BlogData: [],
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
    axiosConfig
      .get(`/admin/viewoneBlog/${id}`)
      .then(response => {
        console.log(response.data.data);
        this.setState({
          // data: response.data.data,
          BlogData: response.data.data,

          // blogImg: response.data.data.blogImg[0],
          // blog_title: response.data.data.blog_title,
          // desc: response.data.data.desc,
          // name: response.data.data.name,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { BlogData } = this.state;

    return (
      <Fragment>
        <LayoutOne headerTop="visible">
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
                      <h1>Blog Detail</h1>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>
          {/* breadcrumb */}

          <div className="blog-area pt-100 pb-100">
            <div className="container">
              <div className="row flex-row-reverse">
                <div className="col-lg-9">
                  <div className="blog-details-wrapper ml-20">
                    {/* blog post */}

                    <BlogPost />

                    {/* blog post comment */}
                    <BlogComment />
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
      </Fragment>
    );
  }
}
// BlogDetailsStandard.propTypes = {
//   location: PropTypes.object
// };

export default BlogDetailsStandard;
