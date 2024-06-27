import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { MapPin, Globe, Mail, Clock } from "react-feather";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "swiper/swiper.scss";
import "swiper/swiper.less";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import axios from "axios";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
//import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescriptionSlider from "../../wrappers/product/ProductImageDescriptionSlider";
import StoreSlider from "./StoreSlider";

export class ProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strDetail: {},
      proData: [],
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get(`http://13.235.180.192/api/admin/getonestore/${id}`)
      .then((response) => {
        // console.log(response.data);
        console.log(response.data.data);
        this.setState({ strDetail: response.data.data });
        // console.log(response.data.data.rate[0].rate);
        //console.log(this.state.rate[0]);
      })
      .catch((error) => {
        console.log(error.response);
      });

    //let { id } = this.props.match.params;
    axios
      .get(`http://13.235.180.192/api/admin/productbystore/${id}`)
      .then((response) => {
        // console.log(response.data);
        console.log(response.data.data);
        this.setState({ proData: response.data.data });
        console.log(response.data.data.cost_price);
        //console.log(this.state.rate[0]);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  render() {
    var params = {
      slidesPerView: 5,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    };
    return (
      <Fragment>
        <MetaTags>
          <title>Flone | Product Page</title>
          <meta
            name="description"
            content="Product page of flone react minimalist eCommerce template."
          />
        </MetaTags>

        <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
          Home
        </BreadcrumbsItem>
        <BreadcrumbsItem to={process.env.PUBLIC_URL}>
          Shop Product
        </BreadcrumbsItem>

        <LayoutOne>
          {/* breadcrumb */}
          <Breadcrumb />
          {/* <StoreSlider /> */}
          <Container className="d-block justify-content-start mt-5 ">
            <Row className="m-3">
              <h2 className="fw-bold">{this.state.strDetail.store_name}</h2>
            </Row>
            <Row className="mt-5 mb-3">
              <Col lg="12">
                <div>
                  <Carousel className="">
                    {this.state.strDetail.storeImg?.map((i) => (
                      <Carousel.Item style={{ width: "100%", height: "90vh" }}>
                        <img src={i} alt="" className="w-100 h-100" />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </Col>
            </Row>

            <Row className="mt-1">
              {/* <Col>
                <h2 className="fw-bold">Raymonds</h2>
              </Col> */}
              <Col className="d-flex justify-content-end">
                <Button className="m-1" color="info">
                  Direction
                </Button>
                <Button className="m-1" color="primary">
                  Call
                </Button>
              </Col>
            </Row>
            <Col className="m-3">
              <Row className="m-3">
                <Col lg="1">
                  <MapPin />
                </Col>
                <Col>
                  <h5>
                    {this.state.strDetail.address_line1},
                    {this.state.strDetail.address_line2},
                    {this.state.strDetail.landmark},{this.state.strDetail.city},
                    {this.state.strDetail.pincode}
                  </h5>
                </Col>
              </Row>
              <Row className="m-3">
                <Col lg="1">
                  <Globe />
                </Col>
                <Col>
                  <h5>{this.state.strDetail.websiteUrl}</h5>
                </Col>
              </Row>
              <Row className="m-3">
                <Col lg="1">
                  <Mail />
                </Col>
                <Col>
                  <h5>{this.state.strDetail.store_email}</h5>
                </Col>
              </Row>
              <Row className="m-3">
                <Col lg="1">
                  <Clock />
                </Col>
                <Col>
                  <h5 className="text-capitalize">
                    {this.state.strDetail.openingTym} -{" "}
                    {this.state.strDetail.closingTym} |{" "}
                    <span> {this.state.strDetail.day}</span>
                  </h5>
                </Col>
              </Row>
              <div>
                <h2>Introduction</h2>
              </div>

              <div>
                <h6>{this.state.strDetail.store_desc}</h6>
              </div>
            </Col>
          </Container>

          {/* related product slider */}
          <Container className="m-5">
            <Row className="m-5">
              <Col className="d-flex justify-content-center align-items-center">
                <h3 className="fw-bold">Related Products</h3>
              </Col>
            </Row>
            <Swiper {...params} style={{ width: "10px" }}>
              {this.state.proData?.map((product) => (
                <div
                  className="col-xl-3 col-md-6 col-lg-4 col-sm-6"
                  key={product._id}
                >
                  <div className="product-wrap-2">
                    <div className="product-img">
                      <Link
                        to={
                          process.env.PUBLIC_URL +
                          "/product-sticky/" +
                          product._id
                        }
                      >
                        <img
                          className="default-img"
                          src={product.product_img[0]}
                          alt=""
                          style={{ width: "250px", height: "300px" }}
                        />

                        <img
                          className="hover-img"
                          src={product.product_img[1]}
                          alt=""
                          style={{ width: "200px", height: "250px" }}
                        />
                      </Link>

                      <div className="product-action-2"></div>
                    </div>
                    <div className="product-content-2">
                      <div className="title-price-wrap-2">
                        <h3>
                          <Link
                            to={
                              process.env.PUBLIC_URL + "/product/" + product._id
                            }
                          >
                            {product.product_name}
                          </Link>
                        </h3>
                        <div className="price-2">
                          <Fragment>
                            <span>₹ {product.sell_price}</span>
                          </Fragment>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Swiper>
          </Container>

          {/* product description with image */}
          {/* <ProductImageDescriptionSlider
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        /> */}

          {/* product description tab */}
          {/* <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product.fullDescription}
        /> */}
        </LayoutOne>
      </Fragment>
    );
  }
}

export default ProductSlider;
