import React, { Fragment, Component } from "react";
import Card from "react-bootstrap/Card";
import LayoutOne from "../../layouts/LayoutOne";
import { Container, Form, Row, Col } from "reactstrap";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import defaultProfileImage from "../../../src/assets/img/boy-img.png"
export default class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      mobile: "",
      dob: "",
      otp: "",
      gender: "",
      bithplace: "",
      birth_tym: "",
      userimg: defaultProfileImage,
      address: "",
      // locality: "",
      pincode: "",
      city: "",
      state: "",
      country: "",
      walletId: "",
      amount: "",
      deductedAmt: "",
      selectedName: "",
      selectedFile: null,
      data: {},
    };
  }
  // onChangeHandler = event => {
  //   this.setState({ selectedFile: event.target.files[0] });
  //   this.setState({ selectedName: event.target.files[0].name });
  //   console.log(event.target.files[0]);
  // };
  onChangeHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      this.setState({
        selectedFile: file,
        selectedName: file.name,
        userimg: URL.createObjectURL(file), // Update the userimg state to display a preview
      });
    }
  };

  componentDidMount() {
    // let { id } = this.props.match.params;
    let user_id = JSON.parse(localStorage.getItem("user_id"));
    axiosConfig
      .get(`/user/viewoneuser/${user_id}`)
      .then(response => {
        console.log(response.data.data);
        this.setState({
          fullname: response.data.data.fullname,
          email: response.data.data.email,
          mobile: response.data.data.mobile,
          gender: response.data.data.gender,
          dob: response.data.data.dob,
          bithplace: response.data.data.bithplace,
          birth_tym: response.data.data.birth_tym,
          userimg: response.data.data.userimg || defaultProfileImage,
          address: response.data.data.address,
          pincode: response.data.data.pincode,
          city: response.data.data.city,
          state: response.data.data.state,
          country: response.data.data.country,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  changeHandler1 = e => {
    this.setState({ status: e.target.value });
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state.data);
    const data = new FormData();
    data.append("fullname", this.state.fullname);
    data.append("email", this.state.email);
    data.append("mobile", this.state.mobile);
    data.append("dob", this.state.dob);
    data.append("gender", this.state.gender);
    data.append("bithplace", this.state.bithplace);
    data.append("birth_tym", this.state.birth_tym);
    data.append("address", this.state.address);
    data.append("pincode", this.state.pincode);
    data.append("city", this.state.city);
    data.append("state", this.state.state);
    data.append("country", this.state.country);
    // data.append("locality", this.state.locality);
    if (this.state.selectedFile !== null) {
      data.append("userimg", this.state.selectedFile, this.state.selectedName);
    } else {
      data.append("userimg", defaultProfileImage); // Use default image if none selected
    }

    let user_id = JSON.parse(localStorage.getItem("user_id"));
    axiosConfig
      .post(`/user/edit_myprofile/${user_id}`, data)
      .then(response => {
        console.log(response.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Fragment>
        <LayoutOne headerTop="visible">
          <section className="pt-0 pb-0">
            <div
              className=""
              style={{
                backgroundColor: "#ffcc01",
                width: "100%",
                padding: "70px 0px",
                backgroundSize: "cover",
              }}
            >
              <Container>
                <Row>
                  <Col md="12">
                    <div className="leftcont text-left">
                      <h1>My Account Information</h1>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </section>
          <div className="myaccount-area pb-80 pt-100">
            <div className="container">
              <div className="row">
                <div class="col-lg-4">
                  <Card.Body className="usr-1">
                    <div className="user-pro">
                      <img
                        src={this.state.userimg}
                        alt="userimg"
                        className="img-fluid img-border rounded-circle box-shadow-1"
                        width="150"
                      />
                      <ul>
                        <li>
                          Name : <span>{this.state.fullname}</span>
                        </li>
                        <li>
                          Email : <span>{this.state.email}</span>
                        </li>
                        <li>
                          Mobile : <span>{this.state.mobile}</span>
                        </li>
                        <li>
                          Gender : <span>{this.state.gender}</span>
                        </li>
                        <li>
                          DOB : <span>{this.state.dob}</span>
                        </li>
                        <li>
                          Address : <span>{this.state.address}</span>
                        </li>
                        <li>
                          Bith Place : <span>{this.state.bithplace}</span>
                        </li>
                        <li>
                          Birth Time : <span>{this.state.birth_tym}</span>
                        </li>
                        <li>
                          Pin Code : <span>{this.state.pincode}</span>
                        </li>
                        <li>
                          State : <span>{this.state.state}</span>
                        </li>
                        <li>
                          City : <span>{this.state.city}</span>
                        </li>
                        <li>
                          Country : <span>{this.state.country}</span>
                        </li>
                      </ul>
                    </div>
                  </Card.Body>
                </div>
                <div className="col-lg-8">
                  <div className="myaccount-wrapper">
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading"></Card.Header>
                      <Card.Body className="usr-1">
                        <Form onSubmit={this.submitHandler}>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>My Account Information</h4>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>First Name</label>
                                  <input
                                    type="text"
                                    placeholder=" Name"
                                    name="fullname"
                                    value={this.state.fullname}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>DOB</label>
                                  <input
                                    type="text"
                                    placeholder="Enter DOB"
                                    name="dob"
                                    value={this.state.dob}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Email Address</label>
                                  <input
                                    readOnly
                                    type="email"
                                    placeholder="Customer Email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>User Image</label>
                                  <input
                                    className="form-control"
                                    type="file"
                                    // name="userimg"
                                    onChange={this.onChangeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Birth Place</label>
                                  <input
                                    type="text"
                                    name="bithplace"
                                    value={this.state.bithplace}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Gender</label>
                                  <select
                                    type="select"
                                    className="form-control"
                                    value={this.state.gender}
                                    onChange={this.changeHandler}
                                    name="gender"
                                  >
                                    <option selected>--select--</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Birth Time</label>
                                  <input
                                    type="text"
                                    name="birth_tym"
                                    value={this.state.birth_tym}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Mobile Number</label>
                                  <input
                                    type="number"
                                    name="mobile"
                                    value={this.state.mobile}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </Card.Body>
                      {/* </Accordion.Collapse> */}
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Body className="usr-1">
                        <Form onSubmit={this.submitHandler}>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>My Address</h4>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Address</label>
                                  <input
                                    type="textarea"
                                    placeholder="Address"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              {/* <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Locality</label>
                                  <input
                                    type="text"
                                    placeholder="Locality"
                                    name="locality"
                                    value={this.state.locality}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div> */}
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Pin Code</label>
                                  <input
                                    type="number"
                                    maxLength={6}
                                    placeholder="Pin Code"
                                    name="pincode"
                                    value={this.state.pincode}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>City</label>
                                  <input
                                    type="text"
                                    placeholder="city"
                                    name="city"
                                    value={this.state.city}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>State</label>
                                  <input
                                    type="text"
                                    placeholder="State"
                                    name="state"
                                    value={this.state.state}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Country</label>
                                  <input
                                    type="text"
                                    placeholder="Country"
                                    name="country"
                                    value={this.state.country}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </Card.Body>
                      {/* </Accordion.Collapse> */}
                    </Card>
                    {/* <Card className="single-my-account mb-20">
                      <Card.Body className="usr-1">
                        <Form onSubmit={this.addAddress}>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>My Orders</h4>
                            </div>
                            <div className="row"></div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </Card.Body>
                      </Accordion.Collapse> 
                    </Card> */}
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
