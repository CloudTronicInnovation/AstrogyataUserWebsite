import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import axiosConfig from "../../axiosConfig";
import PrettyRating from "pretty-rating-react";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import AstroProfileVideo from "./AstroProfileVideo";
import {
  astroNotification,
  removeNotification,
} from "../../redux/actions/astoStatusAction";
import swal from "sweetalert";
import { connect } from "react-redux";

const colors = {
  star: ["#d9ad26", "#d9ad26", "#434b4d"],
};
// const [notificationCount,setNotificationCoount]=useState(0);
// const dispath = useDispatch();

class AstrologerDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notificationCount: 0,
      intervalid: "",
      allminrechargeList: [],
      GtRating: [],
      data: {},
      fullname: "",
      all_skills: "",
      language: "",
      long_bio: "",
      Exp: "",
      sunday: "",
      monday: "",
      friday: "",
      thursday: "",
      tuesday: "",
      wednesday: "",
      saturday: "",
      To: "",
      callCharge: "",
      Form: "",
      astrid: "",
      userid: "",
      astroMobile: "",
      Gallary: [],
      astroId: "",
      astro: "",
      avg_rating: [false],
      useramount: "",
    };

    this.state = {
      modal: false,
      follow: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleStartChat = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    // latest code
    if (userId !== "" && userId !== null) {
      if (this.state.astroData?.status === "Online") {
        let astrocharge = this.state.astroData?.callCharge * 5;
        let useramount = this.state.useramount;
        if (useramount > astrocharge) {
          this.props.history.push("/ChatListData");
        } else
          swal(
            "Recharge Now",
            "You Donot have Enough balance to Make This Chat",
            {
              buttons: {
                cancel: "Recharge Now",
                catch: { text: "Cancel ", value: "catch" },
              },
            }
          ).then((value) => {
            switch (value) {
              case "catch":
                break;
              default:
                this.props.history.push("/walletmoney");
            }
          });
      } else {
        let requireBalance = this.state.astroData?.callCharge * 5;
        let useramount = this.state.useramount;
        if (useramount > requireBalance) {
          this.props.history.push("/ChatListData");
          // swal(
          //   `Astrologer is Busy`,
          //   "Do You Want to Be in queue ",

          //   {
          //     buttons: {
          //       cancel: "Be in queue",
          //       catch: { text: "Cancel ", value: "catch" },
          //     },
          //   }
          // ).then(value => {
          //   switch (value) {
          //     case "catch":
          //       break;
          //     default:
          //       let astroid = localStorage.getItem("astroId");
          //       let userId = JSON.parse(localStorage.getItem("user_id"));

          //       const payload = {
          //         userId: userId,
          //         callType: "Chat",
          //       };

          //       axiosConfig
          //         .post(`/user/make_another_call/${astroid}`, payload)
          //         .then(res => {})
          //         .catch(err => {
          //           console.log(err);
          //         });
          //   }
          // });
        } else
          swal(
            "Recharge Now",
            "You Donot have Enough balance to Make This Call",
            {
              buttons: {
                cancel: "Recharge Now",
                catch: { text: "Cancel ", value: "catch" },
              },
            }
          ).then((value) => {
            switch (value) {
              case "catch":
                // swal("Sure Want to cancel it");
                break;
              default:
                this.props.history.push("/walletmoney");
            }
          });
      }
    } else swal("Need To Login First");
  };

  handleStartCall = () => {
    // let recharge = this.state.astroData?.callCharge * 5;
    console.log("Callinggggg", this.state.astroData.status);
    let userId = JSON.parse(localStorage.getItem("user_id"));
    if (userId !== "" && userId !== null) {
      if (this.state.astroData?.status === "Online") {
        let astrocharge = this.state.astroData?.callCharge * 5;
        let useramount = this.state.useramount;
        if (useramount > astrocharge) {
          this.props.history.push("/CallListData");
        } else
          swal(
            "Recharge Now",
            "You Donot have Enough balance to Make This Call",
            {
              buttons: {
                cancel: "Recharge Now",
                catch: { text: "Cancel ", value: "catch" },
              },
            }
          ).then((value) => {
            switch (value) {
              case "catch":
                break;
              default:
                this.props.history.push("/walletmoney");
            }
          });
      } else {
        let astrocharge = this.state.astroData?.callCharge * 5;
        let useramount = this.state.useramount;
        if (useramount > astrocharge) {
          swal(
            `Astrologer is Busy`,
            "Do You Want to Be in queue ",

            {
              buttons: {
                cancel: "Be in queue",
                catch: { text: "Cancel ", value: "catch" },
              },
            }
          ).then((value) => {
            switch (value) {
              case "catch":
                break;
              default:
                let astroid = localStorage.getItem("astroId");
                // let userId = JSON.parse(localStorage.getItem("user_id"));
                let payload = {
                  userId: this.state.UserId,
                  callType: "VoiceCall",
                };

                axiosConfig
                  .post(`/user/make_another_call/${astroid}`, payload)
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
            }
          });
        } else swal("User Not Have enough Balance To Connect with Astrologer");
      }
    } else {
      swal("Need to Login first");
      window.location.href = "/";
      // this.setState({ modal: true });
    }
  };

  handleVideocall = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    if (userId !== "" && userId !== null) {
      this.props.history.push("/VideoListData");
    } else {
      swal("Need To Login First");
    }
  };

  componentDidMount = () => {
    let { id } = this.props.match.params;
    let userId = JSON.parse(localStorage.getItem("user_id"));
    localStorage.setItem("astroId", id);
    localStorage.setItem("videoCallAstro_id", id);
    this.checkAstroStatus2();
    this.handleStartViewOneAstro();

    // const astroId = localStorage.getItem("videoCallAstro_id");
    //  const { id } = this.props.match.params;
    //  const userId = JSON.parse(localStorage.getItem("user_id"));
    axiosConfig
      .get(`/user/viewoneuser/${userId}`)
      .then((res) => {
        this.setState({ useramount: res.data?.data?.amount });
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({ UserId: userId });
    axiosConfig
      .get(`/user/allRevieAstro/${id}`)
      .then((res) => {
        this.setState({ GtRating: res.data.data });
      })
      .catch((err) => console.log(err));

    axiosConfig
      .get(`/user/getone_followers/${userId}/${id}`)
      .then((resl) => {
        this.setState({ follow: resl.data.data.follow });
      })
      .catch((err) => {
        console.log("eeeeeee", err.response.data.status);
      });
    axiosConfig
      .get(`/admin/getoneAstro/${id}`)
      .then((response) => {
        localStorage.setItem("astroname", response?.data?.data?.fullname);
        localStorage.setItem("astroNo", response?.data?.data?.mobile);
        console.log("viewOne", response?.data?.data);
        this.setState({
          fullname: response.data.data.fullname,
          all_skills: response.data.data.all_skills,
          language: response.data.data.language,
          img: response.data.data.img[0],
          avg_rating: response.data.data.avg_rating,
          Exp: response.data.data.Exp,
          callCharge: response.data.data.callCharge,
          long_bio: response.data.data.long_bio,
          msg: response.data.data.msg,
          astroMobile: response?.data?.data?.mobile,
          status: response?.data?.data?.status,
          exp_in_years: response.data.data.exp_in_years,
          astroId: response?.data?.data?._id,
          sunday: response.data.data.sunday,
          monday: response.data.data.monday,
          friday: response.data.data.friday,
          tuesday: response.data.data.tuesday,
          thursday: response.data.data.thursday,
          saturday: response.data.data.saturday,
          wednesday: response.data.data.wednesday,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentWillUnmount(){
    clearInterval(sessionStorage.getItem("checkastrointervalid"));
  }

  handleFollow = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let { id } = this.props.match.params;

    if (userId) {
      if (this.state.follow !== true) {
        this.setState({ follow: false });
        let followData = {
          astroid: id,
          userid: userId,
          follow: true,
        };
        axiosConfig
          .post(`/user/addAstroFollowers`, followData)
          .then((resp) => {
            this.setState({ follow: resp.data.data.follow });
          })
          .catch((error) => {
            console.log("Error", error);
          });
      } else {
        axiosConfig
          .get(`/user/unfollow_astrologer/${userId}/${id}`)
          .then((result) => {
            this.setState({ follow: result });
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
    } else {
      swal("Alert", "Need To Login First");
    }
  };
  checkAstroStatus = () => {
    const astroid = localStorage.getItem("astro_id_to_notify");

    if (astroid != null) {
      const astroCheckInterval = setInterval(() => {
        axiosConfig
          .get(`/admin/getoneAstro/${astroid}`)
          .then((response) => {
            if (response.data?.data?.status === "Online") {
              this.setState({ notificationCount: 1 });
              const { fullname, status, _id } = response.data.data;
              this.props.astroNotification({
                fullname,
                status,
                _id,
                msg: "is now avaible to talk",
              });
              localStorage.removeItem("astro_id_to_notify");
              clearInterval(astroCheckInterval);
            }
            if (astroid == null) {
              clearInterval(astroCheckInterval);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }, 5000);
      localStorage.setItem("intervalid", astroCheckInterval);
    }

    if (astroid == null) {
      const intervalid = localStorage.getItem("intervalid");
      clearInterval(intervalid);
      this.props.removeNotification();
    }
  };
  handleGetNotify() {
    if (localStorage.getItem("astro_id_to_notify") == null) {
      localStorage.setItem(
        "astro_id_to_notify",
        `${this.props.match.params.id}`
      );
      this.checkAstroStatus();
    }
    // remove localstroge with key astro_id
    else {
      localStorage.removeItem("astro_id_to_notify");
      this.checkAstroStatus();
    }
  }

  checkAstroStatus2(){
    
    const { id } = this.props.match.params;
      axiosConfig
        .get(`/admin/getoneAstro/${id}`)
        .then((response) => {
          localStorage.setItem("astroname", response?.data?.data?.fullname);
          this.setState({ astroData: response.data.data });
          this.setState({
            all_skills: response.data.data.all_skills,
            language: response.data.data.language,
            img: response.data.data.img[0],
            avg_rating: response.data.data.avg_rating,
            Exp: response.data.data.Exp,
            callCharge: response.data.data.callCharge,
            long_bio: response.data.data.long_bio,
            msg: response.data.data.msg,
            astroMobile: response?.data?.data?.mobile,
            status: response?.data?.data?.status,
            exp_in_years: response.data.data.exp_in_years,
            astroId: response?.data?.data?._id,
            sunday: response.data.data.sunday,
            monday: response.data.data.monday,
            friday: response.data.data.friday,
            tuesday: response.data.data.tuesday,
            thursday: response.data.data.thursday,
            saturday: response.data.data.saturday,
            wednesday: response.data.data.wednesday,
          });
        })
        .catch((error) => {
          console.log(error);
        });
  }

  handleStartViewOneAstro = () => {
    console.log('handle1');
  const intervalid=  setInterval(() => {
    console.log('handle2');

      this.checkAstroStatus2();
    }, 5000);
    sessionStorage.setItem("checkastrointervalid",intervalid);
  };
  render() {
    const icons = {
      star: {
        complete: farStar,
        half: faStarHalfAlt,
        empty: farStar,
      },
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
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h1>Astrologer Detail</h1>
                    <p></p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <div className="col-lg-12 col-md-12 mb-30">
          <div className="category-home">
            <section className="pt-0">
              <Container>
                <section className="dt-astro">
                  <Row>
                    <Row>
                      <div className="d-flex justify-content-end mr-2">
                        <Button
                          onClick={() => this.handleFollow()}
                          className="btn-as st"
                        >
                          {this.state.follow === true ? "Following" : "Follow"}
                        </Button>
                      </div>
                    </Row>
                    <Col md="3">
                      <div className="as-pic mt-30">
                        <img src={this.state?.img} alt="" className="pic-as" />
                      </div>
                    </Col>
                    <Col md="9">
                      <div className="as-content mt-60">
                        <h3>{this.state.fullname}</h3>

                        <div className="review-rating">
                          <PrettyRating
                            value={this.state.avg_rating}
                            icons={icons.star}
                            setColors={["#d9ad26", "#d9ad26", "#434b4d"]}
                          />
                        </div>

                        <ul>
                          <li>
                            Language:
                            <span>{this.state.language}</span>
                          </li>

                          <li>
                            Specility: <span> {this.state.all_skills}</span>
                          </li>
                          <li>
                            Experience:
                            <span>{this.state.exp_in_years}year</span>
                          </li>
                          <li>
                            Call Rate: <span>{this.state.callCharge}/Min</span>
                          </li>
                          {this.state.astroData?.waiting_tym > 0 ? (
                            <li>
                              Waiting Time :
                              <span style={{ color: "green" }}>
                                <b> {this.state.astroData?.waiting_tym} Min </b>
                              </span>
                            </li>
                          ) : null}

                          <li>
                            Availability:
                            {this.state.status === "Online" ? (
                              <>
                                <span style={{ color: "green" }} className="">
                                  <b> {this.state.astroData?.status}</b>
                                </span>
                              </>
                            ) : (
                              <>
                                <span style={{ color: "red" }} className="">
                                  <b> {this.state.astroData?.status}</b>
                                </span>
                              </>
                            )}
                          </li>
                        </ul>
                      </div>

                      <Row>
                        <Col md="3" className="mt-30">
                          <Button
                            disabled={
                              this.state.status === "Online" ? false : true
                            }
                            // style={{
                            //   backgroundColor:
                            //     this.state.status === "offline"
                            //       ? "#9f8211"
                            //       : "primary",
                            // }}
                            className="btn-as st"
                            onClick={this.handleStartChat}
                          >
                            <i
                              className="fa fa-commenting"
                              aria-hidden="true"
                            ></i>

                            <span className="m-1"> Start Chat</span>
                          </Button>
                        </Col>
                        <Col md="3" className="mt-30">
                          <Button
                            disabled={
                              this.state.status === "offline" ? true : false
                            }
                            // style={{
                            //   backgroundColor:
                            //     this.state.status === "offline"
                            //       ? "#9f8211"
                            //       : "primary",
                            // }}
                            className="btn-as st"
                            onClick={() => this.handleStartCall()}
                          >
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <span className="m-2">Start Call</span>
                          </Button>
                        </Col>
                        {/* <Col md="3" className="mt-30">
                          <Button
                            disabled={
                              this.state.status === "offline" ? true : false
                            }
                            // style={{
                            //   backgroundColor:
                            //     this.state.status === "offline"
                            //       ? "#9f8211"
                            //       : "primary",
                            // }}
                            className="btn-as st"
                            onClick={() => this.handleVideocall()}
                          >
                            <i
                              class="fa fa-video-camera"
                              aria-hidden="true"
                            ></i>

                            <span className="m-1"> Start Video</span>
                          </Button>
                        </Col> */}
                       <Col md="3" className="mt-30">
                         {
                          (this.state.status === "Offline")?
                          <Button
                            disabled={
                              this.state.status === "Online" ? true : false
                            }
                           

                            onClick={() => this.handleGetNotify()}
                            className="btn-as st"
                            // onClick={this.handleStartChat}
                          >
                            {localStorage.getItem("astro_id_to_notify") ==
                            null ? (
                              <>
                                {" "}
                                <i
                                  className="fa fa-bell-o"
                                  aria-hidden="true"
                                ></i>
                                <span className="m-1">Get Nofity</span>
                              </>
                            ) : (
                              <>
                                {" "}
                                <i
                                  className="fa fa-bell-o"
                                  aria-hidden="true"
                                ></i>
                                <span className="m-1">Remove Nofity</span>
                              </>
                            )}
                          </Button>:null
                         } 
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <div>
                    <AstroProfileVideo id={this.state.astro} />
                  </div>
                </section>
                <section className="mt-50 mb-30">
                  <div
                    className="product-anotherinfo-wrapper mt-4"
                    style={{ border: "1px solid#ccc", padding: "20px 10px" }}
                  >
                    <h3>AboutUs</h3>
                    <p>{this.state.long_bio}</p>
                  </div>

                  <div
                    className="product-anotherinfo-wrapper mt-5"
                    style={{ border: "1px solid#ccc", padding: "20px 10px" }}
                  >
                    <h3>
                      RATINGS <i class="fa fa-star"></i>
                    </h3>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="row">
                          <div className="col-md-4">
                            <h5>User Review </h5>
                          </div>
                        </div>

                        <div className="review-wrapper">
                          {this.state.GtRating !== " " ? (
                            <>
                              {this.state.GtRating?.map((value) => (
                                <div key={value?._id} className="single-review">
                                  {" "}
                                  <div className="review-img">
                                    <img
                                      src={value?.userid?.userimg[0]}
                                      alt=""
                                    />
                                  </div>
                                  <div className="review-content">
                                    <div className="review-top-wrap">
                                      <div className="review-left">
                                        <div className="review-name">
                                          <h4
                                            style={{
                                              textTransform: "capitalize",
                                              margin: 5,
                                            }}
                                          >
                                            {value?.userid?.fullname}
                                          </h4>
                                        </div>
                                      </div>
                                      <div className="review-rating">
                                        <PrettyRating
                                          disabled
                                          value={value?.rating}
                                          icons={icons.star}
                                          colors={colors.star}
                                        />
                                      </div>
                                    </div>
                                    <div className="review-bottom">
                                      <p
                                        style={{
                                          display: "inline",
                                          textTransform: "capitalize",
                                        }}
                                      >
                                        {value?.comment}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="avai-box text-center">
                          <h3>Availability</h3>
                          <div className="tab-bxx p-1">
                            <Tab.Container defaultActiveKey="">
                              <Nav variant="pills" className="rt_tab">
                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_one"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Monday
                                  </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_two"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Tuesday
                                  </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_three"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Wednesday
                                  </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_four"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Thursday
                                  </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_five"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Friday
                                  </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_six"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Saturday
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_sev"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Sunday
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>

                              <Tab.Content className="description-review-bottom">
                                <Tab.Pane eventKey="tab_one">
                                  {this.state.monday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.monday?.map((value) => (
                                            <span key={value?._id}>
                                              {value}
                                              {"  "}
                                            </span>
                                          ))}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          <span>Not available </span>
                                        </p>
                                      </div>
                                    </>
                                  )}
                                </Tab.Pane>

                                <Tab.Pane eventKey="tab_two">
                                  {this.state.tuesday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.tuesday?.map((value) => (
                                            <span key={value?._id}>
                                              {value}
                                              {"  "}
                                            </span>
                                          ))}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          <span>Not available </span>
                                        </p>
                                      </div>
                                    </>
                                  )}
                                </Tab.Pane>

                                <Tab.Pane eventKey="tab_three">
                                  {this.state.wednesday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.wednesday?.map(
                                            (value) => (
                                              <span key={value?._id}>
                                                {value}
                                              </span>
                                            )
                                          )}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      {" "}
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          <span>Not available </span>
                                        </p>
                                      </div>
                                    </>
                                  )}
                                </Tab.Pane>

                                <Tab.Pane eventKey="tab_four">
                                  {this.state.thursday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.thursday?.map((value) => (
                                            <span key={value?._id}>
                                              {value}
                                            </span>
                                          ))}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <>
                                        <div
                                          className=""
                                          style={{
                                            width: "100%",
                                            paddingBottom: "30px",
                                            paddingTop: "10px",
                                          }}
                                        >
                                          <p
                                            style={{
                                              backgroundColor: "rgb(25 120 4)",
                                              color: "#fff",
                                              padding: "10px",
                                              borderRadius: "50px",
                                              fontSize: "16px",
                                              fontWeight: "600",
                                              width: "400px",
                                              margin: "0  auto",
                                            }}
                                          >
                                            <span>Not available </span>
                                          </p>
                                        </div>
                                      </>
                                    </>
                                  )}
                                </Tab.Pane>

                                <Tab.Pane eventKey="tab_five">
                                  {this.state.friday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.friday?.map((value) => (
                                            <span key={value?._id}>
                                              {value}
                                              {"  "}
                                            </span>
                                          ))}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <>
                                        <div
                                          className=""
                                          style={{
                                            width: "100%",
                                            paddingBottom: "30px",
                                            paddingTop: "10px",
                                          }}
                                        >
                                          <p
                                            style={{
                                              backgroundColor: "rgb(25 120 4)",
                                              color: "#fff",
                                              padding: "10px",
                                              borderRadius: "50px",
                                              fontSize: "16px",
                                              fontWeight: "600",
                                              width: "400px",
                                              margin: "0  auto",
                                            }}
                                          >
                                            <span>Not available </span>
                                          </p>
                                        </div>
                                      </>
                                    </>
                                  )}
                                </Tab.Pane>

                                <Tab.Pane eventKey="tab_six">
                                  {this.state.saturday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.saturday?.map((value) => (
                                            <span key={value?._id}>
                                              {value}
                                              {"  "}
                                            </span>
                                          ))}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <>
                                        <div
                                          className=""
                                          style={{
                                            width: "100%",
                                            paddingBottom: "30px",
                                            paddingTop: "10px",
                                          }}
                                        >
                                          <p
                                            style={{
                                              backgroundColor: "rgb(25 120 4)",
                                              color: "#fff",
                                              padding: "10px",
                                              borderRadius: "50px",
                                              fontSize: "16px",
                                              fontWeight: "600",
                                              width: "400px",
                                              margin: "0  auto",
                                            }}
                                          >
                                            <span>Not available </span>
                                          </p>
                                        </div>
                                      </>
                                    </>
                                  )}
                                </Tab.Pane>

                                <Tab.Pane eventKey="tab_sev">
                                  {this.state.sunday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.sunday?.map((value) => (
                                            <span key={value?._id}>
                                              {value}
                                            </span>
                                          ))}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <>
                                        <div
                                          className=""
                                          style={{
                                            width: "100%",
                                            paddingBottom: "30px",
                                            paddingTop: "10px",
                                          }}
                                        >
                                          <p
                                            style={{
                                              backgroundColor: "rgb(25 120 4)",
                                              color: "#fff",
                                              padding: "10px",
                                              borderRadius: "50px",
                                              fontSize: "16px",
                                              fontWeight: "600",
                                              width: "400px",
                                              margin: "0  auto",
                                            }}
                                          >
                                            <span>Not available </span>
                                          </p>
                                        </div>
                                      </>
                                    </>
                                  )}
                                </Tab.Pane>
                              </Tab.Content>
                            </Tab.Container>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </Container>
            </section>
          </div>
        </div>

        {/* modal for recharge*/}
        <Modal
          size="md"
          style={{ maxWidth: "600px", width: "100%" }}
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader className="wr-3" toggle={this.toggle}>
            <h2 className="wr-4">Recharge Now</h2>
          </ModalHeader>
          <ModalBody>
            <div className="Wr-1">
              <h3>
                Minimum balance of 5 minutes (INR 25.0) is required to start
                call with RajnishM
              </h3>
              <Link className="wr-5">
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </Link>
              <Link className="wr-6" to="/walletmoney">
                <Button>Recharge</Button>
              </Link>
            </div>
          </ModalBody>
        </Modal>
      </LayoutOne>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    astroNotification: (data) => dispatch(astroNotification(data)),
    removeNotification: () => dispatch(removeNotification()),
  };
};
export default connect(null, mapDispatchToProps)(AstrologerDetail);

export function getUserID() {
  const name = JSON.parse(localStorage.getItem("userData"));
  const names = name.fullname;
  return names;
}