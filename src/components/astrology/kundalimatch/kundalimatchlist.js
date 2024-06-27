import React from "react";
// import { Link } from "react-router-dom";
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
// import Pj from "../../../assets/img/pj.gif";
import { PANCHANG_KEY } from "../../../panchangCredetials";
import "../../../assets/scss/astropooja.css";
import girl from "../../../assets/img/girl.png";
import boy from "../../../assets/img/boy-img.png";
import matchMake from "../../../assets/img/image.png";
import male from "../../../assets/img/male1.png";
import textbottom from "../../../assets/img/textbottom.png";
import astrologinbg from "../../../assets/img/astrologin-bg.jpg";
import female from "../../../assets/img/woman1.png";
import LayoutOne from "../../../layouts/LayoutOne";
import { Table } from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { connect } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import "animate.css";
// import { useLocation } from "react-router-dom";

class KundaliMatchList extends React.Component {
  constructor(props) {
    super(props);
    // const location = useLocation();

    this.state = {
      result: null,
      secondApiResult: null,
      thirdApi: null,
      showComponent: false,
    };
  }

  componentDidMount() {
    const { location, formData } = this.props;
    const { state } = location;
    if (state && state.formData) {
      this.setState({ data: state.formData });
    }
// console.log(formData);
    const requestBody = {
      m_day: formData.m_day,
      m_month: formData.m_month,
      m_year: formData.m_year,
      m_hour: formData.m_hour,
      m_min: formData.m_min,
      m_lat: formData.m_latitude,
      m_lon: formData.m_longitude,
      m_tzone: "5.5",
      f_day: formData.f_day,
      f_month: formData.f_month,
      f_year: formData.f_year,
      f_hour: formData.f_hour,
      f_min: formData.f_min,
      f_lat: formData.f_latitude,
      f_lon: formData.f_longitude,
      f_tzone: "5.5",
    };
    // console.log(requestBody);

    // const apiKey = "Basic NjI0NDU5OjdkODc1YThjMTliMzdiNjk1MWIzMjEwY2E3MjhjZDMw";
    const apiKey = "Basic " + PANCHANG_KEY; //if it will not work then comment this and use upside apikey
    const headers = {
      Authorization: apiKey,
      "Content-Type": "application/json",
    };

    // Array of Axios post requests
    const axiosRequests = [
      axios.post(
        "https://json.astrologyapi.com/v1/match_ashtakoot_points",
        requestBody,
        { headers }
      ),
      axios.post(
        "https://json.astrologyapi.com/v1/match_manglik_report",
        requestBody,
        { headers }
      ),
      axios.post(
        "https://json.astrologyapi.com/v1/match_birth_details",
        requestBody,
        { headers }
      ),
    ];

    // Execute all requests concurrently
    Promise.all(axiosRequests)
      .then((responses) => {
        this.setState({ result: responses[0].data }); // Handle response for the first API call
        this.setState({ secondApiResult: responses[1].data }); // Handle response for the second API call
        this.setState({ thirdApi: responses[2].data }); // Handle response for the third API call
      })
      .catch((error) => {
        // Handle errors for all API calls
        console.error("Error fetching data:", error);
        swal("Error", "One or more APIs not working", "error");
      });
  }

  getDayMonthYear(dateString) {
    const date = new Date(dateString);

    // Get day, month, and year
    const day = date.getDate().toString(); // returns the day of the month (1-31)
    const month = (date.getMonth() + 1).toString(); // returns the month (0-11),
    const year = date.getFullYear().toString(); // returns the year (four digits)

    return { day, month, year };
  }

  decimalToDMS(decimal, sunrise, sunset) {
    if (decimal === null || decimal === undefined) {
      return ""; // Return empty string if decimal value is not provided
    }

    const degrees = Math.floor(decimal);
    const minutesFloat = (decimal - degrees) * 60;
    const minutes = Math.floor(minutesFloat);
    const secondsFloat = (minutesFloat - minutes) * 60;
    const seconds = Math.round(secondsFloat);
    let result = `${degrees}° ${minutes}' ${seconds}"`;
    if (sunrise) {
      result += ` Sunrise: ${sunrise}`;
    }
    if (sunset) {
      result += ` Sunset: ${sunset}`;
    }
    return result;
  }

