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
      // lastname: "",
      p_lastname: "",
      dob: "",
      p_dob: "",
      date_of_time: "",
      p_date_of_time: "",
      birthPlace: "",
      p_birthPlace: "",
      gender: "",
      // marital_status: "",
      // occupation: "",
      // topic_of_cnsrn: "",
      // entertopic_of_cnsrn: "",
      data: [],
      state: [],
      city: [],
      country: [],
      selectedCountry: {
        name: "India",
        isoCode: "IN",
        flag: "🇮🇳",
        phonecode: "91",
        currency: "INR",
        latitude: "20.00000000",
        longitude: "77.00000000",
        timezones: [
          {
            zoneName: "Asia/Kolkata",
            gmtOffset: 19800,
            gmtOffsetName: "UTC+05:30",
            abbreviation: "IST",
            tzName: "Indian Standard Time",
          },
        ],
      },
      selectedState: null,
      selectedCity: null,
      selectedFile: null,
      selectedName: "",
      type: "Call",
      showpartner: false,
    };
  }
  changeCity = (item) => {
    this.setState({
      selectedCity: item,
    });
  };
  componentDidMount() {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    axiosConfig
      .get(`/user/viewoneuser/${userId}`)
      .then((response) => {
        console.log();
        this.setState({ mobile: response.data.data.mobile });
        this.setState({ firstname: response.data.data.fullname });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //Attchment file Handler
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log("cdcd", event.target.files[0]);
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let astroId = localStorage.getItem("astroId");

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
    // data.append("marital_status", this.state.marital_status);
    // data.append("occupation", this.state.occupation);
    // data.append("topic_of_cnsrn", this.state.topic_of_cnsrn);
    data.append("country", this.state.selectedCountry.name);
    data.append("state", this.state.selectedState.name);
    data.append("city", this.state.selectedCity.name);
    data.append("type", "Call");

    if (this.state.selectedFile !== null) {
      data.append("file", this.state.selectedFile);
    } else {
      data.append("file", null);
    }
    axiosConfig
      .post(`/user/add_chat_intake`, data)
      .then((response) => {
        console.log(response);
        this.props.history.push({
          pathname: "/CallListData",
          state: response.data,
        });
      })

      .catch((error) => {
        console.log(error.data);
      });
  };
  getTodayDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);

    return `${year}-${month}-${day}`;
  }
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
                    <h1>Call InTake Form</h1>
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
                  <h3>Call InTake Form </h3>
                  <hr></hr>
                  <div className="d-flex">
                    <Row>
                      <Col lg="2" sm="2" md="2">
                        <Input
                          onClick={(e) => {
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
                  <form onSubmit={(e) => this.submitHandler(e)}>
                    <Row>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <Label>Mobile Number*</Label>
                          <Input
                            type="text"
                            name="mobile"
                            disabled
                            value={this.state.mobile}
                            onChange={this.changeHandler}
                            required
                            placeholder="Mobile Number"
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <Label>Full Name*</Label>
                          <Input
                            type="text"
                            name="firstname"
                            required
                            placeholder="Enter FirstName"
                            value={this.state.firstname}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <Label>Date of Birth*</Label>
                          <Input
                            type="date"
                            name="dob"
                            value={this.state.dob}
                            onChange={this.changeHandler}
                            max={this.getTodayDate()}
                            placeholder="Enter Date of Birth"
                            required
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <Label>Time of Birth*</Label>
                          <Input
                            type="time"
                            name="date_of_time"
                            value={this.state.date_of_time}
                            onChange={this.changeHandler}
                            required
                            placeholder="Time of Birth"
                          />
                        </div>
                      </Col>
                      {/* <Col md="4">
                        <div class="form-group mtb-10">
                          <Label>Birth Place*</Label>
                          <Input
                            type="text"
                            name="birthPlace"
                            value={this.state.birthPlace}
                            onChange={this.changeHandler}
                            required
                            placeholder="Birth Place"
                          />
                        </div>
                      </Col> */}
                      <Col lg="4" md="4" className="mt-2">
                        <Label>Gender*</Label>
                        <Input
                          id="exampleSelect"
                          name="gender"
                          type="select"
                          value={this.state.data.gender}
                          onChange={this.changeHandler}
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select Gender
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Female">Other</option>
                        </Input>
                      </Col>
                      <Col lg="4" md="4" sm="6" className="mt-2">
                        <Label>Country</Label>
                        <Select
                          options={Country.getAllCountries()}
                          getOptionLabel={(options) => {
                            return options["name"];
                          }}
                          getOptionValue={(options) => {
                            return options["name"];
                          }}
                          value={this.state.selectedCountry}
                          onChange={(item) => {
                            this.setState({ selectedCountry: item });
                            // axiosConfig
                            //   .post(`/user/time_zone`, {
                            //     country_code: item?.timezones[0].zoneName,
                            //   })
                            //   .then(response => {
                            //     this.setState({
                            //       timezone: response?.data?.data?.timezone,
                            //     });
                            //   })
                            //   .catch(error => {
                            //     console.log(error);
                            //   });
                          }}
                        />
                      </Col>

                      <Col lg="4" md="4" sm="6" className="mt-2">
                        <Label>State</Label>
                        <Select
                          options={State?.getStatesOfCountry(
                            this.state.selectedCountry?.isoCode
                          )}
                          getOptionLabel={(options) => {
                            return options["name"];
                          }}
                          getOptionValue={(options) => {
                            return options["name"];
                          }}
                          value={this.state.selectedState}
                          onChange={(item) => {
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
                          getOptionLabel={(options) => {
                            return options["name"];
                          }}
                          getOptionValue={(options) => {
                            return options["name"];
                          }}
                          value={this.state.selectedCity}
                          onChange={(item) => {
                            this.changeCity(item);
                            this.setState({
                              birthPlace: item.name,
                            });
                          }}
                        />
                      </Col>

                      <Col md="4">
                        <div class="form-group mtb-10">
                          <Label>Birth Place*</Label>
                          <input
                            type="text"
                            name="birthPlace1"
                            value={this.state.selectedCity?.name}
                            // onChange={ console.log(this.state.selectedCity)}
                            required
                            placeholder="Enter Your  Birth Place"
                          />
                        </div>
                      </Col>
                      {/* <Col lg="4" md="4" sm="6" className="mt-2">
                        <Label>Country</Label>
                        <Select
                          options={Country.getAllCountries()}
                          getOptionLabel={(options) => {
                            return options["name"];
                          }}
                          getOptionValue={(options) => {
                            return options["name"];
                          }}
                          value={this.state.selectedCountry}
                          onChange={(item) => {
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
                          getOptionLabel={(options) => {
                            return options["name"];
                          }}
                          getOptionValue={(options) => {
                            return options["name"];
                          }}
                          value={this.state.selectedState}
                          onChange={(item) => {
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
                          getOptionLabel={(options) => {
                            return options["name"];
                          }}
                          getOptionValue={(options) => {
                            return options["name"];
                          }}
                          value={this.state.selectedCity}
                          onChange={(item) => {
                            this.changeCity(item);
                          }}
                        />
                      </Col> */}
                      {/* <Col md="4">
                        <div class="form-group ">
                          <Label>Marital Status*</Label>
                          <Input
                            type="select"
                            name="marital_status"
                            value={this.state.marital_status}
                            onChange={this.changeHandler}
                            defaultValue=""
                          >
                            <option value="" disabled>
                              Select Marital Status
                            </option>
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
                          <Label>Occupation*</Label>
                          <Input
                            type="select"
                            name="occupation"
                            value={this.state.data.occupation}
                            onChange={this.changeHandler}
                            defaultValue=""
                          >
                            <option value="" disabled>
                              Select Employed in
                            </option>
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
                          <Label>Topic of concern*</Label>
                          <Input
                            type="select"
                            name="topic_of_cnsrn"
                            value={this.state.data.topic_of_cnsrn}
                            onChange={this.changeHandler}
                            defaultValue=""
                          >
                            <option value="" disabled>
                              Select Topic
                            </option>
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
                      </Col> */}
                      {/* <Col md="4">
                        <div class="form-group mtb-10">
                          <Label>Enter topic of concern:</Label>
                          <Input
                            type="text"
                            name="entertopic_of_cnsrn"
                            required
                            placeholder="Enter Your Fullname"
                            value={this.state.entertopic_of_cnsrn}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col> */}
                      {this.state.showpartner ? (
                        <>
                          <Col md="4">
                            <div class="form-group mtb-10">
                              <Label>Partner First Name</Label>
                              <Input
                                type="text"
                                name="p_firstname"
                                placeholder=" Patner firstName"
                                value={this.state.p_firstname}
                                onChange={this.changeHandler}
                              />
                            </div>
                          </Col>
                          <Col md="4">
                            <div class="form-group mtb-10">
                              <Label>Partner Last Name</Label>
                              <Input
                                type="text"
                                name="p_lastname"
                                placeholder=" Patner LastName"
                                value={this.state.p_lastname}
                                onChange={this.changeHandler}
                              />
                            </div>
                          </Col>

                          <Col md="4">
                            <div class="form-group mtb-10">
                              <Label>Partner Date of Birth</Label>
                              <Input
                                type="date"
                                name="p_dob"
                                value={this.state.p_dob}
                                onChange={this.changeHandler}
                                max={this.getTodayDate()}
                              />
                            </div>
                          </Col>

                          <Col md="4">
                            <div class="form-group mtb-10">
                              <Label>Partner Date of Time</Label>
                              <Input
                                type="time"
                                name="p_date_of_time"
                                value={this.state.p_date_of_time}
                                onChange={this.changeHandler}
                              />
                            </div>
                          </Col>

                          <Col md="4">
                            <div class="form-group mtb-10">
                              <Label>Partner Birth Place</Label>
                              <Input
                                type="text"
                                name="p_birthPlace"
                                value={this.state.p_birthPlace}
                                onChange={this.changeHandler}
                                placeholder="Partner Birth Place"
                              />
                            </div>
                          </Col>
                        </>
                      ) : null}
                      {/* <Col md="4">
                        <div class="form-group mtb-10">
                          <Label>Attachment</Label>
                          <Input
                            type="file"
                            onChange={this.onChangeHandler}
                            accept="image/png, image/jpeg,.doc,image/jpg,.pdf"
                          />
                        </div>
                      </Col> */}

                      <Col md="12" className="mt-3">
                        <Button
                          className="btn btn-warning"
                          onClick={this.submitHandler}
                        >
                          Start Call with {localStorage.getItem("astroname")}
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
