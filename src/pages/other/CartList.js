import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import "../../assets/scss/astroteam.scss";
import { Table } from "reactstrap";
import pay1 from "../../assets/img/icon-img/pay-1.png";
import pay3 from "../../assets/img/icon-img/pay-3.png";
import pay4 from "../../assets/img/icon-img/pay-4.png";
import pay5 from "../../assets/img/icon-img/pay-5.png";
import pay6 from "../../assets/img/icon-img/pay-6.png";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";

import axiosConfig from "../../axiosConfig";
import ReactHtmlParser from "react-html-parser";
// import DemoChat from "../../components/astrology/DemoChat";
import Payment from "../payment/Payment";
class CartList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      astroId: "",
      userId: "",
      productid: "",
      shipping_address: "",
      address: "",
      gstotal: "",
      total_amt: "",
      data: {},
      addtoCart: [],
      dataCart: {},
      shippingId: "",
      gst: "",
      cartdata: {},
      price: "",
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    localStorage.setItem("shipping_id", id);

    axiosConfig
      .get(`/user/getoneCart/${id}`)
      .then(response => {
        this.setState({
          dataCart: response.data.data,
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  }
  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    const { data, address } = this.state;

    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0 ">
          <div
            className=""
            style={{
              backgroundColor: "#FFD59E",
              float: "left",
              width: "100%",
              // backgroundColor: "#272727",
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
                    <h1>Order Review</h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section>
          <Container className="constaiermain">
            <Row className="mt-10">
              <Col lg="12">
                <div className="order-view">
                  <h4>ORDER REVIEW</h4>
                  <Table striped className="tableheading">
                    <thead className="tableheadingsub">
                      <tr>
                        <th className="justify-content-center">PRODUCT</th>

                        <th className="d-flex justify-content-center">
                          <span>ADDRESS</span>
                        </th>
                        <th className="justify-content-center">AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td width="50%">
                          <img
                            className="mt-1 mx-1"
                            src={
                              this.state.dataCart?.productid?.product?.image[0]
                            }
                            alt=""
                            width="40%"
                          />
                          <br />

                          <br />
                          <span>
                            Rs/- {this.state.dataCart?.productid?.price}
                          </span>
                          <br />
                          <span>
                            {ReactHtmlParser(
                              this.state.dataCart?.productid?.product?.desc
                            )}
                          </span>
                        </td>
                        <td width="30%">
                          {this.state.dataCart?.shipping_address?.flat_no},
                          {this.state.dataCart?.shipping_address?.name}{" "}
                          {this.state.dataCart?.shipping_address?.landmark}{" "}
                          {this.state.dataCart?.shipping_address?.country}{" "}
                          {this.state.dataCart?.shipping_address?.state}{" "}
                          {this.state.dataCart?.shipping_address?.city}{" "}
                          {this.state.dataCart?.shipping_address?.pincode}
                          <p>
                            mobile No:-
                            {this.state.dataCart?.shipping_address?.mobile}
                          </p>
                        </td>

                        <td width="10%">
                          <p className="mx-2" width="10%">
                            <span>
                              Rs/- {this.state.dataCart?.productid?.price}
                            </span>
                          </p>
                          {/* <Link className="Tansdel">
                            {" "}
                            {this.state.addtoCart.total_amt -
                              this.state.addtoCart.gst}
                          </Link> */}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
              <Col lg="4">
                <div className="order-bx">
                  <h3 className="py-2">Total Amount</h3>
                  <hr></hr>
                  <ul>
                    <li>
                      Order Amount
                      <span>Rs {this.state.dataCart?.productid?.price} </span>
                    </li>

                    <li>
                      GST @18%
                      <span> Rs {this.state.dataCart?.gst}</span>
                    </li>
                    <hr />
                    <li>
                      Total Payable Amount
                      <span>Rs {this.state.dataCart?.total_amt} </span>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg="8" className="py-5">
                <Row>
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
                </Row>
              </Col>
            </Row>
            <Row>
              {/* <DemoChat payment={this.state.dataCart?.total_amt} /> */}
              <Payment payment={this.state.dataCart?.total_amt} />
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default CartList;
