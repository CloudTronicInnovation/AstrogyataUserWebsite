import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  Form,
  Button,
} from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
// import aboutimg from "../../assets/img/aboutimg.jpg";

class AlertPage extends React.Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12 mb-30">
        <div className="category-home">
          <section>
            <Container>
              <Row>
                <Col md="12">
                  <div className="content">
                    <div ClassName="wrap-1">
                      <div className="wrap-2">
                        <h1 className="animate-charcter">Thank you !</h1>
                        <p>
                          Thank you for being our valued customer.<br></br> We
                          are so grateful and hope we met your expectations.{" "}
                        </p>
                        <Link to="/">
                          <button className="go-home">Go to Home</button>
                        </Link>
                        <Link to="/astrologerdetail">
                          <button className="go-home">Add Review</button>
                        </Link>
                      </div>
                      {/* <div className="footer-like">
                        <p>
                          Email not received?
                          <a href="#">Click here to send again</a>
                        </p>
                      </div> */}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    );
  }
}

export default AlertPage;
