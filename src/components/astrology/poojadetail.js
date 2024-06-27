import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Input,
  InputGroup,
  Form,
  Button,
} from "reactstrap";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";

import Pj from "../../assets/img/Pj.jpg";
import "../../assets/scss/astropooja.css";
import pagetitle from "../../assets/img/pagetitle.jpg";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";
import ReactHtmlParser from "react-html-parser";

class PoojaDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;

    axiosConfig
      .get(`/admin/viewoneProduct/${id}`)
      .then(response => {
        this.setState({
          data: response.data.data,
          image: response.data.data.image[0],
        });
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
                    <h1>Product Detail</h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <Container>
          <Row>
            <Col md="12">
              <Card className="mb-50">
                <Row>
                  <Col md="4">
                    <div className="preview-pic tab-content">
                      <img src={this.state?.image} alt="" width="50%" />
                    </div>
                  </Col>
                  <Col md="8">
                    <div className="details">
                      <h4 className="product-title">
                        {this.state.data.productname}
                      </h4>
                      <p>{ReactHtmlParser(this.state.data.desc)}</p>
                      <h5 className="price">
                        Starting From: <span>₹ {this.state.data.price}</span>
                      </h5>

                      <div class="action">
                        <Link to={"/consultantlist/" + this.state.data?._id}>
                          {/* <button
                            className="add-to-cart btn btn-default"
                            type="button"
                          >
                            Book Now
                          </button> */}
                          <Button className="btn btn-warning mt-2">
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </LayoutOne>
    );
  }
}

export default PoojaDetail;
