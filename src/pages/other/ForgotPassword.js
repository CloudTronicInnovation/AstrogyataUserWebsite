import React, { Fragment, Component } from "react";
import MetaTags from "react-meta-tags";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import LayoutOne from "../../layouts/LayoutOne";
import { Label, Input, Form, Button, Row, Col } from "reactstrap";
import swal from "sweetalert";
export default class ForgotPassword extends Component {
  render() {
    // console.log(this.state.otp);
    return (
      <Fragment>
        <MetaTags>
          <title>Astrogyata</title>
          <meta
            name="description"
            content="Compare page of flone react minimalist eCommerce template."
          />
        </MetaTags>
        <LayoutOne headerTop="visible">
          <div className="login-register-area pt-100 pb-100">
            <div className="container">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                  <div className="login-register-wrapper">
                    <Tab.Container defaultActiveKey="login">
                      <Nav variant="pills" className="login-register-tab-list">
                        <Nav.Item>
                          <Nav.Link eventKey="login">
                            <h4>Forgot Password</h4>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="login">
                          <div className="login-form-container">
                            <div className="login-register-form">
                              <Form>
                                <input
                                  //  onChange={this.changeHandler}
                                  type="email"
                                  name="email "
                                  placeholder="Enter email"
                                />

                                {/* <input
                                  //  onChange={this.changeHandler}
                                  type="Password"
                                  name="Password"
                                  placeholder="Enter Reset Password"
                                /> */}
                                <div className="button-box">
                                  <div className="login-toggle-btn"></div>
                                  <button type="submit">
                                    <span>Send Reset Code </span>
                                  </button>
                                </div>
                              </Form>
                            </div>
                          </div>
                        </Tab.Pane>
                        {/* Register the user now */}
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                  <></>
                </div>
              </div>
            </div>
          </div>
        </LayoutOne>
      </Fragment>
    );
  }
}
