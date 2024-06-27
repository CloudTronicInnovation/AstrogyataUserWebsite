import React from "react";
import Stopwatch from "./Stopwatch";
// import { Link } from 'react-router-dom'
import { Container, Row, Col } from "reactstrap";
import tilak from "../../assets/img/tilak.png";
import "../../assets/scss/chat.scss";
import LayoutOne from "../../layouts/LayoutOne";
// import { useState } from 'react'
import swal from "sweetalert";
import axiosConfig from "../../axiosConfig";
class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      astroid: "",
      msg: "",
      chatMsgList: [],
      userId: "",
      roomid: "",
    };
  }
  componentDidMount = () => {
    let astroid = JSON.parse(localStorage.getItem("astroId"));

    // console.log(id);
    axiosConfig
      .get(`/admin/getoneAstro/${astroid}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          fullname: response.data.data.fullname,
          all_skills: response.data.data.all_skills,
          language: response.data.data.language,
          img: response.data.data.img[0],
          status: response.data.status,
          // Exp: response.data.data.Exp,
          // exp_in_years: response.data.data.exp_in_years,
          // callCharge: response.data.data.callCharge,
          // long_bio: response.data.data.long_bio,
          // msg: response.data.data.msg,
          // astroMobile: response?.data?.data?.mobile,
          status: response?.data?.data?.status,
          astroId: response?.data?.data?._id,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  submitHandler = (e, astroid, userId, roomid) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    let user_id = JSON.parse(localStorage.getItem("user_id"));
    let obj = {
      astroId: id,
      astroid: astroid,
      roomId: id,
      roomid: roomid,
      userid: user_id,
      msg: this.state.msg,
    };

    axiosConfig
      .post(`/user/addchat/${user_id}`, obj)
      .then(response => {
        console.log("@@@@@", response?.data?.data?.roomid);
        this.setState({ msg: "" });
        this.setState({ roomid: response?.data?.data?.roomid });
        if (response?.data?.data?.roomid !== undefined) {
          axiosConfig
            .get(`/user/allchatwithuser/` + response?.data?.data?.roomid)
            .then(response => {
              console.log("ROOMID", response.data.data);
              this.setState({
                msg: "",
                chatMsgList: response?.data?.data,
              });
            })
            .catch(error => {
              console.log(error);
            });
        }
        swal("Success!", "Submitted SuccessFull!", "success");
        //window.location.reload('/askQuestion')
      })
      .catch(error => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };
  handleChange = e => {
    this.setState({
      msg: e.target.value,
    });
  };

  render() {
    const { chatMsgList } = this.state;
    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              backgroundColor: "#FFD59E",
              width: "100%",
              padding: "70px 0px",
              backgroundSize: "cover",
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h1>Chat With Best Astrologers</h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section>
          <Container>
            <div className="">
              <div className="">
                <div className="col-md-12 col-xl-12 chat">
                  <div
                    className="card cardchat"
                    style={{
                      backgroundColor: "#f0f0f0",
                      width: "100%",
                    }}
                  >
                    <div className="card-header msg_head">
                      <div className="d-flex ">
                        <div className="img_cont">
                          <img
                            src={this.state?.img}
                            alt=""
                            className="rounded-circle user_st"
                          />

                          {/* <img
                            className="rounded-circle user_st"
                            src={tilak}
                            alt="userpic"
                          /> */}
                          <span className="online_icon" />
                        </div>
                        <div className="user_info">
                          <span>Tilak</span>
                          <Stopwatch />
                          <p>typing....</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      {chatMsgList.length > 0
                        ? chatMsgList.map((chatMsg, index) => {
                            return (
                              <div>
                                <div className="card-body msg_card_body">
                                  <div className="d-flex justify-content-start mb-4">
                                    <div className="msg_cotainer">
                                      {chatMsg.msg_reply}
                                      <span className="msg_time">
                                        8:40 AM, Today
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="card-body msg_card_body">
                                  <div className="d-flex justify-content-end mb-4">
                                    <div className="msg_cotainer_send">
                                      {chatMsg.msg}
                                      <span className="msg_time_send">
                                        8:55 AM, Today
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        : ""}
                    </div>
                    <div className="card-footer">
                      <div className="input-group">
                        <div className="input-group-append">
                          <span className="input-group-text attach_btn">
                            <i class="fa fa-paperclip" aria-hidden="true"></i>
                          </span>
                        </div>
                        <textarea
                          name
                          className="form-control type_msg"
                          placeholder="Type your message..."
                          onChange={e => {
                            this.handleChange(e);
                          }}
                          value={this.state.msg}
                          defaultValue={""}
                        />
                        <div className="input-group-append">
                          <span
                            className="input-group-text send_btn"
                            onClick={e =>
                              this.submitHandler(
                                e,
                                this.state.astroId,
                                this.state.userId,
                                this.state.roomid
                              )
                            }
                          >
                            <i
                              class="fa fa-location-arrow"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default ChatList;
