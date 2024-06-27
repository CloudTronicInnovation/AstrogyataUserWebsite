import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col, FormGroup, Input, Label } from "reactstrap";
// import textbottom from '../../assets/img/textbottom.png'
// import astro3 from '../../assets/img/team/astro3.jpg'
import "../../assets/scss/astroteam.scss";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";
import Form from "react-bootstrap/Form";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
class allastrochatlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      astrologerList: [],
      Form: "",
      To: "",
      astroid: "",
      userid: "",
      price_high_to_low: [],
    };
  }
  componentDidMount = () => {
    let { id } = this.props;
    axiosConfig
      .get("/admin/allAstro")
      .then(response => {
        console.log("fjj", response.data.data[0]._id);
        if (response.data.status === true) {
          this.setState({ astrologerList: response.data.data });
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.response);
      });
    axiosConfig
      .get("/user/price_high_to_low")
      .then(response => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({
            price_high_to_low: response.data.data,
          });
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.response);
      });
  };
  filterMethod = name => {
    axiosConfig
      .get(`/user/` + name)
      .then(response => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({
            astrologerList: response.data.data,
          });
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.response);
      });
  };
  ChatHandler = (e, astroid, mobile, data, index) => {
    // e.preventDefault();
    // let astrologerList = localStorage.getItem('astrologerList')
    let mobileNo = localStorage.getItem("user_mobile_no");
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let astroId = astroid;
    // let obj = {
    //   userid: userId,
    //   astroid: astroId,
    //   From: mobile, //parseInt(this.state.number)
    //   To: mobileNo, //parseInt(this.state.number)
    // };
    // axiosConfig
    //   .post(`/user/make_call`, obj)

    //   .then(response => {
    //     console.log("response", response.data);
    // console.log(response.data.STATUSMSG)
    // this.setState({ responseData: response.data })
    // swal('Successful!', 'Recharge Successful!', 'success')
    // this.props.history.push('/orderrecharge')
    // })

    // .catch(error => {
    //   console.log(error);
    // });
  };

  render() {
    const { astrologerList } = this.state;

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
                    <h1>Chat With Astrologer</h1>
                    <p></p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section id="team" class="pb-5">
          <Container>
            <Row>
              <Col md="3">
                <div className="bx-list fbg">
                  <h3 className="mb-3">
                    <b>Sort By:</b>
                  </h3>
                  <form>
                    <ul>
                      <li>
                        <FormGroup check>
                          <Input
                            type="radio"
                            name="id"
                            onChange={() =>
                              this.filterMethod("exp_high_to_low")
                            }
                          />
                          <Label check>Experience : High to Low</Label>
                        </FormGroup>
                      </li>
                      <li>
                        <FormGroup check>
                          <Input
                            type="radio"
                            name="id"
                            onChange={() =>
                              this.filterMethod("exp_low_to_high")
                            }
                          />
                          <Label check>Experience : Low to High</Label>
                        </FormGroup>
                      </li>
                      <li>
                        <FormGroup check>
                          <Input
                            type="radio"
                            name="id"
                            onChange={() =>
                              this.filterMethod("price_high_to_low")
                            }
                          />
                          <Label check>Price : High to Low</Label>
                        </FormGroup>
                      </li>
                      <li>
                        <FormGroup check>
                          <Input
                            type="radio"
                            name="id"
                            onChange={() =>
                              this.filterMethod("price_low_to_high")
                            }
                          />
                          <Label check>Price : Low to High</Label>
                        </FormGroup>
                      </li>
                      <li>
                        <FormGroup check>
                          <Input
                            // name="radio1"
                            type="radio"
                            name="id"
                            onChange={() =>
                              this.filterMethod("rating_high_to_low")
                            }
                          />
                          <Label check>Rating : High to Low</Label>
                        </FormGroup>
                      </li>
                      <li>
                        <FormGroup check>
                          <Input
                            type="radio"
                            name="id"
                            onChange={() =>
                              this.filterMethod("rating_low_to_high")
                            }
                          />
                          <Label check> Rating : Low to High</Label>
                        </FormGroup>
                      </li>
                    </ul>
                  </form>
                </div>
              </Col>
              <Col md="9">
                <Row>
                  {astrologerList.length ? (
                    astrologerList.map((astrologer, index) => {
                      return (
                        <Col md="4" key={index}>
                          <div className="image-flip">
                            <div className="mainflip flip-0">
                              <div className="frontside">
                                <Link
                                  // to={"/astrologerdetail/" + astrologer._id}
                                  className=""
                                >
                                  <div className="card">
                                    <div className="card-body text-center">
                                      <p>
                                        <img src={astrologer?.img} alt="" />
                                      </p>
                                      <h4 className="card-title">
                                        {astrologer?.fullname}
                                      </h4>
                                      <ul className="mb-3">
                                        <li>
                                          Specility:
                                          <span>{astrologer?.all_skills}</span>
                                        </li>
                                        <li>
                                          Language:{" "}
                                          <span>{astrologer?.language}</span>
                                        </li>
                                        <li>
                                          Experience:{" "}
                                          <span>
                                            {astrologer?.exp_in_years}
                                          </span>
                                        </li>
                                        <li>
                                          Call Rate:
                                          <span>
                                            {astrologer?.callCharge}/
                                            {astrologer?.conrubute_hrs}
                                          </span>
                                        </li>
                                      </ul>
                                      {astrologer.waiting_queue === 0 ? (
                                        <>
                                          <Link
                                            className="btn btn-primary btn-sm sc"
                                            to={
                                              "/astrologerdetail/" +
                                              astrologer._id
                                            }
                                          >
                                            <span className="sr-btn">
                                              <i
                                                class="fa fa-commenting"
                                                aria-hidden="true"
                                              >
                                                <span className="m-2">
                                                  Chat
                                                </span>
                                              </i>
                                            </span>
                                          </Link>
                                        </>
                                      ) : (
                                        <>
                                          <button className="btn btn-denger wr">
                                            <i
                                              class="fa fa-commenting"
                                              aria-hidden="true"
                                            />
                                            Wait
                                          </button>
                                        </>
                                      )}
                                      <br />
                                      <span value={this.state.waiting_queue}>
                                        {" "}
                                        Wait ~ {astrologer.waiting_queue}Min
                                      </span>
                                      {/* <span> Wait ~ 5m</span> */}
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Col>
                      );
                    })
                  ) : (
                    <Col lg="12" md="4" className="check">
                      No Astrologer Available
                    </Col>
                  )}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default allastrochatlist;
