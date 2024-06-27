import React from "react";
import first from "../../assets/img/home-section/firstsection.jpg";
import { Col, Container, Row } from "reactstrap";
import "../../assets/css/custom.css";

function FirstSection({ countDownImage }) {
  return (
    <Container fluid className="mt-5">
      <Row>
        <Col lg="4">
          <img src={first} alt="first" style={{ height: "100vh" }} />
        </Col>
        <Col lg="8">
          <Row>
            <Col lg="6" className="firstcol">
              <h4>100% Organic Gen</h4>
              <h1>Our qualities</h1>
              <p>
                =loremTempor mollit esse deserunt ea adipisicing mollit veniam
                quis qui ex in qui non reprehenderit. <br /> Ad anim labore
                deserunt pariatur eu ipsum fugiat ullamco duis nisi enim. Sint
                ad mollit sint exercitation consectetur et elit consectetur
                ullamco tempor veniam consectetur laboris.
                <br /> Eiusmod labore consequat culpa sint sit adipisicing.
              </p>
            </Col>
            <Col lg="6" className="secondcol">
              <p>
                =loremTempor mollit esse deserunt ea adipisicing mollit veniam
                quis qui ex in qui non reprehenderit.
                <br /> Ad anim labore deserunt pariatur eu ipsum fugiat ullamco
                duis nisi enim. Sint ad mollit sint exercitation consectetur et
                elit consectetur ullamco tempor veniam consectetur laboris.
                <br />
                Eiusmod labore consequat culpa sint sit adipisicing.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default FirstSection;
