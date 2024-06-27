import React from "react";
import second from "../../assets/img/home-section/sectiontwo.jpg";
import { Col, Container, Row } from "reactstrap";
import "../../assets/css/custom.css";

function FifthSection() {
  return (
    <Container fluid className="mt-5 mb-5">
      <Row>
        <Col lg="6">
          <Row>
            <Col lg="12" className="fourthsection">
              <h1>
                Discover <br /> The New Trending
              </h1>
              <h5>
                The new and trending outfits for you and your family <br /> at
                one place
              </h5>
            </Col>
          </Row>
        </Col>
        <Col lg="6">
          <img src={second} alt="first" style={{ height: "100vh" }} />
        </Col>
      </Row>
    </Container>
  );
}

export default FifthSection;
