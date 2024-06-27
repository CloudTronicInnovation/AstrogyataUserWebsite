import React, { Component } from "react";
import LayoutOne from "../../layouts/LayoutOne";
// import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row, ListGroup } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import { Col } from "reactstrap";
import Accordion from "react-bootstrap/Accordion";

export default class privacyPolicy extends Component {
  render() {
    return (
      <LayoutOne headerTop="visible">
        <Container fluid>
          <Row className="mb-5">
            {/* <div
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: `url(${Cloth})`,
                height: "70vh",
                width: "100%",
              }}
            > */}
            <div className="headingtitle text-center ptb-40">
              <h2>FAQS FOR Astrogyata</h2>
              <img src={textbottom} alt="" className="sb-img" />
            </div>
          </Row>
          <Container>
            <Row className="">
              <Col xs lg="2"></Col>
              <Col xs lg="8">
                <Accordion>
                  <Accordion.Item eventKey="0" className="m-4">
                    <Accordion.Header>
                      I recharged my wallet, how do I call astrologer now?
                    </Accordion.Header>
                    <Accordion.Body>
                      After login/registering with our website, you just need to
                      recharge wallet, select the astrologer you want to consult
                      and enter your mobile number. You will receive call from
                      the astrologer within 2 minutes.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="m-4">
                    <Accordion.Header>
                      I didn’t received call from astrologer after entering
                      phone number in “call now” button, what to do?
                    </Accordion.Header>
                    <Accordion.Body>
                      Don’t worry. Sometimes it happens that astrologer might
                      busy with another customer. If you don’t receive call with
                      in 2 minutes after requesting call, you can request again.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs lg="2"></Col>
            </Row>
            <Row className="">
              <Col xs lg="2"></Col>
              <Col xs lg="8">
                <Accordion>
                  <Accordion.Item eventKey="0" className="m-4">
                    <Accordion.Header>
                      What if my astrologer is offline?
                    </Accordion.Header>
                    <Accordion.Body>
                      There might be chances that astrologer prefer to offline
                      due to some reasons. You can choose to talk to any other
                      astrologer on call. But if you want to talk to particular
                      astrologer only, you can call our customer care number and
                      check availability of the astrologer(s).
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="m-4">
                    <Accordion.Header>
                      Can I talk to astrologer(s) without registering?
                    </Accordion.Header>
                    <Accordion.Body>
                      No, you must have to register with our website to talk to
                      astrologer on astrolaabh.in. Registering with Astrolaabh
                      is super easy, just click on register now button, fill the
                      details and you can instantly talk to astrologer.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" className="m-4">
                    <Accordion.Header>
                      Do you accept payments via credit cards?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, we do accept payments via all major credit cards/
                      debit cards/ net banking/ UPI, wallet payments, Paytm and
                      all other options available to make payments to
                      Astrolaabh.in.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs lg="2"></Col>
            </Row>
          </Container>
        </Container>
      </LayoutOne>
    );
  }
}
