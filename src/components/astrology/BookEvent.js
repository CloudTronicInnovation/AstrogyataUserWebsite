/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Input } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import "../../../src/assets/scss/style.scss";
// import AutoSearch from './autosearch'
import { BiTime } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import textbottom from "../../assets/img/textbottom.png";
import astro2 from "../../assets/img/team/astro2.jpg";
// import { useHistory } from "react-router-dom";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

class BookEvent extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      mode: "",
      event_list: "",
      mobile: "",
      email: "",
      userid: "",
      date: "",
      city: "",
      state: "",
      country: "",
      address: "",
      listofpooja: [],
    };
  }

  changeHandler1 = e => {
    this.setState({ status: e.target.value });
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlecheckpooja = value => {
    console.log(value);

    localStorage.setItem("poojaviewone", JSON.stringify(value));
    const userid = localStorage.getItem("user_id");
    if (userid !== null) {
      this.props.history.push(`/Poojadetailpage/${value?._id}`);
    } else swal("No User Found", "User Need to login First");
  };

  componentDidMount() {
    axiosConfig
      .get(`/admin/get_adminevent`)
      .then(res => {
        console.log(res.data.data);
        this.setState({ listofpooja: res?.data?.data });
      })
      .catch(err => console.log(err));
  }
  submitHandler = e => {
    e.preventDefault();
    let userid = localStorage.getItem("user_id");
    let obj = {
      // astroId: astroid,
      userId: userid,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      date: this.state.date,
      mode: this.state.mode,
      event_list: this.state.event_list,
      mobile: parseInt(this.state.mobile),
      email: this.state.email,
    };

    axiosConfig
      .post(`/user/add_event`, obj)
      .then(response => {
        console.log("@@@@@", response.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/astromallList");
      })

      .catch(error => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };

  render() {
    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              float: "left",
              width: "100%",
              backgroundColor: "#272727",
              position: "relative",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              color: "#ffffff",
              padding: " 50px 0px 50px 0px",
              backgroundImage: `url(${astrologinbg})`,
              backgroundPosition: "center center",
              backgroundRepeat: " no-repeat",
              textAlign: "center",
              timeslot: "",
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h3>Book Your Pooja</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="container mt-2">
            <Row>
              <div className="col-lg-12 col-md-12 mb-30">
                <div className="category-home">
                  <section className="pt-0">
                    <div className="container">
                      <Row>
                        {this.state.listofpooja !== "" ? (
                          <>
                            {this.state.listofpooja?.map((value, i) => (
                              <Col key={i} className="mt-3" md="3">
                                <div className="product-grid8">
                                  <div class="product-image8 imageofpooja">
                                    <img
                                      className="imagepooja"
                                      style={{ borderRadius: "10px" }}
                                      src={value?.poojaimg[0]}
                                      alt="pooja image"
                                    />
                                  </div>
                                  <div className="product-content">
                                    <Row className="priceandname">
                                      <Col lg="6" md="6" sm="6">
                                        <div
                                          style={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                          }}
                                        >
                                          {value?.pooja_type?.pooja_name.substr(
                                            0,
                                            6
                                          )}
                                        </div>
                                      </Col>
                                      <Col
                                        className="text-end"
                                        lg="6"
                                        md="6"
                                        sm="6"
                                      >
                                        <div
                                          style={{ fontSize: "15px" }}
                                          className=" poojanames  justify-content-end"
                                        >
                                          <i
                                            class="fa fa-inr"
                                            aria-hidden="true"
                                          ></i>
                                          <span className="pl-1">
                                            {value?.pooja_price}
                                          </span>
                                        </div>
                                      </Col>
                                      <Col lg="6" md="6" sm="6">
                                        <div
                                          style={{
                                            fontSize: "10px",
                                            fontWeight: "500",
                                          }}
                                        >
                                          Mode Of Pooja
                                        </div>
                                      </Col>
                                      <Col
                                        lg="6"
                                        md="6"
                                        sm="6"
                                        className="text-end"
                                      >
                                        {value.mode === "Online" ? (
                                          <div
                                            style={{
                                              fontSize: "10px",
                                              fontWeight: "500",
                                              color: "green",
                                            }}
                                          >
                                            {value?.mode}
                                          </div>
                                        ) : (
                                          <div
                                            style={{
                                              fontSize: "10px",
                                              fontWeight: "500",
                                              color: "red",
                                            }}
                                          >
                                            {value?.mode}
                                          </div>
                                        )}
                                      </Col>
                                    </Row>
                                    <Row className="mt-1">
                                      {value.mode === "Offline" ? (
                                        <>
                                          <Col lg="6" md="6" sm="6">
                                            <div style={{ fontSize: "15px" }}>
                                              Location
                                            </div>
                                          </Col>
                                          <Col
                                            lg="6"
                                            md="6"
                                            sm="6"
                                            className="text-end"
                                          >
                                            <div style={{ fontSize: "15px" }}>
                                              <MdOutlineLocationOn
                                                color="red"
                                                size={20}
                                              />
                                              {value?.fullfill_location}
                                            </div>
                                          </Col>
                                        </>
                                      ) : (
                                        <div
                                          style={{ padding: "12px 0" }}
                                        ></div>
                                      )}

                                      <Col lg="6" md="6" sm="6">
                                        <div
                                          style={{ fontSize: "12px" }}
                                          className=" poojanames  justify-content-end"
                                        >
                                          LiveStreaming
                                        </div>
                                      </Col>
                                      <Col
                                        lg="6"
                                        md="6"
                                        sm="6"
                                        className="text-end"
                                      >
                                        <span style={{ fontSize: "12px" }}>
                                          {value?.liveStreaming === true ? (
                                            <div style={{ color: "green" }}>
                                              Available
                                            </div>
                                          ) : (
                                            <div style={{ color: "red" }}>
                                              Not Available
                                            </div>
                                          )}
                                        </span>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col lg="6" md="6" sm="6">
                                        <div
                                          style={{
                                            fontSize: "17px",
                                            fontWeight: "500",
                                          }}
                                        >
                                          <BiTime color="green" size={16} />{" "}
                                          Duration
                                        </div>
                                      </Col>
                                      <Col
                                        lg="6"
                                        md="6"
                                        sm="6"
                                        className="text-end"
                                      >
                                        <div
                                          style={{ fontSize: "15px" }}
                                          className=" poojanames  justify-content-end"
                                        >
                                          {value?.duration}
                                        </div>
                                      </Col>
                                    </Row>

                                    <Row className="mt-1">
                                      <Button
                                        onClick={() =>
                                          this.handlecheckpooja(value)
                                        }
                                        color="success"
                                      >
                                        View
                                      </Button>
                                    </Row>
                                  </div>
                                </div>
                              </Col>
                            ))}
                          </>
                        ) : null}
                      </Row>
                    </div>
                  </section>
                </div>
              </div>
            </Row>
          </div>
        </section>
        <section className="">
          <Container>
            <div className="multi-address"></div>
            <Row>
              <Col lg="12 mt-12">
                <div className="wal-amt">
                  <h3>Pooja Booking</h3>
                  <hr></hr>
                  <form onSubmit={this.submitHandler}>
                    <Row>
                      <Col md="3">
                        <div class="form-group mtb-10">
                          <label>Event List</label>
                          <Input
                            type="select"
                            name="event_list"
                            // required
                            value={this.state.event_list}
                            onChange={this.changeHandler}
                          >
                            <option>select</option>
                            <option>Mata ki Chowki</option>
                            <option>Bhajan Sandhya</option>
                            <option>sundarkand Path</option>
                            <option>Bhagwat Geeta</option>
                          </Input>
                        </div>
                      </Col>
                      <Col md="3">
                        <div class="form-group mtb-10">
                          <label>Price Online</label>
                          <Input
                            type="text"
                            name="email"
                            // required
                            placeholder="Enter Your email"
                            // value={this.state.email}
                            // onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="3">
                        <div class="form-group mtb-10">
                          <label>Price Offline*</label>
                          <Input
                            type="text"
                            name="mobile"
                            // required
                            placeholder="Enter Your Number"
                            // value={this.state.mobile}
                            // onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="3">
                        <div class="form-group mtb-10">
                          <label>Date*</label>
                          <Input
                            type="date"
                            name="date"
                            required
                            placeholder="Enter Your landmark"
                            value={this.state.date}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      {/* <Col md="4">
                        <div class="form-group mtb-10">
                          <label>price Online</label>
                          <Input
                            type="select"
                            name="mode"
                            value={this.state.mode}
                            onChange={this.changeHandler}
                          >
                            <option>Select</option>
                            <option>Online</option>
                            <option>Offline</option>
                          </Input>
                        </div>
                      </Col> */}

                      <Col md="3">
                        <div class="form-group mtb-10">
                          <label>Slots*</label>
                          <Input
                            type="text"
                            name="Slots"
                            required
                            placeholder="Enter Your Slots"
                            // value={this.state.locality}
                            // onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="3">
                        <div class="form-group mtb-10">
                          <label>City*</label>
                          <Input
                            type="text"
                            name="city"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.city}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="3">
                        <div class="form-group mtb-10">
                          <label>State *</label>
                          <Input
                            type="text"
                            name="state"
                            // required
                            placeholder="Enter Your state"
                            value={this.state.state}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="3">
                        <div class="form-group mtb-10">
                          <label>Country*</label>
                          <Input
                            type="text"
                            name="country"
                            // required
                            placeholder="Enter Your Country"
                            value={this.state.country}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div class="form-group mtb-10">
                          <label>Event Detail</label>
                          <Input
                            type="textarea"
                            name="flat_no"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.flat_no}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div class="form-group mtb-10">
                          <label>Address*</label>
                          <Input
                            type="textarea"
                            name="address"
                            // required
                            placeholder="Enter Your Number"
                            value={this.state.address}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>

                      <Col md="12" className="mt-3">
                        <Button className="btn btn-primary">Submit</Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
export default BookEvent;
