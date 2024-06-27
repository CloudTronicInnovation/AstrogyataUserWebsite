import React from "react";
import { Container, Row, Col, Button, Input, Label } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import Select from "react-select";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import { Country, State, City } from "country-state-city";
class UserRequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      astroid: "",
      mobile: "",
      firstname: "",
      p_firstname: "",
      lastname: "",
      p_lastname: "",
      dob: "",
      p_dob: "",
      date_of_time: "",
      p_date_of_time: "",
      birthPlace: "",
      p_birthPlace: "",
      gender: "",
      marital_status: "",
      occupation: "",
      topic_of_cnsrn: "",
      entertopic_of_cnsrn: "",
      data: [],
      state: [],
      city: [],
      country: [],
      selectedCountry: null,
      selectedState: null,
      selectedCity: null,
      showpartner: false,
    };
  }
  componentDidMount() {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    axiosConfig
      .get(`/user/viewoneuser/${userId}`)
      .then(response => {
        this.setState({ mobile: response.data.data.mobile });
        this.setState({ firstname: response.data.data.fullname });
      })
      .catch(error => {
        console.log(error);
      });
  }
  changeCity = item => {
    this.setState({
      selectedCity: item,
    });
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let astroId = localStorage.getItem("astroId");
    // let obj = {
    //   // userid: userId,
    //   // astroid: astroId,
    //   // mobile: parseInt(this.state.mobile),
    //   firstname: this.state.firstname,
    //   p_firstname: this.state.p_firstname,
    //   // lastname: this.state.lastname,
    //   p_lastname: this.state.p_lastname,
    //   dob: this.state.dob,
    //   p_dob: this.state.p_dob,
    //   birthPlace: this.state.birthPlace,
    //   p_birthPlace: this.state.p_birthPlace,
    //   date_of_time: this.state.date_of_time,
    //   p_date_of_time: this.state.p_date_of_time,
    //   gender: this.state.gender,
    //   marital_status: this.state.marital_status,
    //   occupation: this.state.occupation,
    //   topic_of_cnsrn: this.state.topic_of_cnsrn,
    //   entertopic_of_cnsrn: this.state.entertopic_of_cnsrn,
    //   type: "Video",
    // };

    const data = new FormData();
    data.append("userid", userId);
    data.append("astroid", astroId);
    data.append("mobile", parseInt(this.state.mobile));
    data.append("firstname", this.state.firstname);
    data.append("dob", this.state.dob);
    data.append("p_firstname", this.state.p_firstname);
    data.append("p_lastname", this.state.p_lastname);
    data.append("birthPlace", this.state.birthPlace);
    data.append("p_birthPlace", this.state.p_birthPlace);
    data.append("date_of_time", this.state.date_of_time);
    data.append("p_date_of_time", this.state.p_date_of_time);
    data.append("gender", this.state.gender);
    data.append("marital_status", this.state.marital_status);
    data.append("occupation", this.state.occupation);
    data.append("topic_of_cnsrn", this.state.topic_of_cnsrn);
    data.append("country", this.state.selectedCountry.name);
    data.append("state", this.state.selectedState.name);
    data.append("city", this.state.selectedCity.name);
    data.append("type", "Video");

    axiosConfig
      .post(`/user/add_chat_intake`, data)
      .then(response => {
        console.log(response.data.data);
        this.props.history.push({
          pathname: "/VideoListData",
        });
        // this.props.history.push(`/VideoListData`);
        // this.props.history.push(`/waitingpagevideo`);
        // this.props.history.push(`/userVideoCall/${userId}`);
        // let payload = {
        //   userid: userId,
        //   astroid: astroId,
        //   status: "Requested",
        //   type: "Video",
        // };
        // console.log(payload);
        // axiosConfig
        //   .post(`/user/addCallWallet`, payload)
        //   .then(res => {
        //     console.log(res.data._id);
        //     if (res.data.status === true) {
        //       localStorage.setItem("waitingId", res.data._id);
        //       this.props.history.push({
        //         pathname: "/VideoListData",
        //         state: res.data,
        //       });
        //     } else swal("Not Having Enough Balance");
        //   })
        //   .catch(err => {
        //     console.log(err.response.data);
        //     if (err.response.data.message) {
        //       alert("Low balance Recharge");
        //     }
        //   });
      })
      .catch(error => {
        swal("Error!", "error");
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
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h1>Video Call InTake Form</h1>
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
                  <h3>Video Call InTake Form </h3>
                  <hr></hr>
                  <div className="d-flex">
                    <Row>
                      <Col lg="2" sm="2" md="2">
                        <input
                          onClick={e => {
                            this.setState({ showpartner: e.target.checked });
                          }}
                          width={14}
                          type="checkbox"
                          id="box"
                          name="box"
                          value="intakeform"
                        />
                      </Col>
                      <Col>
                        <span className="mt-2">
                          Want to Add Partner Details
                        </span>
                      </Col>
                    </Row>
                  </div>
                  <form onSubmit={e => this.submitHandler(e)}>
                    <Row>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Mobile Number*</label>
                          <input
                            type="text"
                            name="mobile"
                            value={this.state.mobile}
                            onChange={this.changeHandler}
                            required
                            placeholder="Enter Your Number"
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Full Name*</label>
                          <input
                            type="text"
                            name="firstname"
                            required
                            placeholder="Enter Your Full Name"
                            value={this.state.firstname}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      {/* <Col md="4">
                        <div class="form-group mtb-10">
                          <label> Last Name*</label>
                          <input
                            required
                            type="text"
                            name="lastname"
                            placeholder="Enter Your  Lastname"
                            value={this.state.lastname}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col> */}

                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Date of Birth*</label>
                          <input
                            type="date"
                            name="dob"
                            value={this.state.dob}
                            onChange={this.changeHandler}
                            required
                            placeholder="Enter Your Number"
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Time of Birth*</label>
                          <input
                            type="time"
                            name="date_of_time"
                            value={this.state.date_of_time}
                            onChange={this.changeHandler}
                            required
                            placeholder="Enter Your Number"
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Birth Place*</label>
                          <input
                            type="text"
                            name="birthPlace"
                            value={this.state.birthPlace}
                            onChange={this.changeHandler}
                            required
                            placeholder="Enter Your  Birth Place"
                          />
                        </div>
                      </Col>
                      {this.state.showpartner ? (
                        <>
                          <Col md="4">
                            <div class="form-group mtb-10">
                              <label>Partner First Name</label>
                              <input
                                type="text"
                                name="p_firstname"
                                placeholder="Enter Your Patner firstname"
                                value={this.state.p_firstname}
                                onChange={this.changeHandler}
                              />
                            </div>
                          </Col>

                          <Col md="4">
                            <div class="form-group mtb-10">
                              <label>Partner Last Name</label>
                              <input
                                type="text"
                                name="p_lastname"
                                placeholder="Enter Your Partner Lastname"
                                value={this.state.p_lastname}
                                onChange={this.changeHandler}
                              />
                            </div>
                          </Col>
                          <Col md="4">
                            <div class="form-group mtb-10">
                              <label> Partner Date of Birth</label>
                              <input
                                type="date"
                                name="p_dob"
                                value={this.state.p_dob}
                                onChange={this.changeHandler}
                                placeholder="Enter Your Number"
                              />
                            </div>
                          </Col>

                          <Col md="4">
                            <div class="form-group mtb-10">
                              <label> Partner Time of Birth</label>
                              <input
                                type="time"
                                name="p_date_of_time"
                                value={this.state.p_date_of_time}
                                onChange={this.changeHandler}
                              />
                            </div>
                          </Col>

                          <Col md="4">
                            <div class="form-group mtb-10">
                              <label> Partner Birth Place</label>
                              <input
                                type="text"
                                name="p_birthPlace"
                                value={this.state.p_birthPlace}
                                onChange={this.changeHandler}
                                placeholder="Enter Your  Birth Place"
                              />
                            </div>
                          </Col>
                        </>
                      ) : null}

                      <Col lg="4" md="4" sm="4" className="mt-3">
                        <label>Gender*</label>
                        <Input
                          id="exampleSelect"
                          name="gender"
                          type="select"
                          value={this.state.data.gender}
                          onChange={this.changeHandler}
                        >
                          <option>Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </Input>
                      </Col>
                      <Col lg="4" md="4" sm="6" className="mt-2">
                        <Label>Country</Label>
                        <Select
                          options={Country.getAllCountries()}
                          getOptionLabel={options => {
                            return options["name"];
                          }}
                          getOptionValue={options => {
                            return options["name"];
                          }}
                          value={this.state.selectedCountry}
                          onChange={item => {
                            this.setState({ selectedCountry: item });
                          }}
                        />
                      </Col>

                      <Col lg="4" md="4" sm="6" className="mt-2">
                        <Label>State</Label>
                        <Select
                          options={State?.getStatesOfCountry(
                            this.state.selectedCountry?.isoCode
                          )}
                          getOptionLabel={options => {
                            return options["name"];
                          }}
                          getOptionValue={options => {
                            return options["name"];
                          }}
                          value={this.state.selectedState}
                          onChange={item => {
                            this.setState({ selectedState: item });
                          }}
                        />
                      </Col>

                      <Col lg="4" md="4" sm="6" className="mt-2">
                        <Label>City</Label>
                        <Select
                          options={City.getCitiesOfState(
                            this.state.selectedState?.countryCode,
                            this.state.selectedState?.isoCode
                          )}
                          getOptionLabel={options => {
                            return options["name"];
                          }}
                          getOptionValue={options => {
                            return options["name"];
                          }}
                          value={this.state.selectedCity}
                          onChange={item => {
                            this.changeCity(item);
                          }}
                        />
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Marital Status*</label>
                          <Input
                            type="select"
                            name="marital_status"
                            value={this.state.marital_status}
                            onChange={this.changeHandler}
                          >
                            <option>Select Marital Status</option>
                            <option>Single</option>
                            <option>Married</option>
                            <option>Divorced</option>
                            <option>Separated</option>
                            <option>Widowed</option>
                          </Input>
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Occupation*</label>
                          <Input
                            type="select"
                            name="occupation"
                            value={this.state.data.occupation}
                            onChange={this.changeHandler}
                          >
                            <option>Select Employed in</option>
                            <option>Private Sector</option>
                            <option>Govt Sector</option>
                            <option>Business/Self Employed</option>
                            <option>Civil Services</option>
                            <option>Defence</option>
                            <option>Not Working</option>
                            <option>Student</option>
                          </Input>
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Topic of concern*</label>
                          <Input
                            type="select"
                            name="topic_of_cnsrn"
                            value={this.state.data.topic_of_cnsrn}
                            onChange={this.changeHandler}
                          >
                            <option>Select Topic</option>
                            <option>Career and Business</option>
                            <option>Marriage</option>
                            <option>Love and Relationship</option>
                            <option>Wealth and Property</option>
                            <option>Education</option>
                            <option>Legal Matters</option>
                            <option>Child Name Consultation</option>
                            <option>Business Name Consultation</option>
                            <option>Gem Stone Consultation</option>
                            <option>Commodity trading consultation</option>
                            <option>Match making</option>
                            <option>Birth Time Rectification</option>
                            <option>Name Correction Consultation</option>
                            <option>Travel Abroad Consulation</option>
                            <option>Remedy Consultation</option>
                            <option>Health Consultation</option>
                            <option>Others</option>
                          </Input>
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Topic of concern:</label>
                          <input
                            type="text"
                            name="entertopic_of_cnsrn"
                            required
                            placeholder="Enter topic of Concern"
                            value={this.state.entertopic_of_cnsrn}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="12" className="mt-3">
                        <Button className="btn btn-warning">
                          Start VideoCall with
                          <span style={{ paddingLeft: "2px" }}>
                            {localStorage.getItem("astroname").toUpperCase()}
                          </span>
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
export default UserRequestForm;
