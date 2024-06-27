import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import swal from "sweetalert";
import LayoutOne from "../../../layouts/LayoutOne";
// import "../../assets/scss/astroteam.scss";
import "../../../assets/scss/astroteam.scss";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import astrologinbg from "../../../assets/img/astrologin-bg.jpg";

import { Link } from "react-router-dom";
class VideoRecharge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      allminrechargeList: [],
      data: {},
      userid: "",
      astroid: "",
      recharge_planId: "",
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  componentDidMount = () => {
    axiosConfig
      .get("/user/all_min_recharge")
      .then(response => {
        console.log("Minimum Recharge", response.data.data);
        if (response.data.status === true) {
          this.setState({ allminrechargeList: response.data.data });
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.response);
      });
  };
  submitHandler = async (id, astroid, userId, recharge_planid) => {
    // console.log("plannnnn", id);
    let userID = JSON.parse(localStorage.getItem("user_id"));
    let astroId = localStorage.getItem("astroId");
    // e.preventDefault();
    // let { id } = this.props.match.params;

    let obj = {
      astroid: astroId,
      userid: userID,
      //   recharge_planid: id,
    };
    await axiosConfig
      .post("/user/addCallWallet", obj)
      .then(response => {
        // console.log("AddCallWallet>>>>", response.data);
        if (response.data.status === true) {
          this.props.history.push("/CallListData");
          // this.setState({});
        } else {
          swal(
            "Error!",
            "You Dont have Sufficient Balance Please Recharge Now!",
            "error"
          );
        }
      })
      .catch(error => {
        swal(
          "Error!",
          "You Dont have Sufficient Balance Please Recharge Now!",
          "error"
        );
        console.log(error);
      });
  };
  render() {
    const { allminrechargeList } = this.state;
    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              // backgroundColor: "#FFD59E",
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
            <Container className="mb-3">
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h1>Select Minute Now</h1>
                    <h3>
                      Available Minute : <span>{this.state.minute}</span>
                    </h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section className="mt-3">
          <Container>
            <Row>
              {allminrechargeList.length
                ? allminrechargeList.map((allmin, index) => {
                    return (
                      <Col xl="3" lg="3" md="3" sm="6" xs="6" key={index}>
                        <Link
                          onClick={() => this.submitHandler(allmin._id)}
                          // onClick={() => {
                          //   localStorage.setItem("minute", allmin.minute);
                          //   this.props.history.push('/chatApp')
                          //   this.props.history.push("/UserRequestForm");
                          // }}
                        >
                          <div className="promoBox success-box info-ribbon">
                            <h4>Minute {allmin.minute}</h4>
                          </div>
                        </Link>
                      </Col>
                    );
                  })
                : "No Intake Form Data Available"}
            </Row>
          </Container>
        </section>
        {/* modal for recharge*/}
        <Modal
          size="md"
          style={{ maxWidth: "600px", width: "100%" }}
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader className="wr-3" toggle={this.toggle}>
            <h2 className="wr-4">Apply Voucher Code</h2>
          </ModalHeader>
          <ModalBody>
            <div className="Wr-1 wr-t">
              <form>
                <Col md="12">
                  <input type="text" placeholder="Enter Your Voucher  Code" />
                </Col>
                <Button className="btn btn-success">Submit</Button>
              </form>
            </div>
          </ModalBody>
        </Modal>
      </LayoutOne>
    );
  }
}
export default VideoRecharge;
