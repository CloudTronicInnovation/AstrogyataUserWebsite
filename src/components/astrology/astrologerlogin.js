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
import astrologinbg from "../../assets/img/astrologin-bg.jpg";

class AstrologerLogin extends React.Component {
  render() {
    return (
      <section
        className=""
        style={{
          backgroundImage: `url(${astrologinbg})`,
          width: "100%",
          padding: "100px 0px",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row>
            <div className="col-lg-12 col-md-12 mb-30">
              <div className="astro-login">
                <h2 className="th-1">Astrogyata</h2>
                <h4 className="th-2">Astrologer Login</h4>
                <form>
                  <Row>
                    <Col md="12" className="mtb-10">
                      <label>Email:</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                    </Col>
                    <label>Password:</label>
                    <Col md="12" className="mtb-10">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                    </Col>
                    <Col md="12" className="mtb-10">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                    </Col>
                  </Row>

                  <div className="button-box">
                    <div className="login-toggle-btn text-center">
                      <button type="submit" className="ntb">
                        <span>Login</span>
                      </button>
                    </div>
                  </div>
                  <p className="text-center">or</p>
                  <div className="button-box">
                    <div className="login-toggle-btn text-center">
                      <button type="submit" className="ntb">
                        <span>
                          <i
                            class="fa fa-google-plus-square"
                            aria-hidden="true"
                          ></i>{" "}
                          Google
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    );
  }
}

export default AstrologerLogin;
