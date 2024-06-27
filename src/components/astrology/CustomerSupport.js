import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
// import AutoSearch from './autosearch'
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
class CustomerSupport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // data: {},
      TicketbyUser: [],
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    let userId = JSON.parse(localStorage.getItem("user_id"));

    console.log(userId);
    axiosConfig
      .get(`/user/TicketbyUser/${userId}`)
      .then(response => {
        console.log("userChatList", response.data.data);
        if (response.data.status === true) {
          this.setState({
            TicketbyUser: response.data.data,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { TicketbyUser } = this.state;

    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              // backgroundColor: "#ffcc01",
              // width: "100%",
              // padding: "70px 0px",
              // backgroundSize: "cover",
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
                    <h1>Customer Support</h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section className="">
          <Container>
            <Row>
              <Col lg="2">
                <div className="supp-1">
                  <Link to="/customersupportform">
                    <i className="pe-7s-plus"></i>
                    <p>Create Ticket</p>
                  </Link>
                </div>
              </Col>
              <Col lg="10">
                <div className="support-box">
                  <Row>
                    {/* <Col lg="4"> */}
                    {TicketbyUser.length
                      ? TicketbyUser.map((Ticket, index) => {
                          return (
                            <div className="supp-2">
                              <h4>{Ticket?.subject} ?</h4>
                              <ul>
                                <li>
                                  Date/Time: <span>{Ticket?.createdAt}</span>
                                </li>
                                {/* <li>Time: <span>4:00pm</span></li> */}
                                <li>
                                  Ticket No: <span>{Ticket?.ticketNo}</span>
                                </li>
                                <li>
                                  Status: <span>{Ticket?.status}</span>
                                </li>
                              </ul>
                              <div className="supp-3">
                                <Link
                                  to="/customersupportview"
                                  //   {'/customersupportview/' +
                                  //   Ticket?.astroId.astroid._id
                                  // }
                                >
                                  View More
                                </Link>
                              </div>
                            </div>
                          );
                        })
                      : null}
                    {/* </Col> */}
                    {/* <Col lg="4">
                      <div className="supp-2">
                        <h4>lorem ipsum ?

                        </h4>
                        <ul>
                          <li>Date: <span>01/11/2022</span></li>
                          <li>Time: <span>4:00pm</span></li>
                          <li>Ticket No: <span>56565656</span></li>
                          <li>Status: <span></span></li>
                        </ul>
                        <div className="supp-3">
                          <Link to="/customersupportview">View More</Link>
                        </div>
                      </div>
                    </Col>
                    <Col lg="4">
                      <div className="supp-2">
                        <h4>lorem ipsum ?

                        </h4>
                        <ul>
                          <li>Date: <span>01/11/2022</span></li>
                          <li>Time: <span>4:00pm</span></li>
                          <li>Ticket No: <span>56565656</span></li>
                          <li>Status: <span></span></li>
                        </ul>
                        <div className="supp-3">
                          <Link to="/customersupportview">View More</Link>
                        </div>
                      </div>
                    </Col>
                    <Col lg="4">
                      <div className="supp-2">
                        <h4>lorem ipsum ?</h4>
                        <ul>
                          <li>Date: <span>01/11/2022</span></li>
                          <li>Time: <span>4:00pm</span></li>
                          <li>Ticket No: <span>56565656</span></li>
                          <li>Status: <span></span></li>
                        </ul>
                        <div className="supp-3">
                          <Link to="/customersupportview">View More</Link>
                        </div>
                      </div>
                    </Col>
                    <Col lg="4">
                      <div className="supp-2">
                        <h4>lorem ipsum ?

                        </h4>
                        <ul>
                          <li>Date: <span>01/11/2022</span></li>
                          <li>Time: <span>4:00pm</span></li>
                          <li>Ticket No: <span>56565656</span></li>
                          <li>Status: <span></span></li>
                        </ul>
                        <div className="supp-3">
                          <Link to="/customersupportview">View More</Link>
                        </div>
                      </div>
                    </Col>
                    <Col lg="4">
                      <div className="supp-2">
                        <h4>lorem ipsum ?

                        </h4>
                        <ul>
                          <li>Date: <span>01/11/2022</span></li>
                          <li>Time: <span>4:00pm</span></li>
                          <li>Ticket No: <span>56565656</span></li>
                          <li>Status: <span></span></li>
                        </ul>
                        <div className="supp-3">
                          <Link to="/customersupportview">View More</Link>
                        </div>
                      </div>
                    </Col> */}
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
export default CustomerSupport;
