import React from "react";
import { Card, CardBody, Row, Col, Container } from "reactstrap";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import axios from "axios";
import "swiper/css/swiper.css";
import "swiper/swiper.scss";
import "swiper/swiper.less";
class SecondSection extends React.Component {
  state = {
    storeL: [],
  };

  componentDidMount() {
    //Store Image
    axios
      .get("http://13.235.180.192/api/admin/browsebytrending_store")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ storeL: response.data.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  render() {
    var params = {
      slidesPerView: 5,
      spaceBetween: 5,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
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
      <Container fluid>
        <Card className="mt-4">
          <Container className="d-flex justify-content-center align-items-center">
            <Row>
              <Col className="mt-5" style={{ marginLeft: "5rem" }}>
                <h2 className="fw-bolder" style={{ color: "#1877f2" }}>
                  Browse By Trending Store
                </h2>
              </Col>
            </Row>
          </Container>
          <CardBody>
            <div>
              <Swiper {...params} style={{ width: "10px" }}>
                {this.state.storeL?.map((storeList) => (
                  <div
                    className=""
                    key={storeList._id}
                    style={{ width: "15rem" }}
                  >
                    <Link
                      to={
                        process.env.PUBLIC_URL +
                        "/product-slider/" +
                        storeList._id
                      }
                    >
                      <img
                        src={storeList.storeImg[0]}
                        alt="swiper 1"
                        style={{ width: "200px", height: "35vh" }}
                      />
                    </Link>
                  </div>
                ))}
              </Swiper>
            </div>
          </CardBody>
        </Card>
      </Container>
    );
  }
}
export default SecondSection;