  formatDateTime(date, hour, minute) {
    if (!date || !hour || !minute) {
      return "";
    }
    const formattedDate = new Date(date);
    const formattedHour = ("0" + hour).slice(-2);
    const formattedMinute = ("0" + minute).slice(-2);
    return `${formattedDate.toLocaleDateString()} ${formattedHour}:${formattedMinute}`;
  }
   
  

  render() {
    // const { matchmakingreport } = this.state;
    const { result, secondApiResult, thirdApi } = this.state;
    // console.log(thirdApi);
    const isMalePresent = secondApiResult?.male?.is_present;
    const isFemalePresent = secondApiResult?.female?.is_present;
    const match = secondApiResult?.conclusion?.match;
    const { formData } = this.props;
    // console.log(formData);

    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              // float: "left",
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
              // textAlign: "center",
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left"
                  >
                    <h1 
                    // className="animate__animated animate__zoomIn" 
                    style={{
                      fontFamily:"cursive"
                    }}
                    >
                      Kundli Matching Details
                    </h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        {/* <h1 class="animate__animated animate__bounce">An animated element</h1> */}
        <section>
          <Container>
            <div className="mat-main">
              <h2
                className="animate__animated animate__zoomIn"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontFamily:"cursive"
                }}
              >
                Horoscope Matching
              </h2>
              <div
                className="animate__animated animate__zoomIn"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: " ",
                    border: "3px solid #ffcc01",
                    borderRadius: "7px",
                    padding: "5px",
                    marginLeft: "10px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "150px", // Adjust the width as needed
                    height: "50px", // Adjust the height as needed
                    // wordWrap: "break-word",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <h4 style={{ margin: 0,  fontWeight: "bold",fontFamily:"cursive" }}>
                    <img src={male} alt="Example" height={40} />
                    {formData.Name1.toUpperCase()}
                  </h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80px",
                    margin: "0 10px",
                    position: "relative",
                    top: "-13px",
                    left: "6px",
   
                  }}
                >
                  <img src={matchMake} alt="Example" height={80} />
                </div>
                <div
                  style={{
                    backgroundColor: " ",
                    border: "3px solid #ffcc01",
                    borderRadius: "7px",
                    padding: "5px",
                    marginLeft: "10px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "150px", // Adjust the width as needed
                    height: "50px", // Adjust the height as needed
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                  <h4 style={{ margin: 0,  fontWeight: "bold", fontFamily:"cursive" }}>
                    <img src={female} alt="Example" height={40} />
                    {formData.Name2.toUpperCase()}
                  </h4>
                </div>
              </div>

              <div className=" animate__animated animate__zoomIn"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // width:"20%",
                    height: "40px",             
                    position: "relative",                
                  }}>
                  <img src={textbottom} alt="Example" height={20} width= "20%" />
                </div>         


              <Row>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    borderBottom: "25px solid white"
                  }}
                >
                  <Col md="5">
                    <div className="mat-box animate__animated animate__zoomIn">
                      <h3>
                        <i class="fa fa-male" aria-hidden="true"></i> Basic
                        Details
                      </h3>
                      <Table striped>
                        <thead>
                          <tr>
                            {/* <th><img src={male} alt="Example" height={30}/>Name</th>
                          <th><img src={female} alt="Example" height={30}/>Name</th> */}
                            <th>Name</th>
                            <td>{formData.Name1.toUpperCase()}</td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th>Gender</th>
                            <td>{formData.gender}</td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th>Date Of Birth And Time</th>
                            <td>
                              {this.formatDateTime(
                                formData.dateOfBirth1,
                                formData.m_hour,
                                formData.m_min
                              )}
                            </td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th>Mangal Dosh</th>
                            <td>{isMalePresent ? "Yes" : "No"}</td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th>Latitude</th>
                            <td>
                              {this.decimalToDMS(
                                thirdApi?.male_astro_details?.latitude
                              )}
                            </td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th>Longitude</th>
                            <td>
                              {this.decimalToDMS(
                                thirdApi?.male_astro_details?.longitude
                              )}
                            </td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th>Sunrise</th>
                            <td>{thirdApi?.male_astro_details?.sunrise}</td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th>Sunset</th>
                            <td>{thirdApi?.male_astro_details?.sunset}</td>
                          </tr>
                        </thead>
                      </Table>
                    </div>
                  </Col>
                  <Col md="5">
                    <div className="mat-box animate__animated animate__zoomIn">
                      <h3>
                        <i class="fa fa-female" aria-hidden="true"></i> Basic
                        Details
                      </h3>
                      <Table striped>
                        <thead>
                          <tr>
                            {/* <th><img src={male} alt="Example" height={30}/>Name</th>
                          <th><img src={female} alt="Example" height={30}/>Name</th> */}
                            <th>Name</th>
                            <td>{formData.Name2.toUpperCase()}</td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th>Gender</th>
                            <td>{formData.gender2}</td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th>Date Of Birth And Time</th>
                            <td>
                              {this.formatDateTime(
                                formData.dateOfBirth2,
                                formData.f_hour,
                                formData.f_min
                              )}
                            </td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th>Mangal Dosh</th>
                            <td>{isFemalePresent ? "Yes" : "No"}</td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th>Longitude</th>
                            <td>
                              {this.decimalToDMS(
                                thirdApi?.female_astro_details?.longitude
                              )}
                            </td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th>Latitude</th>
                            <td>
                              {this.decimalToDMS(
                                thirdApi?.female_astro_details?.latitude
                              )}
                            </td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th>Sunrise</th>
                            <td>{thirdApi?.female_astro_details?.sunrise}</td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th>Sunset</th>
                            <td>{thirdApi?.female_astro_details?.sunset}</td>
                          </tr>
                        </thead>
                      </Table>
                    </div>
                  </Col>
                </div>

                <hr color="white" align="center" width="100%" size="10" />
                <Col
                  md="14"
                  sm="13"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="mat-box animate__animated animate__zoomIn">
                    <h3>Ashtakoot</h3>
                    <Table striped>
                      <thead>
                        <tr>
                          <th>Guna</th>
                          <th>Male</th>
                          <th>Female</th>
                          <th>Received Point</th>
                          <th>No of points </th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      {/* <tbody>
                        <tr>
                          <td>Points</td>
                          <td>
                            <td>{result?.total?.received_points}/36</td>
                          </td>
                        </tr>
                      </tbody> */}
                      <thead>
                        <tr>
                          <th>
                            {" "}
                            <img
                              class="mobilenone"
                              alt="guna"
                              src="https://cdn.anytimeastro.com/anytimeastro/web/content/images/वर्न.png"
                            ></img>
                            Varna
                          </th>
                          <td>{result?.varna?.male_koot_attribute}</td>
                          <td>{result?.varna?.female_koot_attribute}</td>
                          <td>{result?.varna?.received_points}</td>
                          <td>{result?.varna?.total_points}</td>
                          <td>{result?.varna?.description}</td>
                        </tr>
                      </thead>
                      <thead>
                        <tr>
                          <th>
                            {" "}
                            <img
                              class="mobilenone"
                              alt="guna"
                              src="https://cdn.anytimeastro.com/anytimeastro/web/content/images/वैशय.png"
                            ></img>
                            Vasya
                          </th>
                          <td>{result?.vashya?.male_koot_attribute}</td>
                          <td>{result?.vashya?.female_koot_attribute}</td>
                          <td>{result?.vashya?.received_points}</td>
                          <td>{result?.vashya?.total_points}</td>
                          <td>{result?.vashya?.description}</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>
                            {" "}
                            <img
                              class="mobilenone"
                              alt="guna"
                              src="https://cdn.anytimeastro.com/anytimeastro/web/content/images/योनि.png"
                            ></img>
                            Yoni
                          </th>
                          <td>{result?.yoni?.male_koot_attribute}</td>
                          <td>{result?.yoni?.female_koot_attribute}</td>
                          <td>{result?.yoni?.received_points}</td>
                          <td>{result?.yoni?.total_points}</td>
                          <td>{result?.yoni?.description}</td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th>
                            {" "}
                            <img
                              class="mobilenone"
                              alt="guna"
                              src="https://cdn.anytimeastro.com/anytimeastro/web/content/images/मैत्री.png"
                            ></img>
                            Maitri
                          </th>
                          <td>{result?.maitri?.male_koot_attribute}</td>
                          <td>{result?.maitri?.female_koot_attribute}</td>
                          <td>{result?.maitri?.received_points}</td>
                          <td>{result?.maitri?.total_points}</td>
                          <td>{result?.maitri?.description}</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>
                            <img
                              class="mobilenone"
                              alt="guna"
                              src="https://cdn.anytimeastro.com/anytimeastro/web/content/images/गण.png"
                            ></img>
                            Gana
                          </th>
                          <td>{result?.gan?.male_koot_attribute}</td>
                          <td>{result?.gan?.female_koot_attribute}</td>
                          <td>{result?.gan?.received_points}</td>
                          <td>{result?.gan?.total_points}</td>
                          <td>{result?.gan?.description}</td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th>
                            <img
                              class="mobilenone"
                              alt="guna"
                              src="https://cdn.anytimeastro.com/anytimeastro/web/content/images/नाडी.png"
                            ></img>
                            Nadi
                          </th>
                          <td>{result?.nadi?.male_koot_attribute}</td>
                          <td>{result?.nadi?.female_koot_attribute}</td>
                          <td>{result?.nadi?.received_points}</td>
                          <td>{result?.nadi?.total_points}</td>
                          <td>{result?.nadi?.description}</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>
                            <img
                              class="mobilenone"
                              alt="guna"
                              src="https://cdn.anytimeastro.com/anytimeastro/web/content/images/तारा.png"
                            ></img>
                            Tara
                          </th>
                          <td>{result?.tara?.male_koot_attribute}</td>
                          <td>{result?.tara?.female_koot_attribute}</td>
                          <td>{result?.tara?.received_points}</td>
                          <td>{result?.tara?.total_points}</td>
                          <td>{result?.tara?.description}</td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th>
                            {" "}
                            <img
                              class="mobilenone"
                              alt="guna"
                              backgroundColor="#ffcc01"
                              src="https://cdn.anytimeastro.com/anytimeastro/web/content/images/भकुट.png"
                            ></img>
                            Bhakut
                          </th>
                          <td>{result?.bhakut?.male_koot_attribute}</td>
                          <td>{result?.bhakut?.female_koot_attribute}</td>
                          <td>{result?.bhakut?.received_points}</td>
                          <td>{result?.bhakut?.total_points}</td>
                          <td>{result?.bhakut?.description}</td>
                        </tr>
                      </thead>
                      <thead>
                        <tr>
                          <th>
                            {" "}
                            <i
                              className="fa fa-dot-circle-o"
                              aria-hidden="true"
                              style={{
                                color: "red",
                                fontSize: "24px",
                                marginRight: "8px",
                              }}
                            ></i>
                            Total
                          </th>
                          <th></th>
                          <th></th>
                          <th>{result?.total?.received_points}</th>
                          <th>{result?.total?.total_points}</th>
                          <th>
                            Minimum Required: {result?.total?.minimum_required}
                          </th>
                        </tr>
                      </thead>
                    </Table>
                  </div>
                </Col>
              </Row>
              <hr color="white" align="center" width="100%" size="10" />

              <div className="bx-conclusion animate__animated animate__zoomIn">
                <Row>
                  <h2 className="mb-20 mat">Conclusion</h2>
                  <h4>{result?.conclusion?.report}</h4>
                </Row>
              </div>

              <div className="bx-conclusion animate__animated animate__zoomIn">
                <Row>
                  <h2 className="mb-20 mat">Manglik Report</h2>
                  <Col md="6">
                    <div className="matbox">
                      <div className="matbox-1 mg">
                        <img src={boy} alt="" />
                      </div>
                      <div className="matbox-2">
                        <p>Name: {formData.Name1.toUpperCase()}</p>
                        <p>
                          Manglik Status:{" "}
                          <span className="sp-mat">
                            {" "}
                            {secondApiResult?.male?.percentage_manglik_present}%
                          </span>
                        </p>
                        <p>
                          Manglik Dodh: {secondApiResult?.male?.manglik_status}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="matbox">
                      <div className="matbox-1 mg">
                        <img src={girl} alt="" />
                      </div>
                      <div className="matbox-2">
                        <p>Name: {formData?.Name2.toUpperCase()}</p>

                        <p>
                          Manglik Status:{" "}
                          <span className="sp-mat">
                            {" "}
                            {
                              secondApiResult?.female
                                ?.percentage_manglik_present
                            }
                            %
                          </span>
                        </p>
                        <p>
                          Manglik Dosh:{" "}
                          {secondApiResult?.female?.manglik_status}
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="bx-conclusion animate__animated animate__zoomIn">
                <h2 className="mb-20 mat">Manglik Conclusion</h2>
                <h3>
                  Kundali Match: <b>{match ? "Yes" : "No"}</b>
                </h3>
                <h4>{secondApiResult?.conclusion?.report}</h4>
              </div>
            </div>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    formData: state.kundaliFormReducer.formData, // Accessing formData from Redux state
  };
};

export default connect(mapStateToProps)(KundaliMatchList);
