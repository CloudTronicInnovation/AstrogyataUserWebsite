import React, { Component } from 'react';
import { Container, Row, Col, Card, Input, Form, Button, Table } from "reactstrap";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import "../../assets/scss/astropooja.css";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
class LalKitabPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data1: false,
            day: "",
            month: "",
            year: "",
            hour: "",
            min: "",
            lat: "",
            lon: "",
            tzone: "",
            data: [],
            state: [],
            city: [],
            country: [],
            selectedCountry: null,
            selectedState: null,
            selectedCity: null,
            timezone: null,
            latitude: "",
            longitude: "",
        };
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleInputChanged(event) {
        this.setState({
            searchQuery: event.target.value,
        });
        axiosConfig
            .post(`/user/geo_detail`, {
                place: this.state.searchQuery,
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        console.log(this.state.searchQuery);
    }

    changeCountry = item => {
        this.setState({ selectedCountry: item });

        axiosConfig
            .post(`/user/time_zone`, {
                country_code: item?.timezones[0].zoneName,
            })
            .then(response => {
                this.setState({ timezone: response?.data?.data?.timezone });
            })
            .catch(error => {
                console.log(error);
            });
    };

    changeCity = item => {
        console.log("item", item);
        this.setState({
            submitPlaceHandler: item,
        });

        axiosConfig
            .post(`/user/geo_detail`, {
                place: item?.name,
            })
            .then(response => {
                this.setState({
                    latitude: response?.data?.data?.geonames[0].latitude,
                    longitude: response?.data?.data?.geonames[0].longitude,
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    submitCountryHandler = e => {
        e.preventDefault();

        let payload = {
            country_code: this.state.country_code,
        };
        console.log("shgdjhg", payload);
        axiosConfig
            .post(`/user/time_zone`, payload)
            .then(response => {
                this.setState({ data: response.data });
                console.log("country_code", response.data.timezone);
                swal("Success!", "Submitted SuccessFull!", "success");
            })
            .catch(error => {
                swal("Error!", "You clicked the button!", "error");
                console.log(error);
            });
    };
    submitPlaceHandler = e => {
        e.preventDefault();
        let payload = {
            // data: this.state.data
            place: this.state.place,
        };
        console.log("shgdjhg", payload);
        axiosConfig
            .post(`/user/geo_detail`, payload)
            .then(response => {
                this.setState({ data: response.data });
                console.log("place", response.data.geonames?.place_name);
                swal("Success!", "Submitted SuccessFull!", "success");
            })
            .catch(error => {
                swal("Error!", "You clicked the button!", "error");
                console.log(error);
            });
    };

    submitHandler = e => {

        e.preventDefault();
        let payload = {
            day: this.state.day,
            month: this.state.month,
            year: this.state.year,
            hour: this.state.hour,
            min: this.state.min,
            lat: this.state.latitude,
            lon: this.state.longitude,
            tzone: this.state.timezone,
        };
        console.log("shgdjhg", payload);
        axiosConfig
            .post(`/user/lalkitab_horoscope`, payload)
            .then(response => {
                this.setState({ data1: true })

                console.log("data1", response.data.data);
                this.setState({
                    data: response.data.data,
                });
                console.log("data11", response.data.data);
                // swal("Success!", "Submitted SuccessFull!", "success");
                // this.props.history.push("/lalKitabPage");
                // window.location.reload("/lalKitab");
            })
            .catch(error => {
                swal("Error!", "You clicked the button!", "error");
                console.log(error);
            });
    };
    render() {




        const { data } = this.state;
        console.log("firstResponse", data)
        if (this.state.data1 === true) {
            console.log("first", this.state.data1)

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
                                            <h1>Lal Kitab</h1>
                                            <h3>Get instant & accurate, LalKitab</h3>
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
                                        Lal Kitab Online - Get Your Detailed Birth Chart with
                                        Predictions
                                    </h3>
                                    <p>
                                        Lal Kitab is a remarkable branch of Vedic astrology. Collection of the 5 books, written during the period of 1939-1952 is called Lal Kitab. Written in ancient Urdu language, first time in the history of astrology, Lal Kitab introduced a new style of horoscope analysis with quick and affordable remedies. Authorship of the books seems to be disputed. However, finding by our research community shows that the books were written by Pt. Roop Chand Joshi.
                                    </p>

                                    <div className="match-bx">
                                        <div>
                                            <Col md="12">
                                                <h3>Saved LalKitab </h3>
                                                {/* <div className="form-m"> */}
                                                <Table striped className="">
                                                    <thead>
                                                        <tr>
                                                            <th>Sign </th>
                                                            <th>Sign Name </th>
                                                            <th>Planet</th>
                                                            <th>Planet Degree </th>
                                                            <th>Planet Small </th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data.map(data => (


                                                            <tr>
                                                                <th>{data.sign}</th>
                                                                <td>{data.sign_name}</td>
                                                                <td>
                                                                    {data.planet}
                                                                </td>
                                                                <td>{data.planet_degree}</td>
                                                                <td>
                                                                    {data.planet_small}</td>

                                                            </tr>



                                                        ))}
                                                    </tbody>
                                                </Table>


                                                {/* </div> */}
                                            </Col>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </LayoutOne>
            );
        } else {

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
                                            <h1>Lal Kitab</h1>
                                            <h3>Get instant & accurate, LalKitab</h3>
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
                                        Lal Kitab Online - Get Your Detailed Birth Chart with
                                        Predictions
                                    </h3>
                                    <p>
                                        Lal Kitab is a remarkable branch of Vedic astrology. Collection of the 5 books, written during the period of 1939-1952 is called Lal Kitab. Written in ancient Urdu language, first time in the history of astrology, Lal Kitab introduced a new style of horoscope analysis with quick and affordable remedies. Authorship of the books seems to be disputed. However, finding by our research community shows that the books were written by Pt. Roop Chand Joshi.
                                    </p>

                                    <div className="match-bx">
                                        <div>
                                            <Col md="12">
                                                <h3> LAL KITAB</h3>
                                                <Form>
                                                    {/* <Form onSubmit={this.submitHandler}> */}
                                                    <div className="form-m">
                                                        <Row>
                                                            <Col md="2">
                                                                <label>Birth Day</label>
                                                                <Input
                                                                    className="form-control"
                                                                    type="select"
                                                                    name="day"
                                                                    value={this.state.day}
                                                                    onChange={this.changeHandler}
                                                                >
                                                                    <option>--Select--</option>
                                                                    <option>0</option>
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
                                                                    <option>25</option>
                                                                    <option>26</option>
                                                                    <option>27</option>
                                                                    <option>28</option>
                                                                    <option>29</option>
                                                                    <option>30</option>
                                                                    <option>31</option>
                                                                </Input>
                                                            </Col>
                                                            <Col md="2">
                                                                <label>Birth Month</label>
                                                                <Input
                                                                    className="form-control"
                                                                    type="select"
                                                                    name="month"
                                                                    value={this.state.month}
                                                                    onChange={this.changeHandler}
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
                                                                </Input>
                                                            </Col>
                                                            <Col md="2">
                                                                <label>Birth Year</label>
                                                                <Input
                                                                    className="form-control"
                                                                    type="select"
                                                                    name="year"
                                                                    value={this.state.year}
                                                                    onChange={this.changeHandler}
                                                                >
                                                                    <option>--Select--</option>
                                                                    <option value="1942">1942</option>
                                                                    <option value="1943">1943</option>
                                                                    <option value="1944">1944</option>
                                                                    <option value="1945">1945</option>
                                                                    <option value="1946">1946</option>
                                                                    <option value="1947">1947</option>
                                                                    <option value="1948">1948</option>
                                                                    <option value="1949">1949</option>
                                                                    <option value="1950">1950</option>
                                                                    <option value="1951">1951</option>
                                                                    <option value="1952">1952</option>
                                                                    <option value="1953">1953</option>
                                                                    <option value="1954">1954</option>
                                                                    <option value="1955">1955</option>
                                                                    <option value="1956">1956</option>
                                                                    <option value="1957">1957</option>
                                                                    <option value="1958">1958</option>
                                                                    <option value="1959">1959</option>
                                                                    <option value="1960">1960</option>
                                                                    <option value="1961">1961</option>
                                                                    <option value="1962">1962</option>
                                                                    <option value="1963">1963</option>
                                                                    <option value="1964">1964</option>
                                                                    <option value="1965">1965</option>
                                                                    <option value="1966">1966</option>
                                                                    <option value="1967">1967</option>
                                                                    <option value="1968">1968</option>
                                                                    <option value="1969">1969</option>
                                                                    <option value="1970">1970</option>
                                                                    <option value="1971">1971</option>
                                                                    <option value="1972">1972</option>
                                                                    <option value="1973">1973</option>
                                                                    <option value="1974">1974</option>
                                                                    <option value="1975">1975</option>
                                                                    <option value="1976">1976</option>
                                                                    <option value="1977">1977</option>
                                                                    <option value="1978">1978</option>
                                                                    <option value="1979">1979</option>
                                                                    <option value="1980">1980</option>
                                                                    <option value="1981">1981</option>
                                                                    <option value="1982">1982</option>
                                                                    <option value="1983">1983</option>
                                                                    <option value="1984">1984</option>
                                                                    <option value="1985">1985</option>
                                                                    <option value="1986">1986</option>
                                                                    <option value="1987">1987</option>
                                                                    <option value="1988">1988</option>
                                                                    <option value="1989">1989</option>
                                                                    <option value="1990">1990</option>
                                                                    <option value="1991">1991</option>
                                                                    <option value="1992">1992</option>
                                                                    <option value="1993">1993</option>
                                                                    <option value="1994">1994</option>
                                                                    <option value="1995">1995</option>
                                                                    <option value="1996">1996</option>
                                                                    <option value="1997">1997</option>
                                                                    <option value="1998">1998</option>
                                                                    <option value="1999">1999</option>
                                                                    <option value="2000">2000</option>
                                                                    <option value="2001">2001</option>
                                                                    <option value="2002">2002</option>
                                                                    <option value="2003">2003</option>
                                                                    <option value="2004">2004</option>
                                                                    <option value="2005">2005</option>
                                                                    <option value="2006">2006</option>
                                                                    <option value="2007">2007</option>
                                                                    <option value="2008">2008</option>
                                                                    <option value="2009">2009</option>
                                                                    <option value="2010">2010</option>
                                                                    <option value="2011">2011</option>
                                                                    <option value="2011">2012</option>
                                                                    <option value="2011">2013</option>
                                                                    <option value="2011">2014</option>
                                                                    <option value="2011">2015</option>
                                                                    <option value="2011">2016</option>
                                                                    <option value="2011">2017</option>
                                                                    <option value="2011">2018</option>
                                                                    <option value="2011">2019</option>
                                                                    <option value="2011">2020</option>
                                                                    <option value="2011">2021</option>
                                                                    <option value="2011">2022</option>
                                                                    <option value="2011">2023</option>
                                                                    <option value="2011">2024</option>
                                                                    <option value="2011">2025</option>
                                                                    <option value="2011">2026</option>
                                                                    <option value="2011">2021</option>
                                                                    <option value="2011">2027</option>
                                                                    <option value="2011">2028</option>
                                                                    <option value="2011">2029</option>
                                                                    <option value="2011">2030</option>
                                                                </Input>
                                                            </Col>
                                                            <Col md="2">
                                                                <label>Birth Hour</label>
                                                                <Input
                                                                    className="form-control"
                                                                    type="select"
                                                                    name="hour"
                                                                    value={this.state.hour}
                                                                    onChange={this.changeHandler}
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
                                                                </Input>
                                                            </Col>
                                                            <Col md="2">
                                                                <label>Birth Minute</label>
                                                                <Input
                                                                    className="form-control"
                                                                    type="select"
                                                                    name="min"
                                                                    value={this.state.min}
                                                                    onChange={this.changeHandler}
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
                                                                    <option>59</option> <option>60</option>
                                                                </Input>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="4">
                                                                <label>Country</label>
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
                                                                        this.changeCountry(item);
                                                                    }}
                                                                />
                                                            </Col>

                                                            <Col md="4">
                                                                <label>State</label>
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

                                                            <Col md="4">
                                                                <label>City</label>
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
                                                                    value={this.state.submitPlaceHandler}
                                                                    onChange={item => {
                                                                        this.changeCity(item);
                                                                    }}
                                                                />
                                                            </Col>

                                                            <Col md="4">
                                                                <label>Birth Place Latitude</label>
                                                                <Input
                                                                    className="form-control"
                                                                    placeholder="00.00"
                                                                    maxLength={7}
                                                                    type="text"
                                                                    name="latitude"
                                                                    value={this.state.latitude}
                                                                    onChange={this.changeHandler}
                                                                />
                                                            </Col>
                                                            <Col md="4">
                                                                <label>Birth Place Longitude</label>
                                                                <Input
                                                                    className="form-control"
                                                                    placeholder="00.000"
                                                                    maxLength={7}
                                                                    type="text"
                                                                    name="longitude"
                                                                    value={this.state.longitude}
                                                                    onChange={this.changeHandler}
                                                                />
                                                            </Col>
                                                            <Col md="4">
                                                                <label>Birth Place Time Zone</label>
                                                                <input
                                                                    className="form-control"
                                                                    type="text"
                                                                    placeholder="00.00"
                                                                    maxLength={5}
                                                                    name="timezone"
                                                                    value={this.state.timezone}
                                                                    onChange={this.changeHandler}
                                                                />
                                                            </Col>
                                                        </Row>
                                                        {/* <button className="btn btn-primary" onClick={() => this.setState({ showContent: true })}>Show Content</button> */}
                                                        <Button className="btn btn-primary" onClick={(e) => {
                                                            this.submitHandler(e)
                                                            // this.setState({ data1: true })
                                                        }}
                                                            type='submit' >submit</Button>
                                                    </div>
                                                </Form>
                                            </Col>

                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </LayoutOne>
            );
        }

    }
}
export default LalKitabPage;