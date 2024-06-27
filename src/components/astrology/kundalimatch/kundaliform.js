import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Input, Form, Button } from "reactstrap";
import "../../../assets/scss/astropooja.css";
import LayoutOne from "../../../layouts/LayoutOne";
import MatchSearch from "../MatchSearch";
import axiosConfig from "../../../axiosConfig";
import astrologinbg from "../../../assets/img/astrologin-bg.jpg";
import male from "../../../assets/img/male1.png";
import female from "../../../assets/img/woman1.png";
import { connect } from "react-redux";
import { updateFormData } from "../../../redux/actions/kundaliFormActions";
import swal from "sweetalert";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import moment from 'moment-timezone';
// import { Link } from "react-scroll";

class KundaliForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      dateOfBirth1: "",
      m_day: "",
      m_mon: "",
      m_year: "",
      m_hour: "",
      m_min: "",
      Name1: "",
      Name2: "",
      dateOfBirth2: "",
      f_day: "",
      f_mon: "",
      f_year: "",
      f_hour: "",
      f_min: "",
      timezone: "",
      timezonef: "",
      matchmakingreport: {},
      data: {},
      place: "",
      searchQuery: "",
      state: [],
      city: [],
      country: [],
      state1: [],
      city1: [],
      country1: [],
      selectedCountry: null,
      selectedCountry1: null,
      selectedState: null,
      selectedState1: null,
      selectedCity: null,
      timezone: null,
      m_latitude: null,
      m_longitude: null,
      f_latitude: null,
      f_longitude: null,
      selectedCity1: null,
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  getTimezone(lat, lon) {
    // Use moment-timezone to get the timezone from latitude and longitude
    return moment.tz.guess(true); // guess the timezone
  }


  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value,
    });
    axiosConfig
      .post(`/user/geo_detail`, {
        place: this.state.searchQuery,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.state.searchQuery);
  }
  submitPlaceHandler = (e) => {
    e.preventDefault();
    let payload = {
      // data: this.state.data
      place: this.state.place,
    };
    console.log("shgdjhg", payload);
    axiosConfig
      .post(`/user/geo_detail`, payload)
      .then((response) => {
        this.setState({ data: response.data });
        console.log("place", response.data.geonames?.place_name);

        swal("Success!", "Submitted SuccessFull!", "success");
      })

      .catch((error) => {
        // swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };

  // Date Of Birth Validation
  getTodayDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    let obj = {
      m_day: id,
    };

    const countries = Country.getAllCountries();
    const india = countries.find((country) => country.name === "India");
    this.setState({ selectedCountry: india });
    this.setState({ selectedCountry1: india });

    // Date Of Birth Validation
    this.setState({ today: this.getTodayDate() });
  }

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));

    if (name === "dateOfBirth1" || name === "dateOfBirth2") {
      const currentDate = new Date();
      const selectedDate = new Date(value);
      if (selectedDate >= currentDate) {
        this.setState({
          dateOfBirthError: "Date of Birth cannot be in the future",
        });
      } else {
        const [year, month, day] = value.split("-");
        if (name === "dateOfBirth1") {
          this.setState((prevState) => ({
            formData: {
              ...prevState.formData,
              m_day: day,
              m_month: month,
              m_year: year,
            },
            dateOfBirthError: "",
          }));
        } else if (name === "dateOfBirth2") {
          this.setState((prevState) => ({
            formData: {
              ...prevState.formData,
              f_day: day,
              f_month: month,
              f_year: year,
            },
            dateOfBirthError: "",
          }));
        }
      }
    }
    this.setState({ [name]: value });
  };

  handleshowmatch = () => {
    let obj = {
      m_day: this.state.m_day,
      m_month: this.state.m_month,
      m_year: this.state.m_year,
      m_hour: this.state.m_hour,
      m_min: this.state.m_min,
      m_lat: this.state.selectedCity?.latitude,
      m_lon: this.state.selectedCity?.longitude,
      m_tzone: this.state.timezone,
      f_day: this.state.f_day,
      f_month: this.state.f_month,
      f_year: this.state.f_year,
      f_hour: this.state.f_hour,
      f_min: this.state.f_min,
      f_lat: this.state.selectedCity1?.latitude,
      f_lon: this.state.selectedCity1?.longitude,
      f_tzone: this.state.timezonef,
    };
    // console.log(obj);
    axiosConfig
      .post(`/user/match_making_report`, obj)
      .then((response) => {
        console.log("matchmakingreport", response.data.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push({
          pathname: "/kundalimatchlist",
          state: {
            data: response.data.data,
            male: this.state.Name1,
            female: this.state.Name2,
          },
        });
      })
      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const {
      selectedCountry,
      selectedState,
      selectedCity,
      selectedCountry1,
      selectedState1,
      selectedCity1,
      timezone,
      m_latitude,
      m_longitude,
      f_latitude,
      f_longitude,
    } = this.state;

    const formData = {
      ...this.state.formData,
      selectedCountry: selectedCountry?.name || "",
      selectedCountry1: selectedCountry1?.name || "",
      selectedState: selectedState?.name || "",
      selectedState1: selectedState1?.name || "",
      selectedCity: selectedCity?.name || "",
      selectedCity1: selectedCity1?.name || "",
      m_timezone: timezone,
      m_latitude: m_latitude,
      m_longitude: m_longitude,
      f_latitude: f_latitude,
      f_longitude: f_longitude,
    };

    this.props.updateFormData(formData); // Dispatch action to update form data in Redux store

    this.props.history.push({
      pathname: "/kundalimatchlist",
      state: { formData: this.state },
    });
  };

  render() {
    const { matchmakingreport } = this.state;

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
                    <h1>Kundli Matching</h1>
                    <h3>Find your right one, through matchmaking</h3>
                    <h3>{matchmakingreport?.ashtakoota?.received_points}</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <Container>
          <Row>
            <Col md="12">
              <Card className="mb-50 pt-d">
                <h3>
                  Free Match Making - Kundli Milan & Gun Milan to Check
                  Possibilities of Marriage
                </h3>
                <p>
                  Kundli milan or kundali matching is an important consideration
                  to make when you decide to get married. Kundli matching, also
                  called Gun matching or Horoscope matching is the first step
                  towards marriage when the parents decide to match the kundlis
                  of the girl and the boy to ensure the couple is compatible.The
                  gun milan exercise has been a part of India's culture for
                  1000s of years now and continues to be so. So, if you too are
                  the lucky one who is planning to get married, and hence
                  looking for a horoscope matching with someone you have started
                  liking, then Astrotalk can help you. The Kundali milan online
                  software on Astrotalk has been prepared by the top astrologers
                  of Astrotalk. The software caters to the free Kundli milan
                  needs of the individuals and gives you insights; such as the
                  number of guns matching for the girl and the boy, what they
                  are compatible in, what their future would be like if they get
                  married, and so much more. The online gun milan software can
                  save you time and the hassle of going out to look for an
                  astrologer to get the gun milan exercise done. Also, in case
                  you have any doubts about the free kundali milan offered by
                  Astrotalk, you can always connect with the astrologers on
                  board and get those doubts sorted for yourself.
                </p>
                <div className="match-bx">
                  <form onSubmit={this.submitHandler}>
                    <Row>
                      <Col md="12">
                        <h3>Fill Up Partner's Detail</h3>
                        <Row>
                          <Col md="6">
                            <div className="form-m">
                              <Row>
                                <Col md="12">
                                  <label>
                                    <img src={male} alt="Example" height={40} />
                                    Name
                                  </label>
                                  <input
                                    class="form-control "
                                    type="text"
                                    name="Name1"
                                    placeholder="Enter First Name"
                                    value={this.state.Name1}                                  
                                    onChange={this.changeHandler}
                                    required
                                  />
                                </Col>
                                <Col md="6">
                                  <label>Date of Birth</label>
                                  <Input
                                    className="form-control"
                                    name="dateOfBirth1"
                                    type="date"
                                    value={this.state.dateOfBirth1}
                                    onChange={this.changeHandler}
                                    max={this.state.today} // Set the maximum selectable date
                                    required
                                  />
                                  {this.state.dateOfBirthError && (
                                    <span style={{ color: "red" }}>
                                      {this.state.dateOfBirthError}
                                    </span>
                                  )}
                                </Col>

                                <Col md="6">
                                  <label>Birth Hour</label>
                                  <select
                                    className="form-control"
                                    name="m_hour"
                                    type="select"
                                    value={this.state.m_hour}
                                    onChange={this.changeHandler}
                                    required
                                  >
                                    <option>--Select--</option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                    <option>05</option>
                                    <option>06</option>
                                    <option>07</option>
                                    <option>08</option>
                                    <option>09</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>00</option>
                                  </select>
                                </Col>
                                <Col md="6">
                                  <label>Birth Minute</label>
                                  <select
                                    className="form-control"
                                    name="m_min"
                                    value={this.state.m_min}
                                    onChange={this.changeHandler}
                                    required
                                  >
                                    <option>--Select--</option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                    <option>05</option>
                                    <option>06</option>
                                    <option>07</option>
                                    <option>08</option>
                                    <option>09</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>26</option>
                                    <option>27</option>
                                    <option>28</option>
                                    <option>29</option>
                                    <option>30</option>
                                    <option>31</option>
                                    <option>32</option>
                                    <option>33</option>
                                    <option>34</option>
                                    <option>35</option>
                                    <option>36</option>
                                    <option>37</option>
                                    <option>38</option>
                                    <option>39</option>
                                    <option>40</option>
                                    <option>41</option>
                                    <option>42</option>
                                    <option>43</option>
                                    <option>44</option>
                                    <option>45</option>
                                    <option>46</option>
                                    <option>47</option>
                                    <option>48</option>
                                    <option>49</option>
                                    <option>50</option>
                                    <option>51</option>
                                    <option>52</option>
                                    <option>53</option>
                                    <option>54</option>
                                    <option>55</option>
                                    <option>56</option>
                                    <option>57</option>
                                    <option>58</option>
                                    <option>59</option>
                                    <option>00</option>
                                  </select>
                                </Col>
                                <Col md="6">
                                  <label>Gender</label>
                                  <select
                                    className="form-control"
                                    name="gender"
                                    value={this.state.gender}
                                    onChange={this.changeHandler}
                                    required
                                  >
                                    <option value="">--Select--</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                  </select>
                                </Col>
                                <Col md="6">
                                  <label>Country</label>
                                  <Select
                                    className="form-control"
                                    name="selectedCountry"
                                    options={Country.getAllCountries()}
                                    getOptionLabel={(options) => {
                                      return options["name"];
                                    }}
                                    getOptionValue={(options) => {
                                      return options["name"];
                                    }}
                                    value={this.state.selectedCountry}
                                    onChange={(item) => {
                                      //setSelectedCountry(item);
                                      this.setState({ selectedCountry: item });
                                    }}
                                    required
                                  />
                                </Col>

                                <Col md="6">
                                  <label>State</label>
                                  <Select
                                    className="form-control"
                                    name="selectedState"
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
                                      //setSelectedState(item);
                                      this.setState({ selectedState: item });
                                    }}
                                    required
                                  />
                                </Col>
                                <Col md="6">
                                  <label>City</label>
                                  <Select
                                    className="form-control"
                                    name="selectedCity"
                                    options={City.getCitiesOfState(
                                      this.state.selectedState?.countryCode,
                                      this.state.selectedState?.isoCode
                                    )}
                                    getOptionLabel={(options) => options.name}
                                    getOptionValue={(options) => options.name}
                                    value={this.state.selectedCity}
                                    onChange={(item) => {
                                      const latitude = item?.latitude;
            const longitude = item?.longitude;
            const timezone = this.getTimezone(latitude, longitude);

                                      // Set the selected city
                                      this.setState({
                                        selectedCity: item,
                                        m_latitude: item?.latitude,
                                        m_longitude: item?.longitude,
                                        timezone:timezone

                                      });
                                      // Make an API call to get the timezone
                                      axiosConfig
                                        .post(`/user/time_zone`, {
                                          country_code: item?.countryCode,
                                        })
                                        .then((response) => {
                                          this.setState({
                                            timezone:
                                              response?.data?.data?.timezone,
                                          });
                                        })
                                        .catch((error) => {
                                          console.log(error);
                                        });
                                    }}
                                    required
                                  />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col md="6">
                            <div className="form-m">
                              <Row>
                                <Col md="12">
                                  <label>
                                    <img
                                      src={female}
                                      alt="Example"
                                      height={40}
                                    />
                                    Name
                                  </label>
                                  <input
                                    class="form-control "
                                    type="text"
                                    name="Name2"
                                    value={this.state.Name2}
                                    onChange={this.changeHandler}
                                    placeholder="Enter First Name"
                                    required
                                  />
                                </Col>
                                <Col md="6">
                                  <label>Date of Birth</label>
                                  <Input
                                    className="form-control"
                                    name="dateOfBirth2"
                                    type="date"
                                    value={this.state.dateOfBirth2}
                                    onChange={this.changeHandler}
                                    max={this.state.today} // Set the maximum selectable date
                                    required
                                  />
                                  {this.state.dateOfBirthError && (
                                    <span style={{ color: "red" }}>
                                      {this.state.dateOfBirthError}
                                    </span>
                                  )}
                                </Col>
                                <Col md="6">
                                  <label>Birth Hour</label>
                                  <select
                                    className="form-control"
                                    name="f_hour"
                                    type="select"
                                    value={this.state.f_hour}
                                    onChange={this.changeHandler}
                                    required
                                  >
                                    <option>--Select--</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                  </select>
                                </Col>
                                <Col md="6">
                                  <label>Birth Minute</label>
                                  <select
                                    className="form-control"
                                    name="f_min"
                                    value={this.state.f_min}
                                    onChange={this.changeHandler}
                                    required
                                  >
                                    <option>--Select--</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>26</option>
                                    <option>27</option>
                                    <option>28</option>
                                    <option>29</option>
                                    <option>30</option>
                                    <option>31</option>
                                    <option>32</option>
                                    <option>33</option>
                                    <option>34</option>
                                    <option>35</option>
                                    <option>36</option>
                                    <option>37</option>
                                    <option>38</option>
                                    <option>39</option>
                                    <option>40</option>
                                    <option>41</option>
                                    <option>42</option>
                                    <option>43</option>
                                    <option>44</option>
                                    <option>45</option>
                                    <option>46</option>
                                    <option>47</option>
                                    <option>48</option>
                                    <option>49</option>
                                    <option>50</option>
                                    <option>51</option>
                                    <option>52</option>
                                    <option>53</option>
                                    <option>54</option>
                                    <option>55</option>
                                    <option>56</option>
                                    <option>57</option>
                                    <option>58</option>
                                    <option>59</option>
                                    <option>00</option>
                                  </select>
                                </Col>
                                <Col md="6">
                                  <label>Gender</label>
                                  <select
                                    className="form-control"
                                    name="gender2"
                                    value={this.state.gender2}
                                    onChange={this.changeHandler}
                                    required
                                  >
                                    <option value="">--Select--</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                  </select>
                                </Col>

                                <Col md="6">
                                  <label>Country</label>
                                  <Select
                                    className="form-control"
                                    name="selectedCountry1"
                                    options={Country.getAllCountries()}
                                    getOptionLabel={(options) => {
                                      return options["name"];
                                    }}
                                    getOptionValue={(options) => {
                                      return options["name"];
                                    }}
                                    value={this.state.selectedCountry1}
                                    onChange={(item) => {
                                      this.setState({ selectedCountry1: item });
                                    }}
                                    required
                                  />
                                </Col>
                                <Col md="6">
                                  <label>State</label>
                                  <Select
                                    className="form-control"
                                    name="selectedState1"
                                    options={State?.getStatesOfCountry(
                                      this.state.selectedCountry1?.isoCode
                                    )}
                                    getOptionLabel={(options) => {
                                      return options["name"];
                                    }}
                                    getOptionValue={(options) => {
                                      return options["name"];
                                    }}
                                    value={this.state.selectedState1}
                                    onChange={(item) => {
                                      //setSelectedState(item);
                                      this.setState({ selectedState1: item });
                                    }}
                                    required
                                  />
                                </Col>
                                <Col md="6">
                                  <label>City</label>
                                  <Select
                                    className="form-control"
                                    name="selectedCity1"
                                    options={City.getCitiesOfState(
                                      this.state.selectedState1?.countryCode,
                                      this.state.selectedState1?.isoCode
                                    )}
                                    getOptionLabel={(options) => options.name}
                                    getOptionValue={(options) => options.name}
                                    value={this.state.selectedCity1}
                                    onChange={(item) => {
                                      // Set the selected city
                                      this.setState({
                                        selectedCity1: item,
                                        f_latitude: item?.latitude,
                                        f_longitude: item?.longitude,
                                      });
                                      // Make an API call to get the timezone
                                      axiosConfig
                                        .post(`/user/time_zone`, {
                                          country_code: item?.countryCode,
                                        })
                                        .then((response) => {
                                          this.setState({
                                            timezonef:
                                              response?.data?.data?.timezone,
                                          });
                                        })
                                        .catch((error) => {
                                          console.log(error);
                                        });
                                    }}
                                    required
                                  />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <div className="mt-2">
                      {/* <Link
                        to={{
                          pathname: "/kundalimatchlist",
                          state: { formData: this.state }, // Pass form data as state
                        }}
                      >                     
                        <Button className="mt-25">Horoscope Match</Button>
                      </Link> */}
                      <Button type="submit" className="mt-25">
                        Horoscope Match
                      </Button>
                    </div>

                    <Row> </Row>
                  </form>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </LayoutOne>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateFormData: (formData) => dispatch(updateFormData(formData)),
  };
};

export default connect(null, mapDispatchToProps)(KundaliForm);
