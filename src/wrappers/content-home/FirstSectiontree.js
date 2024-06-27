import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";


export class FirstSectiontree extends Component {
  render() {
    return (
      <section>
        <div className="mt-1 mb-3">
          <Container>
            <div className="featurr-box">
              <Row className="">
                <Col lg="3" style={{ textAlign: "center" }}>
                  <div className="bx-f">
                    <i class="pe-7s-chat feat-icon"></i>
                    <h4 className="fw-bold">Chat with Astrologer</h4>
                  </div>
                </Col>


                <Col lg="3" style={{ textAlign: "center" }}>
                  <div className="bx-f">
                    <i class="pe-7s-call feat-icon"></i>
                    <h4 className="fw-bold">Talk to Astrologer</h4>
                  </div>
                </Col>

                <Col lg="3" style={{ textAlign: "center" }}>
                  <div className="bx-f">
                    <i class="pe-7s-video feat-icon"></i>
                    <h4 className="fw-bold">Live Event</h4>
                  </div>
                </Col>

                <Col lg="3" style={{ textAlign: "center" }}>
                  <div className="bx-f">
                    <i class="pe-7s-notebook feat-icon"></i>
                    <h4 className="fw-bold">Astrotalk Blog</h4>
                  </div>
                </Col>

              </Row>
            </div>
          </Container>
        </div>
      </section>

    );
  }
}

export default FirstSectiontree;
