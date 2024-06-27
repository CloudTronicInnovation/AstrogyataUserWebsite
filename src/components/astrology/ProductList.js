import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import LayoutOne from "../../layouts/LayoutOne";
// import ReactHtmlParser, {
//   processNodes,
//   convertNodeToElement,
//   htmlparser2,
// } from "react-html-parser";

import AutoSearch from "./autosearch";
import axiosConfig from "../../axiosConfig";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/user/productbycategory/${id}`)
      .then(response => {
        console.log("productbycategory", response.data.data);
        this.setState({
          productList: response.data.data,
        });
        if (response.data.status === true) {
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { productList } = this.state;
    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              float: "left",
              width: "100%",
              backgroundColor: "#272727",
              position: "relative",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              color: "#ffffff",
              padding: " 50px 0px 50px 0px",
              backgroundImage: `url(${astrologinbg})`,
              backgroundPosition: "center center",
              backgroundRepeat: " no-repeat",
              textAlign: "center",
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h1>Online-puja Products</h1>
                    <h3>Shop Best Online Astrology Products And Services</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section className="ptb-0">
          {productList.length ? (
            <Container>
              <Row>
                <Col lg="12">
                  <div className="pt-10 pb-50">
                    <AutoSearch />

                    <Row>
                      {productList.map(product => {
                        return (
                          <Col md="4" key={product?._id}>
                            <div className="po-box text-center">
                              <Row>
                                <Col md="12">
                                  <div className="po-1 text-center">
                                    <img
                                      src={product?.category.img}
                                      alt="pooja"
                                      width="250px"
                                      height="200px"
                                    />
                                  </div>
                                </Col>
                                <Col md="12">
                                  <div className="po-1 mt-1 mb-1 text-center">
                                    <h3>{product.product?.title}</h3>
                                    <p>
                                      Puja Price Rs
                                      {product?.price ? product?.price : 0}
                                      /-
                                    </p>
                                    <Link
                                      to={
                                        "/poojadetail/" + product?.product?._id
                                      }
                                      className="pto-l text-center"
                                    >
                                      Book Now
                                    </Link>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                </Col>
                <Col lg="6">
                  {/* <div className="abo-2">
                                  <img src={aboutone} alt="" className="about-img"></img>
                            </div> */}
                </Col>
              </Row>
            </Container>
          ) : (
            <div
              className="notFound text-center"
              style={{
                color: "red",
                height: "50vh",
                // width: "250px",
              }}
            >
              <span> No Product Found</span>
            </div>
          )}
        </section>
      </LayoutOne>
    );
  }
}

export default ProductList;
