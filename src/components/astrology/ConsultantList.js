import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
class DoshaList extends React.Component {
  constructor() {
    super();
    this.state = {
      consultantList: [],
    };
  }

  handleAddConsultant = (Productid, consultantid) => {
    // console.log(">>>>>?????", Productid, consultantid);
    localStorage.setItem("astroproduct_id", Productid);
    sessionStorage.setItem("AstroMall_consultant_id", consultantid);
    this.props.history.push(`/addressform/${consultantid}`);
  };

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/user/product_consltnt_list/${id}`)
      .then(response => {
        console.log(response.data.data);
        console.log(response.data.data[0].astroid._id);
        this.setState({ consultantList: response.data.data });
        localStorage.setItem("astro_id", response?.data?.data[0]?._id);
      })
      .catch(error => {
        console.log(error.response);
      });
  }
  render() {
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
                    <h1>Our Consultant</h1>
                    <h3>Select the best astrologer</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section className="ptb-0 mt-50 mb-50">
          <Container>
            <Row>
              {this.state.consultantList ? (
                this.state.consultantList.map(list => (
                  <Col
                    style={{ cursor: "pointer" }}
                    lg="3"
                    md="3"
                    sm="6"
                    xs="12"
                    key={list._id}
                  >
                    <Col className="frontside">
                      <div className="card">
                        <div className="card-body text-center py-2">
                          <img
                            src={
                              list?.astroid?.img[0]
                                ? list?.astroid?.img[0]
                                : astrologinbg
                            }
                            alt="img"
                          />

                          <h4 className="card-title">
                            {list?.astroid?.fullname}
                          </h4>
                          <ul>
                            <li>
                              Rating :
                              <span>{list?.astroid?.avg_rating} Star</span>
                            </li>
                            <li>
                              <span>
                                AllSkills:
                                {list?.astroid?.all_skills}
                              </span>
                            </li>
                            <li>
                              Language: <span>{list?.astroid?.language}</span>
                            </li>
                            <li>
                              ₹ <span>{list?.price}</span>
                            </li>
                            <li>
                              Experience:
                              <span>{list?.astroid?.exp_in_years} year</span>
                            </li>
                          </ul>
                          <div
                            className="my-2"
                            onClick={() =>
                              this.handleAddConsultant(
                                list?._id,
                                list?.astroid?._id
                              )
                            }
                          >
                            <Link
                              to={"/addressform/" + list?.astroid?._id}
                              className="btn btn-primary btn-sm"
                            >
                              Select
                            </Link>
                            {/* <Link
                            // to={'/addressform/' + list?.astroid?._id}
                            to={"/addressform/" + list?._id}
                            className="btn btn-primary btn-sm"
                          >
                            Select
                          </Link> */}
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Col>
                ))
              ) : (
                <span style={{ color: "red" }}>No Data Available</span>
              )}
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default DoshaList;
