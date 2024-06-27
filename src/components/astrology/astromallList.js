import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import AutoSearch from "./autosearch";
import axiosConfig from "../../axiosConfig";
import ReactHtmlParser from "react-html-parser";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
class AstromallList extends React.Component {
  constructor() {
    super();
    this.state = {
      procategory: [],
    };
  }

  componentDidMount = () => {
    axiosConfig
      .get("/admin/getproductcalegory")
      .then(response => {
        if (response.data.status === true) {
          this.setState({ procategory: response.data.data });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const { procategory } = this.state;
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
                    <h1>Astromall Shop</h1>
                    <h3>Shop Best Online Astrology Products And Services</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section className="ptb-0">
          <Container>
            <Row>
              <Col lg="12">
                <div className="pt-10 pb-50">
                  <AutoSearch />
                  <Row>
                    {procategory.length
                      ? procategory.map(procat => {
                          return (
                            <Col key={procat._id} md="4">
                              <div className="po-box">
                                <Link to={"/productlist/" + procat._id}>
                                  <Row>
                                    <Col md="4">
                                      <div className="po-1">
                                        <img
                                          src={procat.img}
                                          alt=""
                                          width="100%"
                                        />
                                      </div>
                                    </Col>
                                    <Col md="8">
                                      <div className="po-1">
                                        <h3>{procat.name}</h3>
                                        <p>{ReactHtmlParser(procat.desc)}</p>
                                      </div>
                                    </Col>
                                  </Row>
                                </Link>
                              </div>
                            </Col>
                          );
                        })
                      : null}
                  </Row>
                </div>
              </Col>
              <Col lg="6"></Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default AstromallList;
