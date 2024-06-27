import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import OtpInput from "react-otp-input";
import axiosConfig from "../../axiosConfig";
// import { Link } from "react-router-dom";
// import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
// import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

// const Phone = ({ location }) => {
//   const { pathname } = location;
// function Otp(props) {
export default class Verify_otp extends React.Component {
  state = { otp: "" };
  constructor() {
    super();
    this.state = {
      customer_email: "",
      // visible : false,
      mobile: "",
      otp: "123456",
      msg: "",

      //   "status": true,

      input: {},
      errors: {},
    };
    //     this.handleChange = otp => this.setState({ otp });
    //     this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = otp => this.setState({ otp });
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resenddd = () => {
    this.setState({ otp: "" });
    this.interval();
    this.sendOtp();
  };
  interval() {
    this.setState({ seconds: 26 });

    // let myInterval = setInterval(() => {
    //     if (this.state.seconds == 0) {
    //         clearInterval(myInterval);
    //     } else {
    //         this.setState({ seconds: this.state.seconds - 1 });
    //     }
    // }, 1000)
  }
  handleChange(evt) {
    // const value=evt.target.value;
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.otpIntegration()

    // handleverifyotp=()=>{
    //   const sendData = {
    //     customer_email:localStorage.getItem('customer_email'),
    //     status: this.state.status,
    //   };

    axiosConfig
      .post("/user/verifyotp", this.state)

      .then(res => {
        console.log(res);
        alert("anjali");
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Astrogyata | Login</title>
          <meta
            name="description"
            content="Compare page of flone react minimalist eCommerce template."
          />
        </MetaTags>
        {/* <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem> */}
        {/* <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}> */}
        {/* <BreadcrumbsItem>
        Login Register
      </BreadcrumbsItem> */}
        <LayoutOne headerTop="visible">
          {/* breadcrumb */}
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
                              <form onSubmit={this.handleSubmit}>
                                <div>
                                  <OtpInput
                                    value={this.state.otp}
                                    onChange={this.handleChange}
                                    numInputs={4}
                                    type="number"
                                    name="otp"
                                    separator={<span></span>}
                                  />
                                  {this.state.OTPError
                                    ? this.state.OTPError
                                    : null}
                                </div>

                                {/* <input
                               onChange={this.changeHandler}
                                type="number"
                                name="mobile "
                                placeholder="Enter your OTP"
                              /> */}

                                {/* <input
                               onChange={this.changeHandler}
                                type="number"
                                name="otp "
                                placeholder="Enter your OTP"
                              /> */}

                                <div className="button-box">
                                  {/* <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Forgot Password?
                                  </Link>
                                </div> */}
                                  <button type="back">Back</button>
                                  <button type="submit">SendOTP</button>
                                </div>
                              </form>
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
