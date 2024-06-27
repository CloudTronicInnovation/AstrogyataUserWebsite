import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import axiosConfig from "../../axiosConfig";
import Homebookpooja from "./Homebookpooja.js";
// import Swiper from "react-id-swiper";
class SectionPooja extends React.Component {
  state = {
    productList: [],
  };
  componentDidMount() {
    axiosConfig.get(`/admin/getProduct`).then(res => {
      this.setState({ productList: res.data.data });
    });
  }
  render() {
    const { productList } = this.state;
    return (
      <>
        <Container>
          <div className="heading mt-40">
            <h2>Newly Launched</h2>
            <img src={textbottom} alt="" />
          </div>
          <Homebookpooja />
        </Container>
        <Container>
          <div className="heading mt-40">
            <h2>Our Trending Products</h2>
            <img src={textbottom} alt="" />
          </div>
          <Row>
            <div className="col-lg-12 col-md-12 mb-30">
              <div className="category-home">
                <section className="pt-0">
                  <div className="container">
                    <Row>
                      {this.state.productList.length ? (
                        productList.slice(0, 4).map(product => {
                          return (
                            <Col md="3" key={product._id}>
                              <div className="product-grid8">
                                <div class="product-image8">
                                  <Link to={`/productlist/${product?._id}`}>
                                    <img
                                      src={product.image}
                                      alt=""
                                      className="Ptd-img"
                                    />
                                  </Link>
                                </div>
                                <div className="product-content">
                                  <div className="price d-flex">
                                    <div>
                                      <i
                                        class="fa fa-inr"
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                    <div className=" px-2">{product.price}</div>
                                  </div>
                                  <h3 className="title">
                                    <Link>
                                      {product.productname.substr(0, 9)}
                                      {/* {product.productname.length > 24 ? (
                                        <span className="">
                                          {product.productname.substr(0, 9)}
                                          ...See more
                                        </span>
                                      ) : (
                                        product.productname
                                      )} */}
                                    </Link>
                                  </h3>
                                  {/* <Link className="all-deals">
                                    View More
                                    <i class="fa fa-angle-right icon"></i>
                                  </Link> */}
                                  <Link
                                    to={`/productlist/${product?._id}`}
                                    className="all-deals"
                                  >
                                    View More
                                    <i class="fa fa-angle-right icon"></i>
                                  </Link>
                                </div>
                              </div>
                            </Col>
                          );
                        })
                      ) : (
                        <span className="text-center">Loading ...</span>
                      )}
                    </Row>
                  </div>
                </section>
              </div>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}
export default SectionPooja;
