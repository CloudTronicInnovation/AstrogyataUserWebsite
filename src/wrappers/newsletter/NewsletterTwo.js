import React, { Component } from "react";
import { Row, Input, Container, InputGroup, Button, Col } from "reactstrap";

export class NewsletterTwo extends Component {
  render() {
    return (
      <Container
        fluid
        className="d-flex justify-content-center align-items-center mt-3"
        style={{ position: "absolute" }}
      >
        <Row
          style={{
            background: "#1877f2",
            marginTop: "-5rem",
            // marginLeft: "9rem",
            padding: "10px",
          }}
        >
          <Col>
            <h3 style={{ color: "white" }}>Get Started With Newsletter</h3>
            {/* <p className="p-0 m-0 text-light">Get Started With Newsletter.</p> */}
          </Col>

          <Col>
            <InputGroup>
              <Input type="search" id="gsearch" name="gsearch" />
              <Button color="primary" style={{ background: "black" }}>
                SUBSCRIBE
              </Button>
            </InputGroup>
            <p className="p-1 m-1 text-light">Get Started With Newsletter</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewsletterTwo;
