import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
// import AutoSearch from './autosearch'
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import Form from "react-bootstrap/Form";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
class CustomerSupportView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: "",
      subject: "",
      createdAt: "",
      astroQuesList: [],
      userId: "",
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;

    // console.log('jdhgkfjgkjd', astroId)
    axiosConfig
      .get(`/user/getoneTicket/${id}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          fullname: response.data.data.fullname,
          desc: response.data.data.desc,
          subject: response.data.data.subject,
          img: response.data.data.img[0],
          status: response.data.data.status,
          userId: response.data.data._id,
          createdAt: response.data.data.createdAt,
        });
      })
      .catch(error => {
        console.log(error);
      });

    // this.getQuestionList(id)
    let user_id = localStorage.getItem("user_id");
    axiosConfig
      .get(`/user/list_ask_qus/${id}/${JSON.parse(user_id)}`)
      .then(response => {
        console.log("fgshdfhsdfhs", response.data.data);
        this.setState({
          astroQuesList: response.data.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
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
                    <h1>View Customer Support</h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section className="">
          <Container>
            <Row>
              <Col lg="12">
                <div className="support-box">
                  <Row>
                    <Col lg="12">
                      <div className="supp-2">
                        <h4>lorem ipsum ?</h4>
                        <ul>
                          <li>
                            Date/Time: <span>{this.state.createdAt}</span>
                          </li>
                          {/* <li>Time: <span>4:00pm</span></li> */}
                          <li>
                            Ticket No: <span>56565656</span>
                          </li>
                          <li>
                            Status: <span></span>
                          </li>
                          <li>
                            Description: <span>{this.state.desc}</span>
                          </li>
                        </ul>
                        <div className="supp-4">
                          <h3>Write Your Commets</h3>
                          <form>
                            <Col md="12">
                              <div class="form-group mtb-10">
                                <label>Description*</label>
                                <textarea
                                  className="form-control stp"
                                  placeholder="support ticket description..."
                                ></textarea>
                              </div>
                            </Col>
                            <Button className="btn btn-primary">Submit</Button>
                          </form>
                        </div>
                      </div>
                    </Col>
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
export default CustomerSupportView;
