import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { panchanURL } from "../../../axiosConfig";
import { PANCHANG_KEY } from "../../../panchangCredetials";
import Convert from "convert-svg-react";
import { Container, Row, Col, TabContent, TabPane } from "reactstrap";
import Table from "react-bootstrap/Table";
import "../../../assets/scss/astropooja.css";
import LayoutOne from "../../../layouts/LayoutOne";
import astrologinbg from "../../../assets/img/astrologin-bg.jpg";
import { useSelector } from "react-redux";
import AshtvargaTables from "./ashtvargatables";

const VarshphalaReport = (props) => {
  const [activelink, setActiveLink] = useState("0");
  const [basicDetails, setBasicDetails] = useState([]);
  const [basicPanchang, setBasicPanchang] = useState(null);
  const [varshaphalMuddaDasha, setVarshaphalMuddaDasha] = useState(null);
  const [varshaphalPlanets, setVarshaphalPlanets] = useState(null);
  const [sahamPoints, setSahamPoints] = useState(null);
  const [panchavargeeyaBala, setPanchavargeeyaBala] = useState(null);
  const [reqData, setReqData] = useState();
  const [varshphalaYear, setVarshphalaYear] = useState("");
  const [error, setError] = useState(null);
  const { varshphala } = props;
  // console.log(varshphala);

  useEffect(() => {
    setBasicDetails(varshphala);
    if (varshphala != null) fetchVarshPhala();
  }, [varshphala]);

  const fetchVarshPhala = () => {
    const { day, month, year } = getDayMonthYear(
      varshphala.varshPhala.dateofbirth
    );
    const adjustedYear = year > 2000 ? 2000 : year;
    const reqVarshPhalaData = {
      day: day,
      month: month,
      year: adjustedYear,
      hour: varshphala.varshPhala.birthhour,
      min: varshphala.varshPhala.birthminute,
      lat: varshphala.varshPhala.birthplace.city.latitude,
      lon: varshphala.varshPhala.birthplace.city.longitude,
      tzone: "5.5", // default timezone
      varshaphal_year: varshphala.varshPhala.varshphalaYear,
    };

    const postRequest = (url) =>
      panchanURL.post(url, reqVarshPhalaData, {
        headers: {
          Authorization: "Basic " + PANCHANG_KEY,
        },
      });
    const requests = [postRequest(`/v1/basic_panchang`)];
    Promise.all(requests)
      .then(([panchangRes]) => {
        // console.log('Panchang Response:', panchangRes);
        setBasicPanchang(panchangRes.data);
        setReqData(reqVarshPhalaData);
      })
      .catch((err) => {
        setBasicPanchang({});
        console.log(err);
      });
  };

  const fetchVarshaphalMuddaDasha = () => {
    panchanURL
      .post("/v1/varshaphal_mudda_dasha", reqData, {
        headers: {
          Authorization: "Basic " + PANCHANG_KEY,
          //"Content-Type": "application/json"
        },
      })
      .then((res) => {
        // console.log("Response:", res.data);
        setVarshaphalMuddaDasha(res.data);
      })
      .catch((err) => {
        setVarshaphalMuddaDasha({});
        console.log(err);
      });
  };

  const fetchPanchavargeeyaBala = () => {
    panchanURL
      .post("/v1/varshaphal_panchavargeeya_bala", reqData, {
        headers: {
          Authorization: "Basic " + PANCHANG_KEY,
          //"Content-Type": "application/json"
        },
      })
      .then((res) => {
        // console.log("Response:", res.data);
        setPanchavargeeyaBala(res.data);
      })
      .catch((err) => {
        setPanchavargeeyaBala({});
        console.log(err);
      });
  };

  const balaTypes = [
    { label: "Kshetra Bala", values: panchavargeeyaBala?.kshetra_bala || [] },
    { label: "Uccha Bala", values: panchavargeeyaBala?.uccha_bala || [] },
    { label: "Hadda Bala", values: panchavargeeyaBala?.hadda_bala || [] },
    { label: "Drekkana Bala", values: panchavargeeyaBala?.drekkana_bala || [] },
    {
      label: "Navmansha Bala",
      values: panchavargeeyaBala?.navmansha_bala || [],
    },
    { label: "Total Bala", values: panchavargeeyaBala?.total_bala || [] },
    { label: "Final Bala", values: panchavargeeyaBala?.final_bala || [] },
  ];


  const fetchVarshaphalPlanets = () => {
    panchanURL
      .post("/v1/varshaphal_planets", reqData, {
        headers: {
          Authorization: "Basic " + PANCHANG_KEY,
        },
      })
      .then((res) => {
        // console.log("Response:", res.data);
        setVarshaphalPlanets(res.data);
      })
      .catch((err) => {
        setVarshaphalPlanets({});
        console.log(err);
      });
  };

  const fetchSahamPoints = () => {
    panchanURL
      .post("/v1/varshaphal_saham_points", reqData, {
        headers: {
          Authorization: "Basic " + PANCHANG_KEY,
        },
      })
      .then((res) => {
        // console.log("Response:", res.data);
        setSahamPoints(res.data);
      })
      .catch((err) => {
        setSahamPoints({});
        console.log(err);
      });
  };

  const varshphala_report_menu = [
    { label: "Basic Details", value: 1 },
    { label: "Mudda Dasha", value: 2 },
    { label: "Panchavargeeya Bala", value: 3 },
    { label: "varshaphal Planets", value: 4 },
    { label: "Saham Points", value: 5 },
    // { label: "Predictions" },
    // { label: "Prastharashtakvarga" },
    // { label: "Shodashvarga" },
    // { label: "Fivefold Friendship" },
  ];

  function getAMPM(hour, minute) {
    let period = hour >= 12 ? "PM" : "AM";
    let adjustedHour = hour % 12;
    adjustedHour = adjustedHour ? adjustedHour : 12; // the hour '0' should be '12'
    let formattedMinute = minute < 10 ? `0${minute}` : minute; // pad single digit minutes with a leading zero
    return `${adjustedHour}:${formattedMinute} ${period}`;
  }

  const handleChange = (event) => {
    setVarshphalaYear(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!varshphalaYear) {
      setError("Please select a year");
    } else {
      setError(null);
      console.log(varshphalaYear);
      // Implement your form submission logic here
    }
  };

  function decimalToDMS(decimal) {
    const degrees = Math.floor(decimal);
    const minutesFloat = (decimal - degrees) * 60;
    const minutes = Math.floor(minutesFloat);
    const secondsFloat = (minutesFloat - minutes) * 60;
    const seconds = Math.round(secondsFloat);
    return `${degrees}° ${minutes}' ${seconds}''`;
  }

  function getDayMonthYear(dateString) {
    const date = new Date(dateString);

    // Get day, month, and year
    const day = date.getDate().toString(); // returns the day of the month (1-31)
    const month = (date.getMonth() + 1).toString(); // returns the month (0-11),
    const year = date.getFullYear().toString(); // returns the year (four digits)

    return { day, month, year };
  }
  const handleLinkClick = (key) => {
    setActiveLink(key.toString());
    if (key === 0 && basicPanchang == null) fetchVarshPhala();
    if (key === 1 && varshaphalMuddaDasha == null) fetchVarshaphalMuddaDasha();
    if (key === 2 && panchavargeeyaBala == null) fetchPanchavargeeyaBala();
    if (key === 3 && varshaphalPlanets == null) fetchVarshaphalPlanets();
    if (key === 4 && sahamPoints == null) fetchSahamPoints();
  };
  const Nodatafound = () => {
    return <h1 className="text-center my-4">Data not Found</h1>;
  };

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
          <Container className="a">
            <Row>
              <Col md="12">
                <div className="leftcont text-left ">
                  <h1>Varshaphal Report</h1>
                  <h3>For Year {varshphala.varshPhala.varshphalaYear}</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Col md="3">
            <h4>Look For Another Year</h4>
            <form
              onSubmit={handleFormSubmit}
              style={{ display: "flex", alignItems: "center" }}
            >
              <select
                class="form-control form-control-sm"
                name="varshphalaYear"
                value={varshphalaYear}
                onChange={handleChange}
                required
                style={{ marginRight: "10px" }}
                // size="5"
              >
                <option value="">Select Year</option>
                {Array.from({ length: 90 }, (_, i) => (
                  <option key={i} value={1950 + i}>
                    {1950 + i}
                  </option>
                ))}
              </select>
              <button
                class="btn btn-warning btn-sm"
                type="submit"
                style={{ marginTop: "0px" }}
              >
                ChangeYear
              </button>
            </form>
          </Col>
        </Container>

        <Container className="mt-5">
          <Row>
            <Col md="12" className="">
              {varshphala.varshPhala == null ? (
                <Nodatafound />
              ) : (
                <>
                  <div className="tabs">
                    {(varshphala_report_menu || []).map((item, key) => (
                      <>
                        <input
                          type="radio"
                          id={`radio-${key + 1}`}
                          name="tabs"
                          onClick={() => handleLinkClick(key)}
                        />
                        <label className="tab" htmlFor={`radio-${key + 1}`}>
                          {item.label}
                        </label>
                      </>
                    ))}
                    <span className="glider"></span>
                  </div>
                  <div>
                    {/* <h4 className="bg-smooth text-center text-bg-success">
                      Varshaphal Year {varshphala.varshPhala.varshphalaYear}
                    </h4> */}
                  </div>
                  <TabContent activeTab={activelink}>
                    <TabPane tabId="0">
                      <Row>
                        <Col md="6" sm="12">
                          <Table 
                            bordered
                            className="smooth-transition basic-detail"
                          >
                            <tbody className="animate__animated animate__zoomIn">
                              <tr>
                                <th
                               
                                  colSpan={2}
                                  className="bg-warning text-center"
                                >
                                  Basic Details
                                </th>
                              </tr>
                              <tr>
                                <th>Name</th>
                                <td>{varshphala.varshPhala?.name}</td>
                              </tr>
                              <tr>
                                <th>Birth Date</th>
                                <td>{varshphala.varshPhala?.dateofbirth}</td>
                              </tr>
                              <tr>
                                <th>Birth Time</th>
                                <td>
                                  {getAMPM(
                                    varshphala.varshPhala?.birthminute,
                                    varshphala.varshPhala?.birthhour
                                  )}
                                </td>
                              </tr>
                              <tr>
                                <th>Birth Place</th>
                                <td>
                                  {varshphala.varshPhala.birthplace != null ? (
                                    <p>
                                      <span>
                                        {
                                          varshphala.varshPhala.birthplace.city
                                            .name
                                        }
                                        ,&nbsp;
                                      </span>
                                      <span>
                                        {
                                          varshphala.varshPhala.birthplace.state
                                            .name
                                        }
                                        ,&nbsp;
                                      </span>
                                      <span>
                                        {
                                          varshphala.varshPhala.birthplace
                                            .country.name
                                        }
                                      </span>
                                    </p>
                                  ) : (
                                    ""
                                  )}
                                </td>
                              </tr>
                              <tr>
                                <th>Latitude</th>
                                <td>
                                  {varshphala.varshPhala.birthplace != null
                                    ? decimalToDMS(
                                        varshphala.varshPhala.birthplace.city
                                          .latitude
                                      )
                                    : ""}
                                </td>
                              </tr>
                              <tr>
                                <th>Longitude</th>
                                <td>
                                  {varshphala.varshPhala.birthplace != null
                                    ? decimalToDMS(
                                        varshphala.varshPhala.birthplace.city
                                          .longitude
                                      )
                                    : ""}
                                </td>
                              </tr>
                              <tr>
                                <th>Time Zone</th>
                                <td>
                                  {varshphala.varshPhala.birthplace != null
                                    ? varshphala.varshPhala.birthplace.country
                                        .timezones[0].zoneName
                                    : ""}
                                </td>
                              </tr>
                              <tr>
                                <th>Time Zone Hour</th>
                                <td>
                                  {varshphala.varshPhala.birthplace != null
                                    ? varshphala.varshPhala.birthplace.country
                                        .timezones[0].gmtOffsetName
                                    : ""}
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                        <Col md="6" sm="12" className="smooth-transition">
                          {varshphala.varshPhala == null ? (
                            <h1>Loading..</h1>
                          ) : varshphala.varshPhala != null &&
                            Object.keys(varshphala.varshPhala).length === 0 ? (
                            <Nodatafound />
                          ) : (
                            <Table
                              bordered
                              className="kundlitable panchang-detail"
                            >
                              <tbody className="animate__animated animate__zoomIn">
                                <tr>
                                  <th
                                    colSpan={2}
                                    className="bg-warning text-center"
                                  >
                                    Varshaphal Details
                                  </th>
                                </tr>
                                <tr>
                                  <th>Tithi </th>
                                  <td>
                                    {basicPanchang != null
                                      ? basicPanchang.tithi
                                      : ""}
                                  </td>
                                </tr>
                                <tr>
                                  <th>Nakshatra</th>
                                  <td>
                                    {basicPanchang != null
                                      ? basicPanchang.nakshatra
                                      : ""}
                                  </td>
                                </tr>
                                <tr>
                                  <th>Yog</th>
                                  <td>
                                    {basicPanchang != null
                                      ? basicPanchang.yog
                                      : ""}
                                  </td>
                                </tr>
                                <tr>
                                  <th>Karan</th>
                                  <td>
                                    {basicPanchang != null
                                      ? basicPanchang.karan
                                      : ""}
                                  </td>
                                </tr>
                                <tr>
                                  <th>Sun Rise</th>
                                  <td>
                                    {basicPanchang != null
                                      ? basicPanchang.sunrise
                                      : ""}
                                  </td>
                                </tr>
                                <tr>
                                  <th>Sun Set</th>
                                  <td>
                                    {basicPanchang != null
                                      ? basicPanchang.sunset
                                      : ""}
                                  </td>
                                </tr>
                                <tr>
                                  <th>Vedic Sunrise</th>
                                  <td>
                                    {basicPanchang != null
                                      ? basicPanchang.vedic_sunrise
                                      : ""}
                                  </td>
                                </tr>
                                <tr>
                                  <th>Vedic Sunset</th>
                                  <td>
                                    {basicPanchang != null
                                      ? basicPanchang.vedic_sunset
                                      : ""}
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          )}
                        </Col>
                      </Row>
                    </TabPane>

                    <TabPane tabId="1">
                      <Row>
                        <Col sm="12" className="kundlitable smooth-transition">
                          {varshaphalMuddaDasha == null ? (
                            <h1>Loading..</h1>
                          ) : basicPanchang != null &&
                            Object.keys(basicPanchang).length === 0 ? (
                            <Nodatafound />
                          ) : (
                            <Table className="planet-position table-bordered table-rounded animate__animated animate__zoomIn">
                              <thead className="thead-dark">
                                <tr>
                                  <th>Planets</th>
                                  <th>Dasha Start</th>
                                  <th>Dasha End</th>
                                  {/* <th>Dasha Duration</th> */}
                                </tr>
                              </thead>
                              <tbody>
                                {varshaphalMuddaDasha != null &&
                                  varshaphalMuddaDasha.map((dasha, key) => (
                                    <tr key={key}>
                                      <td>{dasha.planet}</td>
                                      <td>{dasha.dasha_start}</td>
                                      <td>{dasha.dasha_end}</td>
                                      {/* <td>{dasha.dasha_duration}</td> */}
                                    </tr>
                                  ))}
                              </tbody>
                            </Table>
                          )}
                        </Col>
                      </Row>
                    </TabPane>

                    <TabPane tabId="2">
                      <Row>
                        <Col sm="12" className="kundlitable smooth-transition">
                          {panchavargeeyaBala == null ? (
                            <h1>Loading..</h1>
                          ) : panchavargeeyaBala != null &&
                            Object.keys(panchavargeeyaBala).length === 0 ? (
                            <Nodatafound />
                          ) : (
                             <Table className=" planet-position table-bordered table-rounded animate__animated animate__zoomIn">
                              <thead className="thead-dark">
                                <tr>
                                  <th>Bala</th>
                                  <th>Sun</th>
                                  <th>Moon</th>
                                  <th>Mars</th>
                                  <th>Mercury</th>
                                  <th>Jupiter</th>
                                  <th>Venus</th>
                                  <th>Saturn</th>
                                </tr>
                              </thead>
                              <tbody>
                                {balaTypes.map((bala, key) => (
                                  <tr key={key}>
                                    <td>{bala.label}</td>
                                    {bala.values.map((value, index) => (
                                      <td key={index}>{value}</td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          )}
                        </Col>
                      </Row>
                    </TabPane>

                    <TabPane tabId="3">
                      <Row>
                        <Col sm="12" className="kundlitable smooth-transition">
                          {varshaphalPlanets == null ? (
                            <h1>Loading..</h1>
                          ) : varshaphalPlanets != null &&
                            Object.keys(varshaphalPlanets).length === 0 ? (
                            <Nodatafound />
                          ) : (
                            <Table className="planet-position table-bordered table-rounded animate__animated animate__zoomIn">
                              <thead className="thead-dark">
                                <tr>
                                  <th>Planets</th>
                                  <th>Sign</th>
                                  <th>Full Degree</th>
                                  <th>Nakshatra</th>
                                  <th>Nakshatra Lord</th>
                                  <th>Planet Awastha</th>
                                  {/* <th>Dasha Duration</th> */}
                                </tr>
                              </thead>
                              <tbody>
                                {varshaphalPlanets != null &&
                                  varshaphalPlanets.map((planets, key) => (
                                    <tr key={key}>
                                      <td>{planets.name}</td>
                                      <td>{planets.sign}</td>
                                      <td>{planets.fullDegree}</td>
                                      <td>{planets.nakshatra}</td>
                                      <td>{planets.nakshatraLord}</td>
                                      <td>{planets.planet_awastha}</td>
                                    </tr>
                                  ))}
                              </tbody>
                            </Table>
                          )}
                        </Col>
                      </Row>
                    </TabPane>
                   
                    <TabPane tabId="4">
                      {sahamPoints === null ? (
                        <h1>Loading...</h1>
                      ) : sahamPoints != null &&
                        Object.keys(sahamPoints).length === 0 ? (
                        <Nodatafound />
                      ) : (
                        <Row className="smooth-transition">
                          <h1 className="mb-3">Saham Points</h1>
                          {sahamPoints.map((item, key) => (
                            <>
                              <Col
                                md="4"
                                sm="12"
                                className="kundlitable"
                                key={key}
                              >
                                <Table className="table-bordered table-rounded table-stright text-center animate__animated animate__zoomIn">
                                  <thead className="thead-dark">
                                    <tr>
                                      <th colSpan={2} className="bg-warning">
                                        {item.saham_name}
                                      </th>
                                    </tr>
                                    <tr>
                                      <th className="fw-normal">Saham Name</th>
                                      <th className="fw-normal">
                                        Saham Degree
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>{item.saham_name}</td>
                                      <td>{item.saham_degree}</td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </Col>
                            </>
                          ))}
                        </Row>
                      )}
                    </TabPane>
                  </TabContent>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </LayoutOne>
  );
};

const mapStateToProps = (state) => ({
  varshphala: state.varshphala,
});

export default connect(mapStateToProps)(VarshphalaReport);
