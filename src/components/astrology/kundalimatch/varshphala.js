import React, { Component } from "react";
import { Link } from "react-router-dom";
import { navigate } from "react-router-dom";
import { connect } from "react-redux";
import { Country, State, City } from "country-state-city";
import axiosConfig from "../../../axiosConfig";
import {
  Container,
  Row,
  Col,
  Card,
  Input,
  InputGroup,
  Form,
  Button,
} from "reactstrap";
import "../../../assets/scss/astropooja.css";
import LayoutOne from "../../../layouts/LayoutOne";
import astrologinbg from "../../../assets/img/astrologin-bg.jpg";
import MatchSearch from "../MatchSearch";
// import { CloudLightning } from "react-feather";
import { setVarshaPhala } from "../../../redux/actions/varshaphalaAction";
import Select from "react-select";

class varshphala extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthplace: "",
      birthminute: "",
      birthhour: "",
      dateofbirth: "",
      gender: "",
      name: "",
      varshphalaYear: "",
      error: "",
      kundliData: null,
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
      today: null,
    };
  }
  componentDidMount() {
    this.setState({ today: this.getTodayDate() });
  }
  changeHandler = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  dateChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {});
  };

  validateForm = () => {
    const {
      name,
      gender,
      dateofbirth,
      birthhour,
      birthminute,
      selectedCountry,
      selectedState,
      selectedCity,
      varshphalaYear,
    } = this.state;
    const currentYear = new Date().getFullYear();
    let errors = {};

    if (!name) errors.name = "Name is required";
    if (!gender) errors.gender = "Gender is required";
    if (!dateofbirth) errors.dateofbirth = "Date of Birth is required";
    if (!birthhour) errors.birthhour = "Birth Hour is required";
    if (!birthminute) errors.birthminute = "Birth Minute is required";
    if (!selectedCountry) errors.selectedCountry = "Country is required";
    if (!selectedState) errors.selectedState = "State is required";
    if (!selectedCity) errors.selectedCity = "City is required";

    if (!varshphalaYear) {
      errors.varshphalaYear = "Varshphala Year is required";
    } else if (
      !/^\d{4}$/.test(varshphalaYear) ||
      parseInt(varshphalaYear, 10) >= currentYear
    ) {
      errors.varshphalaYear = `Year must be a four-digit number less than ${currentYear}`;
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      const {
        name,
        gender,
        dateofbirth,
        birthhour,
        birthminute,
        selectedCountry,
        selectedState,
        selectedCity,
        varshphalaYear,
      } = this.state;
      const formData = {
        name,
        gender,
        varshphalaYear,
        dateofbirth,
        birthhour,
        birthminute,
        birthplace: {
          city: selectedCity,
          state: selectedState,
          country: selectedCountry,
        },
      };

      this.props.setVarshaPhala(formData); // Dispatch the action
      this.props.history.push("/varshphalreport"); // Navigate to the report page
    }
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  changeHandler1 = (e) => {
    const inputYear = e.target.value;
    let errorMessage = "";

    if (!/^\d{0,4}$/.test(inputYear)) {
      errorMessage = "Please enter a valid year (up to four digits).";
    }

    this.setState({
      varshphalaYear: inputYear,
      error: errorMessage,
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
    const { varshphalaYear, error } = this.state;
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
                    <h1>Free Varshphal - Annual Horoscope</h1>
                    <h3>Get instant & accurate, Varshphal</h3>
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
                <h3>Get Annual Varshphal report absolutely free.</h3>
                <p>
                  Unlock the secrets of your future with our comprehensive
                  Annual Horoscope Varshphal Report, available to you at no
                  cost! This detailed astrological analysis offers a year-long
                  forecast, providing valuable insights into various aspects of
                  your life, including career, finance, health, relationships,
                  and personal growth.
                  <br />
                  <strong>What is the Varshphal Report?</strong>
                  <br />
                  The Varshphal Report, also known as the annual horoscope, is a
                  special astrological reading that focuses on the events and
                  opportunities that await you over the next twelve months.
                  Derived from your birth chart and planetary transits, this
                  report helps you navigate the year with confidence and
                  clarity.
                </p>

                <p>
                  <strong>Why Choose Us?</strong> <br />
                  Our astrological experts utilize the latest techniques and
                  traditional wisdom to craft accurate and insightful Varshphal
                  reports. With years of experience and a commitment to quality,
                  we aim to provide you with a valuable tool for navigating the
                  year ahead. Don't miss out on this opportunity to gain a
                  deeper understanding of your future. Claim your free Annual
                  Horoscope Varshphal Report today and step into the year with
                  confidence and clarity!
                </p>

                <div className="match-bx">
                  <Row>
                    <Col md="8">
                      <h3>Free Varshphal</h3>
                      <form onSubmit={this.handleFormSubmit}>
                        <div className="form-m">
                          <Row>
                            <Col md="12">
                              <label>Name</label>
                              <input
                              className="form-control"
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={this.changeHandler}
                                required
                              />
                            </Col>
                            <Col md="6">
                              <label>Gender</label>
                              <select
                                className="form-control"
                                type="select"
                                name="gender"
                                value={this.state.gender}
                                onChange={this.changeHandler}
                                defaultValue=""
                                required
                              >
                                <option value="" disabled>
                                  --Select--
                                </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </Col>
                            <Col md="6">
                              <label>VarshPhala Year</label>
                              <input
                              className="form-control"
                                type="number"
                                name="varshphalaYear"
                                placeholder="Enter Varshphala Year(Less Then 2024)"
                                value={varshphalaYear}
                                onChange={this.changeHandler1}
                                required
                              />
                              {error && <p style={{ color: "red" }}>{error}</p>}
                            </Col>
                            <Col md="4">
                              <label>Date of Birth</label>
                              <Input
                                className="form-control"
                                name="dateofbirth"
                                type="date"
                                value={this.state.dateofbirth}
                                onChange={this.dateChangeHandler}
                                max={this.state.today}
                                style={{ height: "38px" }} // Adjust the width as needed
                                required
                              />
                            </Col>
                            <Col md="4">
                              <label>Birth Hours</label>
                              <select
                                className="form-control"
                                onChange={this.changeHandler}
                                name="birthhour"
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
                            <Col md="4">
                              <label>Birth Minute</label>
                              <select
                                className="form-control"
                                onChange={this.changeHandler}
                                name="birthminute"
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
                                {/* <option>60</option> */}
                              </select>
                            </Col>
                            <Col md="4">
                              <label>Country</label>
                              <Select
                                required
                                options={Country.getAllCountries()}
                                getOptionLabel={(options) => {
                                  return options["name"];
                                }}
                                getOptionValue={(options) => {
                                  return options["name"];
                                }}
                                defaultInputValue=""
                                value={this.state.selectedCountry}
                                onChange={(item) => {
                                  //setSelectedCountry(item);
                                  this.setState({ selectedCountry: item });
                                }}
                              />
                            </Col>{" "}
                            <Col md="4">
                              <label>State</label>
                              <Select
                                required
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
                              />
                            </Col>
                            <Col md="4">
                              <label>City</label>
                              <Select
                                required
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
                                  this.setState({ selectedCity: item });
                                }}
                              />
                            </Col>
                          </Row>
                        </div>
                        <Button
                          className="mt-2"
                          type="submit"
                          
                        >
                          Get VarshPhala
                        </Button>
                      </form>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </LayoutOne>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setVarshaPhala: (formData) => dispatch(setVarshaPhala(formData)),
});

export default connect(null, mapDispatchToProps)(varshphala);
