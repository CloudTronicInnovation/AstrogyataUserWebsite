import React from "react";
// import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
class AddressFormEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alt_mobile: "",
      flat_no: "",
      locality: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      landmark: "",
      name: "",
      mobile: "",
      // data: [],
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    // let userId = JSON.parse(localStorage.getItem("user_id"));
    let { id } = this.props.match.params;
    // console.log("viewOne", userId);
    axiosConfig
      .get(`/user/getone_address/${id}`)
      .then(response => {
        console.log(response.data.data);
        this.setState({
          // data: response.data.data,
          name: response.data.data[0].name,
          email: response.data.data[0].email,
          mobile: response.data.data[0].mobile,
          alt_mobile: response.data.data[0].alt_mobile,
          flat_no: response.data.data[0].flat_no,
          city: response.data.data[0].city,
          locality: response.data.data[0].locality,
          pincode: response.data.data[0].pincode,
          state: response.data.data[0].state,
          country: response.data.data[0].country,
          landmark: response.data.data[0].landmark,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  submitHandler = e => {
    e.preventDefault();
    let { id } = this.props.match.params;
    console.log(id);
    axiosConfig
      .post(`/user/edit_address/${id}`, this.state)
      .then(response => {
        console.log(response.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/addressform/ + ${id}`);
      })

      .catch(error => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error.response);
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
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h1>
                      Astromall Shop/ Product Detail/ Consultant List/ Edit
                      Address
                    </h1>
                    <h3>Shop Best Online Astrology Products And Services</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section className="">
          <Container>
            <Row>
              <Col lg="12">
                <div className="wal-amt">
                  <h3>Edit Address </h3>
                  <hr></hr>
                  <form onSubmit={this.submitHandler}>
                    <Row>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Name*</label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter Your Fullname"
                            value={this.state.name}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Email address*</label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter Your email"
                            value={this.state.email}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Mobile Number*</label>
                          <input
                            type="number"
                            name="mobile"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.mobile}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Alternative Number*</label>
                          <input
                            type="text"
                            name="alt_mobile"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.alt_mobile}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Flat No:*</label>
                          <input
                            type="text"
                            name="flat_no"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.flat_no}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Locality*</label>
                          <input
                            type="text"
                            name="locality"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.locality}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>City*</label>
                          <input
                            type="text"
                            name="city"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.city}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>State / Province*</label>
                          <input
                            type="text"
                            name="state"
                            required
                            placeholder="Enter Your state"
                            value={this.state.state}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Country*</label>
                          <input
                            type="text"
                            name="country"
                            required
                            placeholder="Enter Your Country"
                            value={this.state.country}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>PinCode*</label>
                          <input
                            type="number"
                            name="pincode"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.pincode}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Landmark*</label>
                          <input
                            type="text"
                            name="landmark"
                            required
                            placeholder="Enter Your landmark"
                            value={this.state.landmark}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="12" className="mt-3">
                        <Button type="submit" className="btn btn-warning">
                          Edit Address
                        </Button>
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

export default AddressFormEdit;
