import React from "react";
import { Container, Row, Col, Button, Input, Label } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";

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
      showpartner: false,
      type: "Chat",
    };
  }
  changeCity = (item) => {
    this.setState({
      selectedCity: item,
    });
    console.log(this.state.selectedCity);
    // axiosConfig
    //   .post(`/user/geo_detail`, {
    //     place: item?.name,
    //   })
    //   .then(response => {
    //     this.setState({
    //       latitude: response?.data?.data?.geonames[0].latitude,
    //       longitude: response?.data?.data?.geonames[0].longitude,
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  componentDidMount() {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    axiosConfig
      .get(`/user/viewoneuser/${userId}`)
      .then((response) => {
        this.setState({ mobile: response.data.data.mobile });
        this.setState({ firstname: response.data.data.firstname });
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
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let astroId = localStorage.getItem("astroId");
    // debugger;
    const data = new FormData();
    data.append("userid", userId);
    data.append("astroid", astroId);
    data.append("mobile", parseInt(this.state.mobile));
    data.append("firstname", this.state.firstname);
    data.append("dob", this.state.dob);
    data.append("p_firstname", this.state.p_firstname);
    data.append("p_lastname", this.state.p_lastname);
    data.append("p_birthPlace", this.state.p_birthPlace);
    data.append("birthPlace", this.state.birthPlace);
    data.append("date_of_time", this.state.date_of_time);
    data.append("p_dob", this.state.p_dob);
    data.append("p_date_of_time", this.state.p_date_of_time);
    data.append("gender", this.state.gender);
    data.append("marital_status", this.state.marital_status);
    data.append("occupation", this.state.occupation);
    data.append("topic_of_cnsrn", this.state.topic_of_cnsrn);
    data.append("country", this.state.selectedCountry.name);
    data.append("state", this.state.selectedState.name);
    data.append("city", this.state.selectedCity.name);
    data.append("type", "Chat");
    if (this.state.selectedFile !== null) {
      data.append("file", this.state.selectedFile);
    } else {
      data.append("file", null);
    }
    for (let [key, value] of data.entries()) {
      console.log(`${key}: ${value}`);
    }
    // const Year = new Date(this.state.dob).getFullYear();
    // const Month = new Date(this.state.dob).getMonth();
    // const Day = new Date(this.state.dob).getDay();
    // const arr = this.state.date_of_time.split(":");
    // const hour = parseInt(arr[0]);
    // const min = parseInt(arr[1]);

    // const birthDetails = {
    //   userid: userId,
    //   astroid: astroId,
    //   day: Day,
    //   month: Month,
    //   year: Year,
    //   hour: hour,
    //   min: min,
    //   lat: this.state.latitude,
    //   lon: this.state.longitude,
    //   tzone: 5.5,
    // };

    // axiosConfig
    //   .post(`/user/birth_details`, birthDetails)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     swal("Error!", "You clicked the button!", "error");
    //   });

    if (userId !== "" && userId !== null) {
      axiosConfig
        .post(`/user/add_chat_intake`, data)
        .then((response) => {
          console.log(response.data.data);
          const data = {
            userid: userId,
            astroid: astroId,
            type: "Chat",
          };
          axiosConfig
            .post(`/user/addCallWallet`, data)
            .then((res) => {
              console.log(res);
              sessionStorage.setItem("notificationdata", res.data?._id);
              if (res.data.status === true) {
                this.props.history.push({
                  pathname: "/ChatListData",
                  state: res.data,
                });

              } else swal("Not having Enough Balance");
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          swal("Error!", "Error Occurred!", "error");
          console.log(error.response);
        });
    } else {
      swal("Need to Login first");
    }
  };
  getTodayDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);

    return `${year}-${month}-${day}`;
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
                    <h1>Chat InTake Form</h1>
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
                  <h3>Chat InTake Form </h3>
                  <hr></hr>

                  <div className="d-flex">
                    <Row>
                      <Col lg="2" sm="2" md="2">
                        <input
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
                          <input
                            type="number"
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
                          <Label>FullName*</Label>
                          <input
                            type="text"
                            name="firstname"
                            required
                            placeholder="Enter Your FirstName"
                            value={this.state.firstname}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <Label>Date of Birth*</Label>
                          <input
                            type="date"
                            name="dob"
                            value={this.state.dob}
                            onChange={this.changeHandler}
                            max={this.getTodayDate()}
                            required
                            placeholder="Enter Your Number"
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <Label>Time of Birth*</Label>
                          <input
                            type="time"
                            required
                            name="date_of_time"
                            value={this.state.date_of_time}
                            onChange={this.changeHandler}
                            id="timeinput"
                          />
                        </div>
                      </Col>

                      {this.state.showpartner ? (
                        <>
                          <Col md="4">
                            <div class="form-group mtb-10">
                              <Label>Partner First Name</Label>
                              <input
                                type="text"
                                name="p_firstname"
                                placeholder="Enter Patner FirstName"
                                value={this.state.p_firstname}
                                onChange={this.changeHandler}
                              />
                            </div>
                          </Col>
                          <Col md="4">
                            <div class="form-group mtb-10">
                              <Label>Partner Last Name</Label>
                              <input
                                type="text"
                                name="p_lastname"
                                placeholder="Enter Patner LastName"
                                value={this.state.p_lastname}
                                onChange={this.changeHandler}
                              />
                            </div>
                          </Col>

                          <Col md="4">
                            <div class="form-group mtb-10">
                              <Label> Partner Date of Birth</Label>
                              <input
                                type="date"
                                name="p_dob"
                                value={this.state.p_dob}
                                onChange={this.changeHandler}
                              />
                            </div>
                          </Col>

                          <Col md="4">
                            <div class="form-group mtb-10">
                              <Label> Partner Time of Birth</Label>
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
                              <Label> Partner Birth Place</Label>
                              <input
                                type="text"
                                name="p_birthPlace"
                                value={this.state.p_birthPlace}
                                onChange={this.changeHandler}
                                placeholder="Enter Partner  Birth Place"
                              />
                            </div>
                          </Col>
                        </>
                      ) : null}
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
                              birthPlace: JSON.stringify(item),
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

                      <Col lg="4" md="4" sm="6" className="my-2 ">
                        <Label>Gender*</Label>
                        <Input
                          id="exampleSelect"
                          type="select"
                          name="gender"
                          required
                          value={this.state.data.gender}
                          onChange={this.changeHandler}
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select Gender
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </Input>
                      </Col>

                      <Col lg="4" md="4" sm="6" className="my-2 ">
                        <Label>Marital Status*</Label>
                        <Input
                          type="select"
                          name="marital_status"
                          required
                          value={this.state.marital_status}
                          onChange={this.changeHandler}
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
                      </Col>
                      <Col lg="4" md="4" sm="6">
                        <div class="form-group mtb-10">
                          <Label>Occupation*</Label>
                          <Input
                            type="select"
                            required
                            name="occupation"
                            value={this.state.data.occupation}
                            onChange={this.changeHandler}
                            defaultValue=""
                          >
                            <option value="" disabled>
                              Select Employed in
                            </option>
                            <option value="Private Sector">
                              Private Sector
                            </option>
                            <option value="Govt Sector">Govt Sector</option>
                            <option value="Business/Self Employed">
                              Business/Self Employed
                            </option>
                            <option value="Civil Services">
                              Civil Services
                            </option>
                            <option value="Defence">Defence</option>
                            <option value="Not Working">Not Working</option>
                            <option value="Student">Student</option>
                          </Input>
                        </div>
                      </Col>
                      <Col lg="4" md="4" sm="6">
                        <div class="form-group mtb-10">
                          <Label>Topic of concern*</Label>
                          <Input
                            type="select"
                            name="topic_of_cnsrn"
                            required
                            value={this.state.data.topic_of_cnsrn}
                            onChange={this.changeHandler}
                            defaultValue=""
                          >
                            <option value="" disabled>
                              Select Topic
                            </option>
                            <option value="Career and Business">
                              Career and Business
                            </option>
                            <option value="Marriage">Marriage</option>
                            <option value="Love and Relationship">
                              Love and Relationship
                            </option>
                            <option value="Wealth and Property">
                              Wealth and Property
                            </option>
                            <option value="Education">Education</option>
                            <option value="Legal Matters">Legal Matters</option>
                            <option value="Child Name Consultation">
                              Child Name Consultation
                            </option>
                            <option value="Business Name Consultation">
                              Business Name Consultation
                            </option>
                            <option value="Gem Stone Consultation">
                              Gem Stone Consultation
                            </option>
                            <option value="Commodity trading consultation">
                              Commodity trading consultation
                            </option>
                            <option value="Match Making">Match making</option>
                            <option value="Birth Time Rectification">
                              Birth Time Rectification
                            </option>
                            <option value="Name Correction Consultation">
                              Name Correction Consultation
                            </option>
                            <option value="Travel Abroad Consulation">
                              Travel Abroad Consulation
                            </option>
                            <option value="Remedy Consultation">
                              Remedy Consultation
                            </option>
                            <option value=" Health Consultation">
                              Health Consultation
                            </option>
                            <option value="Others">Others</option>
                          </Input>
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <Label>Attachment</Label>
                          <Input
                            type="file"
                            onChange={this.onChangeHandler}
                            accept="image/png, image/jpeg,.doc,image/jpg,.pdf"
                          />
                        </div>
                      </Col>

                      <Col md="12" className="mt-3">
                        <Button className="btn btn-warning">
                          Start Chat with {localStorage.getItem("astroname")}
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
export default UserRequestForm;/*  */