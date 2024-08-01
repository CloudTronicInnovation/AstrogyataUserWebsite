import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import LayoutOne from "../../../layouts/LayoutOne";
import astrologinbg from "../../../assets/img/astrologin-bg.jpg";
import axiosConfig from "../../../axiosConfig";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import swal from "sweetalert";
import "./ChatList.scss";

class ChatList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allUserList: [],
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

  handleDeleteList = (deleteId) => {
    axiosConfig
      .get(`admin/dlt_ChatIntek/${deleteId}`)
      .then((resp) => {
        this.getuserList();
        console.log("resp", resp.data);
      })
      .catch((err) => {
        console.log("er", err);
      });
  };

  componentDidMount = () => {
    this.getuserList();
  };
  getuserList = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    // console.log("userId", userId);
    axiosConfig
      .get(`/admin/intekListByUser/${userId}`)
      .then((response) => {
        if (response.data.status === true) {
          this.setState({ allUserList: response.data.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleChating = (selectedId) => {
    this.handleBalacecheck();
    // let userId = JSON.parse(localStorage.getItem("user_id"));
    // let mobileNo = JSON.parse(localStorage.getItem("user_mobile_no"));
    // console.log("USer", mobileNo);
    // let object = {
    //   chatIntekId: selectedId,
    //   userId: userId,
    //   astroId: this.state.astroId,
    // };
    // let obj = {
    //   userid: userId,
    //   astroid: this.state.astroId,
    //   From: this.state.mobile, //astro no
    //   To: mobileNo, //user no
    // };
    // console.log("obj", obj);
    // axiosConfig
    //   .post(`/user/selectIntakeForm`, object)
    //   .then(ress => {
    //     if (ress.data.status === true) {
    //       this.props.history.push("/chatApp");
    //     }
    //     console.log("asss", ress.data.status);
    //   })

    //   .catch(err => {
    //     console.log("err", err);
    //   });
  };

  handleBalacecheck = (id, list) => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    localStorage.setItem("UserChatData", JSON.stringify(list));
    let astroId = localStorage.getItem("astroId");
    console.log("astroId", astroId);
    console.log(list);

    const data = {
      userid: userId,
      astroid: astroId,
      userintakeid: list._id,
      type: "Chat",
    };

    axiosConfig
      .post(`/user/addCallWallet`, data)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          this.props.history.push({
            pathname: "/waitingpagechat",
            state: response.data,
          });
        } else swal("Recharge", "you don't have enough Balance");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChatWithoutDetails = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let astroId = localStorage.getItem("astroId");
    localStorage.removeItem("UserChatData");

    const data = {
      userid: userId,
      astroid: astroId,
      type: "Chat",
    };

    axiosConfig
      .post(`/user/addCallWallet`, data)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          this.props.history.push({
            pathname: "/waitingpagechat",
            state: response.data,
          });
        } else swal("Recharge", "you don't have enough Balance");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getBirthPlace(data) {
    // check if object
    const flag = data.includes("{");
    if (flag) {
      const obj = JSON.parse(data);
      return `${obj?.name}, ${obj.stateCode}`;
    }
    return data;
  }
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
                    <h1 style={{ color: "#fff" }}>User Chat List </h1>
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
                  <div
                    className="my-1"
                    style={{ display: "flex", alignItems: "baseline" }}
                  >
                    <div className="my-1">
                      <button
                      class="btn btn-secondary"
                        onClick={this.handleChatWithoutDetails}
                      >
                        Chat Without Birth Details
                      </button>
                      {/* </Link> */}
                    </div>
                    <div className="my-1">
                      <Link to="/userrequestform" className="btn btn-denger wr">
                        <button className="btn btn-denger wr">
                          Add New Birth Details
                        </button>
                      </Link>
                    </div>
                  </div>
                  {allUserList?.length ? (
                    allUserList?.map((list) => {
                      console.log(list);
                      return (
                        <Col md="4" key={list._id} className="mt-1">
                          <div className="card ">
                            <div className="card-body ">
                              <ul>
                                <li className="">
                                  FirstName:
                                  <span> {list.firstname.toUpperCase()}</span>
                                  {/* <li>
                                    <img
                                      src={list.file}
                                      alt=""
                                      class="rounded thumbnail"
                                      style={{
                                        width: "100px",
                                        height: "100px",
                                        float: "right",
                                        objectFit: "cover",
                                        objectPosition: "center",
                                        position: "absolute",
                                        top: "9%",
                                        right: "9%",
                                        
                                      }}
                                     
                                    />
                                  </li>  */}
                                </li>

                                <li>
                                  BirthPlace:
                                  <span>
                                    {" "}
                                    {this.getBirthPlace(list.birthPlace)}
                                  </span>
                                </li>
                                <li>
                                  Date Of Time:
                                  <span> {list.date_of_time}</span>
                                </li>
                                <li>
                                  Date Of Birth:
                                  <span> {list.dob}</span>
                                </li>
                                <li>
                                  Gender:
                                  <span> {list.gender}</span>
                                </li>
                                <li>
                                  Mobile:
                                  <span> {list.mobile}</span>
                                </li>
                                {/* <li>
                                  Occupation:
                                  <span> {list.occupation}</span>
                                </li>
                                <li>
                                  Marital Status:
                                  <span> {list.marital_status}</span>
                                </li> */}
                                {list.p_birthPlace ? (
                                  <li>
                                    Partner BirthPlace:
                                    <span> {list.p_birthPlace}</span>
                                  </li>
                                ) : null}
                                {list.p_date_of_time ? (
                                  <li>
                                    Partner Date Of Time:
                                    <span> {list.p_date_of_time}</span>
                                  </li>
                                ) : null}
                                {list.p_firstname ? (
                                  <li>
                                    Partner First Name:
                                    <span> {list.p_firstname}</span>
                                  </li>
                                ) : null}
                                {list.p_lastname ? (
                                  <li>
                                    Partner Last Name:
                                    <span> {list.p_lastname}</span>
                                  </li>
                                ) : null}
                                <div
                                  className="delete"
                                  style={{
                                    float: "left",
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    this.handleDeleteList(list._id)
                                  }
                                >
                                  <button type="button" class="btn btn-danger">
                                    {" "}
                                    <i
                                      class="fa fa-trash-o"
                                      aria-hidden="true"
                                      style={{ color: "white" }}
                                    ></i>
                                  </button>
                                </div>

                                <div style={{ float: "right" }}>
                                  <button
                                    className="btn btn-denger wr"
                                    onClick={() =>
                                      this.handleBalacecheck(list._id, list)
                                    }
                                  >
                                    Start Chat
                                  </button>
                                </div>
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
export default ChatList;
