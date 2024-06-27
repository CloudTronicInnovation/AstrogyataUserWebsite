import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import LayoutOne from "../../layouts/LayoutOne";
import "../../assets/scss/astroteam.scss";
// import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Table } from "reactstrap";
import axiosConfig from "../../axiosConfig";

class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userOrdersList: [],
    };
  }
  componentDidMount() {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    console.log(userId);
    axiosConfig
      .get(`/user/myOrders/${userId}`)
      .then(response => {
        console.log("userOrdersList", response.data.data);
        if (response.data.status === true) {
          this.setState({
            userOrdersList: response.data.data,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { userOrdersList } = this.state;
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
                    <h1>Order History</h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section>
          <Container>
            <Row>
              <Col lg="12">
                <div className="">
                  <Table striped className="">
                    <thead>
                      <tr>
                        <th>#Order ID</th>
                        <th>Astrologer Name</th>
                        <th>Email </th>
                        <th>Mobile No.</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Date/Time</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    {userOrdersList.length
                      ? userOrdersList.map((user, index) => {
                          return (
                            <tbody>
                              <tr>
                                <th>{user?.orderId}</th>
                                <td>{user?.astroid?.fullname}</td>
                                {/* <td>{user?.type}</td> */}
                                <td>{user?.astroid?.email}</td>
                                <td>{user?.astroid?.mobile}</td>
                                {/* <td>{user?.gst}Rs.</td> */}
                                <td>{user?.product?.product?.productname}</td>
                                <td>{user?.product?.price}Rs.</td>

                                <td>{user?.createdAt}</td>
                                <td>
                                  <Link className="Tansdel">
                                    <i
                                      class="fa fa-trash-o"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          );
                        })
                      : null}
                  </Table>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
export default OrderHistory;
