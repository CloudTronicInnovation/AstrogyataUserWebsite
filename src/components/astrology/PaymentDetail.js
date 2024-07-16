import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import "../../assets/scss/astroteam.scss";
import axiosConfig from "../../axiosConfig";
import pay1 from "../../assets/img/icon-img/pay-1.png";
import pay3 from "../../assets/img/icon-img/pay-3.png";
import pay4 from "../../assets/img/icon-img/pay-4.png";
import pay5 from "../../assets/img/icon-img/pay-5.png";
import pay6 from "../../assets/img/icon-img/pay-6.png";
import swal from "sweetalert";

class PaymentDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.location.state);
    this.state = {
      name: "",
      amount: props.location.state || 0,
      gst: "",
      totalAmt: null,
      number: "",
      MUID: "",
      transactionId: "",
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  componentDidMount() {
    const Gst = (this.state.amount * 18) / 100;
    this.setState({ gst: Gst });
    console.log(Gst, typeof this.state.amount);
    const subtotal1 = Number(this.state.amount) + Number(Gst);
    this.setState({ totalAmt: subtotal1 });
    console.log(typeof subtotal1);
  }
  componentDidUpdate(prevProps) {
    console.log(" update", prevProps);
  }
  
  submitHandler = async (e) => {
    userId = JSON.parse(localStorage.getItem("user_id"));
    e.preventDefault();
    const data = {
      name: "Sanggjay",
      amount: Number(this.state.totalAmt).toFixed(2),
      number: 7999029856,
      userid : userId,
      MUID: "MUID" + Date.now(),
      transactionId: "T" + Date.now(),
    };
    console.log(data);
    // const data = {
    //   name: this.state.name,
    //   amount: this.state.amount,
    //   number: this.state.number,
    //   MUID:this.state.MUID,
    //   transactionId:this.state.transactionId,
    // };

    await axiosConfig
      .post(`/api/payment`, data)
      .then((response) => {
        // console.log(response?.data);
        window.open(response?.data);
      })
      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });

    let userId = JSON.parse(localStorage.getItem("user_id"));
    let obj = {
      userid: userId,
      amount: Number(this.state.totalAmt).toFixed(2),
    };
    // axiosConfig
    //   .post(`/user/add_custome_amt`, obj)
    //   .then(response => {
    //     // console.log("@@@@@", response.data.data);
    //     // swal("Success!", "Submitted SuccessFull!", "success");
    //   })

    //   .catch(error => {
    //     swal("Error!", "You clicked the button!", "error");
    //     console.log(error);
    //   });
  };

  render() {
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
                    <h1>Payment Detail</h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section>
          <Container>
            <Row>
              {/* <Col lg="4"> */}
              <Col lg="8">
                <div className="order-bx">
                  <h3 className="py-3">Total Amount</h3>
                  <hr></hr>
                  <ul>
                    <li>
                      Order Subtotal
                      <span>₹ {Number(this.state.amount).toFixed(2)}</span>
                    </li>
                    <li>
                      Payable Amount
                      <span>₹ {Number(this.state.amount).toFixed(2)}</span>
                    </li>
                    <li>
                      GST @18%
                      <span>₹ {this.state.gst}</span>
                    </li>
                    <li>
                      Total Payable Amount
                      <span>₹ {Number(this.state.totalAmt).toFixed(2)}</span>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg="8" className="py-5">
                {/* <Row>
                  <Col md="12">
                    <div className="off-code">
                      <div className="w-offer">
                        <Button
                          type="button"
                          className="btn btn-secondary"
                          onClick={this.toggle}
                        >
                          <i className="fa fa-percent" aria-hidden="true"></i>
                          Apply Coupon
                        </Button>
                      </div>
                      <Link className="oth-btn" onClick={this.toggle}>
                        Apply another coupon
                      </Link>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="rv-1 my-2">
                      <Link>
                        <img src={pay1} alt="" />
                        <p>UPI</p>
                      </Link>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="rv-1 my-2">
                      <Link>
                        <img src={pay3} alt="" />
                        <p>Debit Card</p>
                      </Link>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="rv-1 my-2">
                      <Link>
                        <img src={pay3} alt="" />
                        <p>Credit Card</p>
                      </Link>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="rv-1 my-2">
                      <Link>
                        <img src={pay4} alt="" />
                        <p>Net Banking</p>
                      </Link>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="rv-1 my-2">
                      <Link>
                        <img src={pay5} alt="" />
                        <p>Other Wallet</p>
                      </Link>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="rv-1 my-2">
                      <Link>
                        <img src={pay6} alt="" />
                        <p>Other Wallet</p>
                      </Link>
                    </div>
                  </Col>
                </Row> */}
                <Button
                class="render"
                 className="btn btn-success"
                style={{
                  position: 'relative',
                  top: '-40px' 
                }}
                 onClick={this.submitHandler}>Pay Now</Button>
              </Col>
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

export default PaymentDetail;
