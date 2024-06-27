import React, { Component } from "react";
import LayoutOne from "../../layouts/LayoutOne";
// import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row, ListGroup } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";

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
              <h2>Privacy Policy</h2>
              <img src={textbottom} alt="" className="sb-img" />
            </div>
          </Row>
          <Container>
            <Row>
              <ListGroup>
                <h3 style={{ fontWeight: "500" }}>Price Range</h3>
                <p>
                  At Astrogyata.com we have customised pricing according to the
                  services rendered by us. The details are provided to you
                  beforehand according to the effort, efficiency and the output
                  of the service. Typically, the range of transactions on our
                  Android and iOS applications varies from INR 500 to 1500 per
                  user per session.
                </p>
                <br></br>

                <h3 style={{ fontWeight: "500" }}>Schedule of payment</h3>
                <p>
                  Some of our services can be utilised for fixed durations. In
                  such cases, it is clearly mentioned within the description of
                  these services. The period of usage in these cases vary from 1
                  month to 6 months.
                </p>

                <br></br>

                <h3 style={{ fontWeight: "500" }}>Price Matching</h3>
                <p>
                  At AstroTalk.com we are committed to offering you the best
                  possible prices. We will be glad to meet our competitor's
                  pricing if you ever find a service that we offer, in the
                  similar interest and providing same professionalism and
                  features, available from a similar service provider.
                </p>

                <p>
                  Our prices do not vary according to the market needs,
                  competitor pricing etc.
                </p>
                <br></br>
                <br></br>
              </ListGroup>
            </Row>
          </Container>
        </Container>
      </LayoutOne>
    );
  }
}
