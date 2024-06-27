import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import LayoutOne from "../../../layouts/LayoutOne";
import astrologinbg from "../../../assets/img/astrologin-bg.jpg";
import axiosConfig from "../../../axiosConfig";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import swal from "sweetalert";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allUserList: [],
      allminrechargeList: [],
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
      previousData: "",
    };

    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  // handleVideocall = () => {
  //   console.log(this.state.fullname);
  // };

  handleDeleteList = deleteId => {
    axiosConfig
      .get(`admin/dlt_ChatIntek/${deleteId}`)
      .then(resp => {
        this.getuserList();
      })
      .catch(err => {
        console.log("er", err);
      });
  };

  componentDidMount = () => {
    this.setState({ previousData: this.props.location.state });
    // console.log(this.props.location.state);
    this.getuserList();

    let astroId = localStorage.getItem("videoCallAstro_id");

    axiosConfig
      .get(`/admin/getoneAstro/${astroId}`)
      .then(response => {
        localStorage.setItem("astroname", response?.data?.data?.fullname);
        localStorage.setItem("channelName", response?.data?.data?.channelName);
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
          mobile: response.data.data.mobile,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  getuserList = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    axiosConfig
      .get(`/admin/intekListByUser/${userId}`)
      .then(response => {
        if (response.data.status === true) {
          this.setState({ allUserList: response.data.data });
          this.setState({ allminrechargeList: response.data.data });
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.response);
      });
  };
  handleVideoCalling = id => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let payload = {
      userid: userId,
      astroid: this.state.astroId,
      status: "Requested",
      type: "Video",
    };
    axiosConfig
      .post(`/user/addCallWallet`, payload)
      .then(res => {
        console.log(res.data._id);
        if (res.data.status === true) {
          localStorage.setItem("waitingId", res.data._id);
          this.props.history.push({
            pathname: "/waitingpagevideo",
            state: res.data,
          });
        } else swal("Not Having Enough Balance");
      })
      .catch(err => {
        console.log(err.response.data);
        if (err.response.data.message) {
          alert("Low balance Recharge");
        }
      });
    // })

    // this.props.history.push("/videocall");

    // this.props.history.push({
    //   pathname: "/waitingpagevideo",
    //   state: this.state.previousData,
    // });
  };

  render() {
    const { allUserList } = this.state;
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
                    <h1 style={{ color: "#fff" }}>User List </h1>
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
                <Row>
                  <div className="my-1">
                    <Link
                      to="/UserRequestFormVideoCall"
                      className="btn btn-denger wr"
                    >
                      <button className="btn btn-denger wr">
                        Add New Intake Form
                      </button>
                    </Link>
                  </div>
                  {allUserList?.length ? (
                    allUserList?.map(list => {
                      return (
                        <Col md="4" key={list._id} className="mt-1">
                          <div className="card ">
                            <div className="card-body ">
                              <ul>
                                <li className="">
                                  FirstName:
                                  <span>{list.firstname}</span>
                                  <div
                                    className="delete"
                                    style={{
                                      float: "right",
                                      cursor: "pointer",
                                    }}
                                    onClick={() =>
                                      this.handleDeleteList(list._id)
                                    }
                                  >
                                    <i
                                      class="fa fa-trash-o"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                </li>
                                {/* <li>
                                    LastName:
                                    <span>{list.lastname}</span>
                                  </li> */}
                                <li>
                                  BirthPlace:
                                  <span>{list.birthPlace}</span>
                                </li>
                                <li>
                                  Date Of Time:
                                  <span>{list.date_of_time}</span>
                                </li>
                                <li>
                                  Date Of Birth:
                                  <span>{list.dob}</span>
                                </li>
                                <li>
                                  Gender:
                                  <span>{list.gender}</span>
                                </li>
                                <li>
                                  Mobile:
                                  <span>{list.mobile}</span>
                                </li>
                                <li>
                                  Occupation:
                                  <span>{list.occupation}</span>
                                </li>
                                <li>
                                  Marital Status:
                                  <span>{list.marital_status}</span>
                                </li>
                                {list.p_birthPlace ? (
                                  <li>
                                    Partner BirthPlace:
                                    <span>{list.p_birthPlace}</span>
                                  </li>
                                ) : null}
                                {list.p_date_of_time ? (
                                  <li>
                                    Partner Date Of Time:
                                    <span>{list.p_date_of_time}</span>
                                  </li>
                                ) : null}
                                {list.p_firstname ? (
                                  <li>
                                    Partner First Name:
                                    <span>{list.p_firstname}</span>
                                  </li>
                                ) : null}
                                {list.p_lastname ? (
                                  <li>
                                    Partner Last Name:
                                    <span>{list.p_lastname}</span>
                                  </li>
                                ) : null}

                                {/* <Link to="#"> */}
                                <div style={{ float: "right" }}>
                                  <button
                                    className="btn btn-denger wr"
                                    onClick={() =>
                                      this.handleVideoCalling(list._id)
                                    }
                                  >
                                    Start VideoCall
                                  </button>
                                </div>
                                {/* </Link> */}
                              </ul>
                            </div>
                          </div>
                        </Col>
                      );
                    })
                  ) : (
                    <h3 className="text-center">No Intake Form Available</h3>
                  )}
                </Row>
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
export default VideoList;
