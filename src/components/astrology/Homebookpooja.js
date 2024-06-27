import React from "react";
import { Container, Row, Col, Button, Input } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import "../../../src/assets/scss/style.scss";
import { BiTime } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import { Link } from "react-router-dom";

class BookEvent extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      listofpooja: [],
    };
  }

  handlecheckpooja = value => {
    localStorage.setItem("poojaviewone", JSON.stringify(value));
    const userid = localStorage.getItem("user_id");
    if (userid !== null) {
      this.props.history.push(`/Poojadetailpage/${value?._id}`);
    } else swal("No User Found", "User Need to login First");
  };

  componentDidMount() {
    axiosConfig
      .get(`/admin/get_adminevent`)
      .then(res => {
        this.setState({ listofpooja: res.data.data.slice(0, 4) });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <section className="pt-0 pb-0">
        <div className="container mt-2">
          <Row>
            <div className="col-lg-12 col-md-12 mb-30">
              <div className="category-home">
                <section className="pt-0">
                  <div className="container">
                    <Row>
                      {this.state.listofpooja !== "" ? (
                        <>
                          {this.state.listofpooja?.map((value, i) => (
                            <Col key={i} className="mt-3" md="3">
                              <div className="product-grid8">
                                <div class="product-image8 imageofpooja">
                                  <img
                                    className="imagepooja"
                                    style={{
                                      borderRadius: "10px",
                                      width: "100%",
                                    }}
                                    src={value?.poojaimg}
                                    alt="pooja image"
                                  />
                                </div>
                                <div className="product-content">
                                  <Row className="priceandname">
                                    <Col lg="8" md="8" sm="8">
                                      <div
                                        style={{
                                          fontSize: "12px",
                                          fontWeight: "300",
                                        }}
                                      >
                                        <b>
                                          {value?.pooja_type?.pooja_name?.slice(
                                            0,
                                            13
                                          )}
                                        </b>
                                      </div>
                                    </Col>
                                    <Col lg="4" md="4" sm="4">
                                      <div
                                        style={{ fontSize: "15px" }}
                                        className=" poojanames  justify-content-end"
                                      >
                                        <i
                                          class="fa fa-inr"
                                          aria-hidden="true"
                                        ></i>{" "}
                                        {value?.pooja_price}
                                      </div>
                                    </Col>
                                  </Row>
                                  <Row className="priceandname">
                                    <Col lg="6" md="6" sm="6">
                                      <div
                                        style={{
                                          fontSize: "12px",
                                          fontWeight: "200",
                                        }}
                                      >
                                        Mode of Pooja
                                      </div>
                                    </Col>
                                    <Col lg="6" md="6" sm="6">
                                      <div
                                        style={{ fontSize: "10px" }}
                                        className=" poojanames  justify-content-end"
                                      >
                                        <span style={{ color: "green" }}>
                                          {value?.mode ? (
                                            <>
                                              <b>{value?.mode}</b>
                                            </>
                                          ) : (
                                            "offline"
                                          )}
                                        </span>
                                      </div>
                                    </Col>
                                  </Row>
                                  <Row className="mt-1">
                                    {value?.mode === "online" ? null : (
                                      <>
                                        <Col lg="6" md="6" sm="6">
                                          <div style={{ fontSize: "15px" }}>
                                            {value?.mode !== "online" ? (
                                              <>
                                                <MdOutlineLocationOn
                                                  color="red"
                                                  size={20}
                                                />{" "}
                                                {value?.fullfill_location}
                                              </>
                                            ) : null}
                                          </div>
                                        </Col>
                                      </>
                                    )}

                                    <Col lg="6" md="6" sm="6">
                                      <span style={{ fontSize: "12px" }}>
                                        {value?.liveStreaming === true ? (
                                          <>
                                            <div
                                              style={{ fontSize: "12px" }}
                                              className=" poojanames  justify-content-end"
                                            >
                                              LiveStreaming
                                            </div>
                                            <div style={{ color: "green" }}>
                                              Available
                                            </div>
                                          </>
                                        ) : (
                                          <>
                                            <div
                                              style={{ fontSize: "12px" }}
                                              className=" poojanames  justify-content-end"
                                            >
                                              LiveStreaming
                                            </div>
                                            <div style={{ color: "red" }}>
                                              Not Available
                                            </div>
                                          </>
                                        )}
                                      </span>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg="6" md="6" sm="6">
                                      <div
                                        style={{
                                          fontSize: "17px",
                                          fontWeight: "500",
                                        }}
                                      >
                                        <BiTime color="green" size={16} />{" "}
                                        Duration
                                      </div>
                                    </Col>
                                    <Col lg="6" md="6" sm="6">
                                      <div
                                        style={{ fontSize: "15px" }}
                                        className=" poojanames  justify-content-end"
                                      >
                                        {value?.duration}
                                      </div>
                                    </Col>
                                  </Row>

                                  <Row className="mt-1">
                                    <Link to={`/bookEvent`}>
                                      <Button
                                        style={{ width: "100%" }}
                                        onClick={() =>
                                          this.handlecheckpooja(value)
                                        }
                                        color="success"
                                      >
                                        View
                                      </Button>
                                    </Link>
                                  </Row>
                                </div>
                              </div>
                            </Col>
                          ))}
                        </>
                      ) : null}
                    </Row>
                  </div>
                </section>
              </div>
            </div>
          </Row>
        </div>
      </section>
    );
  }
}
export default BookEvent;
