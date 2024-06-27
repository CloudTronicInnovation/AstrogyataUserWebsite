import React, { Fragment, Component } from "react";
import MetaTags from "react-meta-tags";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import axiosConfig from "../../axiosConfig";
import LayoutOne from "../../layouts/LayoutOne";
import { Input, Form } from "reactstrap";
import swal from "sweetalert";
export default class Password extends Component {
  constructor(props) {
    super(props);
    var mobileNumber = localStorage.getItem("mobileNumber");
    this.state = {
      mobile: mobileNumber ? mobileNumber : "",
      password: "",
    };
  }
  changeHandler = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    console.log("dddddhh", this.state);

    axiosConfig
      .post(
        `/user/loginWithPassword`,

        {
          mobile: parseInt(this.state.mobile),
          password: this.state.password,
        }
      )
      .then(response => {
        console.log("@@@####", response.data);
        // let id = response.data.user;
        if (response.data.status === true) {
          //   this.setState({ otpMsg: response.data.msg });
          localStorage.setItem(
            "userData",
            JSON.stringify(response?.data?.user)
          );
          localStorage.setItem("token", JSON.stringify(response?.data?.token));
          localStorage.setItem(
            "user_id",
            JSON.stringify(response?.data?.user?._id)
          );
          localStorage.setItem(
            "user_mobile_no",
            JSON.stringify(response?.data?.user?.mobile)
          );
          if (response.data.msg === "success") {
            swal("success");
            // window.location.replace('/')
            this.props.history.push("/");
          }
        }
      })
      .catch(error => {
        console.log(error);
        //this.setState({ errormsg: error });
      });
  };

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
                            <h4> Password </h4>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="login">
                          <div className="login-form-container">
                            <div className="login-register-form">
                              <Form onSubmit={this.submitHandler}>
                                <Input
                                  type="password"
                                  name="password"
                                  //   maxLength="12"
                                  //   required
                                  placeholder="Enter Your password"
                                  value={this.state.password}
                                  onChange={(e) => this.changeHandler(e)}
                                />

                                <div className="button-box">
                                  <div className="login-toggle-btn"></div>
                                  <button type="submit">
                                    <span>Login</span>
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
