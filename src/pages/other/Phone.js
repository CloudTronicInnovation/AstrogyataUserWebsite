
import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Tab from "react-bootstrap/Tab";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import axios from "axios";
import { Form } from "reactstrap";

export default class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile_no: "12345678",
      customer_email: "guptapratima98710@gmail.com",
      selectedFile: null,

    };
  }
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://13.235.180.192/api/user/sendotp', this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        //  swal("Error!", "You clicked the button!", "error");
        console.log(error.response);
      });
  };
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Buynaa | Login</title>
          <meta content="Compare page of flone react minimalist eCommerce template." />
        </MetaTags>
        <LayoutOne headerTop="visible">
          <Breadcrumb />
          <div className="login-register-area pt-100 pb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                  <div className="login-register-wrapper">
                    <Tab.Container defaultActiveKey="login">
                      <Tab.Content>
                        <Tab.Pane eventKey="login">
                          <div className="login-form-container">
                            <div className="login-register-form">
                              <Form onSubmit={this.submitHandler}>
                                <input
                                  onChange={this.changeHandler}
                                  type="number"
                                  value={this.state.mobile_no}
                                  name="mobile_no "
                                  placeholder="Enter your mobile number"
                                />
                                <input
                                  value={this.state.customer_email}
                                  type="email"
                                  name="customer_email"
                                  placeholder="Enter Email"
                                />
                                <div className="button-box">
                                  <button type="submit"
                                    color="primary">
                                    SendOTP
                                  </button>
                                </div>
                              </Form>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutOne>
      </Fragment>
    );
  }

}


