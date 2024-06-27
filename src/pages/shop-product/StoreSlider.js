import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { MapPin, Globe, Mail, Clock } from "react-feather";
// import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import axios from "axios";

export class StoreSlider extends Component {
  state = {
    StoreI: [],
  };
  componentDidMount() {
    axios.get(`http://13.235.180.192/api/admin/getstore/`).then(res => {
      let StoreI = res.data.data;
      console.log(res);
      this.setState({ StoreI });
    });
  }
  render() {
    return (
      <Container className="d-block justify-content-start mt-5">
        <Row className="m-3">
          <h1>Mens Shop</h1>
        </Row>
        <Row className="mt-5 mb-3">
          <Col lg="12">
            <div>
              <Carousel className="">
                {this.state.StoreI?.storeImg?.map(i => (
                  <img
                    src={i}
                    alt=""
                    className=""
                    width="100%"
                    height="600vh"
                  />
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>

        <Row className="mt-1">
          <Col>
            <h2 className="fw-bold">Raymonds</h2>
          </Col>
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
              <h5>145/4 Park Street, Kolkata 700016</h5>
            </Col>
          </Row>
          <Row className="m-3">
            <Col lg="1">
              <Globe />
            </Col>
            <Col>
              <h5>www.casualdress.com</h5>
            </Col>
          </Row>
          <Row className="m-3">
            <Col lg="1">
              <Mail />
            </Col>
            <Col>
              <h5>casual@infomail.com</h5>
            </Col>
          </Row>
          <Row className="m-3">
            <Col lg="1">
              <Clock />
            </Col>
            <Col>
              <h5>Open Mon 10:00am - 8:00pm</h5>
            </Col>
          </Row>

          <div>
            <h2>Introduction</h2>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              laoreet velit sed nisi rutrum posuere. Ut tempus ultricies justo,
              eu laoreet nunc semper eu. Etiam efficitur velit eget dolor
              interdum ullamcorper. Aenean at orci eget erat viverra bibendum
              non in velit. Morbi vitae nisi et orci hendrerit pharetra nec sed
              nulla. Donec tempus ac eros sed sodales. Cras tempor arcu ligula,
              ut rhoncus lorem maximus sed. Maecenas porta ornare nibh nec
              tempor. Aenean et odio sed lorem tincidunt rutrum. Fusce eleifend
              vitae nulla at congue. Sed tortor magna, finibus eu magna nec,
              interdum pellentesque ligula more...
            </p>
          </div>
        </Col>
      </Container>
    );
  }
}

export default StoreSlider;
