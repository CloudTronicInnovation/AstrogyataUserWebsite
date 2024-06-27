import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import {
  Container,
  Row,
  Col,
  ModalHeader,
  ModalBody,
  Modal,
  Label,
  FormGroup,
  Input,
} from "reactstrap";
import {
  AstroSkills,
  AstroStatus,
  Language,
  Specialisation,
} from "./skills/AstroSkills.js";
import { NavItem, TabContent, TabPane } from "reactstrap";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import { Button } from "reactstrap";
import "../../assets/scss/astroteam.scss";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
class AllAstrologerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      mobile: "",
      dob: "",
      gender: "",
      city: "",
      userimg: "",
      selectedName: "",
      selectedFile: null,
      otp: "",
      otpMsg: "",
      callingmode: false,
      indexnow: null,
      astrologerList: [],
      From: "",
      To: "",
      astroid: "",
      userid: "",
      modal: false,
      modalone: false,
      price_high_to_low: [],
      activeTab: 1,
      AstroStatus: "",
      Astrolanguage: "",
      astroSpecialzation: "",
      Skilldata: "",
    };

    this.toggle = this.toggle.bind(this);
    this.toggleone = this.toggleone.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  FilterAstro = e => {
    e.preventDefault();
    console.log(
      this.state.Skilldata,
      this.state.AstroStatus,
      this.state.Astrolanguage,
      this.state.astroSpecialzation
    );
    this.toggle();
    // this.handlestartInterval();
    let skil = this.state.Skilldata;
    let status = this.state.AstroStatus;
    let Astrolangua = this.state.Astrolanguage;
    let astroSpecialzat = this.state.astroSpecialzation;
    axiosConfig
      .get(
        `/user/getAstroFilter?language=${Astrolangua}&all_skills=${skil}&status=${status}&specification=${astroSpecialzat}`
      )
      .then(res => {
        console.log(res?.data);
        this.setState({ astrologerList: res?.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  toggleone() {
    this.setState({
      modalone: !this.state.modalone,
    });
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleCalling = selectedId => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let mobileNo = JSON.parse(localStorage.getItem("user_mobile_no"));
    console.log("USer", mobileNo);
    let object = {
      chatIntekId: selectedId,
      userId: userId,
      astroId: this.state.astroId,
    };
    let obj = {
      userid: userId,
      astroid: this.state.astroId,
      // From: this.state.mobile, //astro no
      From: parseInt(918889407856), //astro no
      To: parseInt(917692045606), //user no
    };
    console.log("obj", obj);
    axiosConfig
      .post(`/user/selectIntakeForm`, object)
      .then(ress => {
        if (ress.data.status === true) {
          axiosConfig
            .post(`/user/make_call`, obj)
            .then(response => {
              console.log("Calling", response.data);
              swal("Call Connected", "SuccessFully");
            })
            .catch(error => {
              console.log(error);
            });
        }
        console.log("asss", ress.data.status);
      })
      // console.log("sleelll", ress.data.status);
      // })
      .catch(err => {
        console.log("err", err);
      });
  };

  //Image Submit Handler
  onChangeHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  handlechange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  togglefilter = tab => {
    if (this.state.activeTab !== tab) this.setState({ activeTab: tab });
  };

  componentDidMount = () => {
    axiosConfig
      .get("/admin/allAstro")
      .then(response => {
        if (response.data.status === true) {
          this.setState({
            astrologerList: response.data.data,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });

    axiosConfig
      .get("/user/price_high_to_low")
      .then(response => {
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

  submitHandler = (e, astroid, mobile, data, index) => {
    console.log(index, "indexxxxxx");
    // let mobileNo = localStorage.getItem("user_mobile_no");
    let userId = JSON.parse(localStorage.getItem("user_id"));
    localStorage.setItem("astroId", astroid);
    localStorage.setItem("astroname", data?.fullname);
    this.setState({ indexnow: index });
    // let astroId = astroid;
    // let obj = {
    //   userid: userId,
    //   astroid: astroId,
    //   From: mobile, //astro id
    //   To: mobileNo, //user id
    // };
    if (userId !== "" && userId !== null) {
      this.props.history.push("/CallListData");
      // const data = {
      //   userid: userId,
      //   astroid: astroId,
      // };
      // axiosConfig
      //   .post(`/user/addCallWallet`, data)
      //   .then(response => {
      // if (response.data.status === true) {
      //   axiosConfig
      //     .post(`/user/make_call`, obj)
      //     .then(response => {
      //       console.log("Calling", response.data);
      //       swal("Call Connecting", "SuccessFully");
      //       this.setState({ callingmode: true });
      //     })
      //     .catch(error => {
      //       console.log(error?.response?.data?.error);
      //       swal("Try again after some Time ", "Internal server");
      //     });
      // } else {
      //   swal("Alert", "Insufficient Balance");
      // }
      // })
      // .catch(error => {
      //   swal("Alert", "Insufficient Balance");
      // });
    } else {
      swal("Need to Login first");
    }
  };

  filterMethod = name => {
    axiosConfig
      .get(`/user/` + name)
      .then(response => {
        if (response.data.status === true) {
          this.setState({
            astrologerList: response.data.data,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
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
                    <h1>Talk To Astrologer</h1>
                    <p></p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section id="team" class="pb-5 ">
          <Container>
            <Row>
              <Col md="3">
                <div className="bx-list fbg">
                  <h3 className="mb-3">
                    <b>Sort By:</b>
                  </h3>
                  <hr />
                  <form>
                    <ul>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="id"
                            onChange={() =>
                              this.filterMethod("exp_high_to_low")
                            }
                          />
                        </span>
                        Experience : High to Low
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 2"
                            name="id"
                            onChange={() =>
                              this.filterMethod("exp_low_to_high")
                            }
                          />
                        </span>
                        Experience : Low to High
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 3"
                            name="id"
                            onChange={() =>
                              this.filterMethod("price_high_to_low")
                            }
                          />
                        </span>
                        Price : High to Low
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 4"
                            name="id"
                            onChange={() =>
                              this.filterMethod("price_low_to_high")
                            }
                          />
                        </span>
                        Price : Low to High
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 5"
                            name="id"
                            onChange={() =>
                              this.filterMethod("rating_high_to_low")
                            }
                          />
                        </span>
                        Rating : High to Low
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 6"
                            name="id"
                            onChange={() =>
                              this.filterMethod("rating_low_to_high")
                            }
                          />
                        </span>
                        Rating : Low to High
                      </li>
                      {/* filter */}
                      <hr />
                      <div>
                        <Row>
                          <Col lg="5" md="5" sm="5">
                            <h3 className="mb-3 mt-1">
                              <Button
                                className="filtericon"
                                onClick={() => this.toggle()}
                              >
                                Filter{" "}
                                <i class="fa fa-filter" aria-hidden="true"></i>
                              </Button>
                            </h3>
                          </Col>
                          {this.state.Skilldata?.length ||
                          this.state.AstroStatus?.length ||
                          this.state.Astrolanguage?.length ||
                          this.state.astroSpecialzation?.length ? (
                            <>
                              <Col>
                                <h3 className="mb-3 mt-1">
                                  <Button
                                    className="filtericon"
                                    onClick={this.componentDidMount}
                                  >
                                    ClearFilter
                                    <i
                                      class="fa fa-filter"
                                      aria-hidden="true"
                                    ></i>
                                  </Button>
                                </h3>
                              </Col>
                            </>
                          ) : null}
                        </Row>
                      </div>
                    </ul>
                  </form>
                </div>
              </Col>
              <Col md="9">
                <Row className="mt-2">
                  {astrologerList?.length ? (
                    astrologerList?.map((astrologer, index) => {
                      return (
                        <Col md="4" key={index}>
                          <div className="image-flip">
                            <div className="mainflip flip-0">
                              <div className="frontside">
                                <div className="card">
                                  <div className="card-body text-center">
                                    <p>
                                      <Link
                                        to={
                                          "/astrologerdetail/" + astrologer._id
                                        }
                                      >
                                        <img src={astrologer?.img} alt="" />
                                      </Link>
                                    </p>
                                    <h4 className="card-title">
                                      {astrologer?.fullname
                                        .charAt(0)
                                        .toUpperCase() +
                                        astrologer?.fullname.slice(1)}
                                    </h4>
                                    <ul className="mb-3">
                                      <li>
                                        Specility:
                                        <span>
                                          {astrologer?.all_skills?.length > 5
                                            ? astrologer?.all_skills?.substring(
                                                0,
                                                22
                                              )
                                            : astrologer?.all_skills?.length}
                                        </span>
                                      </li>
                                      <li>
                                        Language:
                                        <span>{astrologer?.language}</span>
                                      </li>
                                      <li>
                                        Experience:
                                        <span>
                                          {astrologer?.exp_in_years}years
                                        </span>
                                      </li>
                                      <li>
                                        Call Rate:
                                        <span>
                                          {astrologer?.callCharge}/Min
                                          {/* {astrologer?.conrubute_hrs} */}
                                        </span>
                                      </li>
                                      <li>
                                      Availability:
                                        <span>
                                          {/* {astrologer?.conrubute_hrs} */}
                                          {astrologer?.status}
                                          
                                          
                                        </span>
                                      </li>
                                    </ul>

                                    {astrologer.waiting_queue === 0 ? (
                                      <>
                                        <span
                                          onClick={e =>
                                            this.submitHandler(
                                              e,
                                              astrologer?._id,
                                              astrologer?.mobile,
                                              astrologer,
                                              index
                                            )
                                          }
                                        >
                                          {/* {
                                          this.state.indexnow === index &&
                                          this.state.callingmode !== true ? (
                                            <div className="btn btn-success btn-sm sc">
                                              <i class="fa fa-phone"></i>
                                              -Calling
                                            </div>
                                          ) :
                                            ( */}
                                          <div className="btn btn-primary btn-sm sc">
                                            <i class="fa fa-phone"></i>
                                            -Call
                                          </div>
                                          {/* )} */}
                                        </span>
                                      </>
                                    ) : (
                                      <>
                                        <button className="btn btn-denger wr">
                                          <i class="fa fa-phone">Wait</i>
                                        </button>
                                      </>
                                    )}
                                  </div>
                                </div>
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

          <div>
            <Modal
              style={{ maxWidth: "900px" }}
              size="lg"
              isOpen={this.state.modal}
              toggle={this.toggle}
              // className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Filters</ModalHeader>
              <ModalBody>
                <div className="">
                  <div className="container">
                    <div>
                      {/* <Nav tabs vertical> */}
                      <Row>
                        <Row>
                          <Col
                            className="tabcontentheadings"
                            lg="3"
                            md="3"
                            sm="3"
                          >
                            <Row>
                              <NavItem className="mb-1 mt-1 navList">
                                <a
                                  className={classnames({
                                    active: this.state.activeTab === "1",
                                  })}
                                  onClick={() => {
                                    this.togglefilter("1");
                                  }}
                                >
                                  <Button
                                    style={{
                                      background: `${
                                        this.state.activeTab === "1"
                                          ? "#e3ac2e"
                                          : "none"
                                      }`,
                                    }}
                                    className="filtericon"
                                  >
                                    <span
                                      className="filtertext"
                                      style={{ color: "black" }}
                                    >
                                      {" "}
                                      Skills
                                    </span>
                                  </Button>
                                </a>
                              </NavItem>
                            </Row>
                            <Row>
                              <NavItem className="mb-1 mt-1 navList">
                                <a
                                  className={classnames({
                                    active: this.state.activeTab === "2",
                                  })}
                                  onClick={() => {
                                    this.togglefilter("2");
                                  }}
                                >
                                  <Button className="filtericon">
                                    <span
                                      className="filtertext"
                                      style={{ color: "black" }}
                                    >
                                      Specialisation
                                    </span>
                                  </Button>
                                </a>
                              </NavItem>
                            </Row>
                            <Row>
                              <NavItem className="mb-1 mt-1 navList">
                                <a
                                  className={classnames({
                                    active: this.state.activeTab === "3",
                                  })}
                                  onClick={() => {
                                    this.togglefilter("3");
                                  }}
                                >
                                  <Button className="filtericon">
                                    <span
                                      className="filtertext"
                                      style={{ color: "black" }}
                                    >
                                      Language
                                    </span>
                                  </Button>
                                </a>
                              </NavItem>
                            </Row>
                            <Row>
                              <NavItem className="mb-1 mt-1 navList">
                                <a
                                  className={classnames({
                                    active: this.state.activeTab === "4",
                                  })}
                                  onClick={() => {
                                    this.togglefilter("4");
                                  }}
                                >
                                  <Button className="filtericon">
                                    <span
                                      className="filtertext"
                                      style={{ color: "black" }}
                                    >
                                      Active/Non Active
                                    </span>
                                  </Button>
                                </a>
                              </NavItem>
                            </Row>
                          </Col>
                          <Col className="tabcontentheadings">
                            <div className="tabcontentheading">
                              <TabContent activeTab={this.state.activeTab}>
                                <TabPane className="tabidone" tabId="1">
                                  {AstroSkills &&
                                    AstroSkills?.map(value => (
                                      <FormGroup key={value.id} check>
                                        <Input
                                          onClick={e => {
                                            console.log(e.target.value);
                                            this.setState({
                                              Skilldata: e.target.value,
                                            });
                                          }}
                                          name="radio1"
                                          type="radio"
                                          value={value?.value}
                                        />
                                        <Label check>{value?.value}</Label>
                                      </FormGroup>
                                    ))}
                                </TabPane>
                                <TabPane className="tabidone" tabId="2">
                                  {Specialisation?.map(value => (
                                    <FormGroup key={value.id} check>
                                      <Input
                                        onClick={e =>
                                          this.setState({
                                            astroSpecialzation: e.target.value,
                                          })
                                        }
                                        name="radio2"
                                        type="radio"
                                        value={value?.value}
                                      />{" "}
                                      <Label check>{value?.value}</Label>
                                    </FormGroup>
                                  ))}
                                </TabPane>
                                <TabPane className="tabidone" tabId="3">
                                  {Language?.map(value => (
                                    <FormGroup key={value.id} check>
                                      <Input
                                        onClick={e =>
                                          this.setState({
                                            Astrolanguage: e.target.value,
                                          })
                                        }
                                        name="radio3"
                                        type="radio"
                                        value={value?.value}
                                      />
                                      <Label check>{value?.value}</Label>
                                    </FormGroup>
                                  ))}
                                </TabPane>
                                <TabPane className="tabidone" tabId="4">
                                  {AstroStatus?.map(value => (
                                    <FormGroup key={value.id} check>
                                      <Input
                                        onClick={e =>
                                          this.setState({
                                            AstroStatus: e.target.value,
                                          })
                                        }
                                        name="radio4"
                                        type="radio"
                                        value={value?.value}
                                      />
                                      <Label check>{value?.value}</Label>
                                    </FormGroup>
                                  ))}
                                </TabPane>
                              </TabContent>
                            </div>
                          </Col>
                        </Row>
                      </Row>
                      {/* </Nav> */}
                    </div>
                  </div>
                </div>
                <Row>
                  <Col lg="12">
                    <div className="d-flex justify-content-center">
                      <Button
                        disabled={
                          this.state.Skilldata?.length ||
                          this.state.AstroStatus?.length ||
                          this.state.Astrolanguage?.length ||
                          this.state.astroSpecialzation?.length
                            ? false
                            : true
                        }
                        className="mt-2"
                        onClick={e => this.FilterAstro(e)}
                        color="primary"
                      >
                        Filter Now
                      </Button>
                    </div>
                  </Col>
                </Row>
              </ModalBody>
            </Modal>
          </div>
        </section>
      </LayoutOne>
    );
  }
}

export default AllAstrologerList;
