import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import "../../assets/scss/workflow.css";
class OurWorkFlow extends React.Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12 mb-30">
        <div className="category-home">
          <section className="stt-2">
            <Container>
              <div className="heading">
                <h2>Connect to Astrologers</h2>
                <img src={textbottom} alt="" />
              </div>
              <div style={{ display: 'flex',justifyContent:'space-evenly'}}> 
              {/* added new div for adjust row   */}
                {/* <Row> */}
                <Col md="4">
                  <div
                    className="process-box process-left"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <Row>
                      <Col md="5">
                        <div className="process-step">
                          <i class="fa fa-commenting-o" aria-hidden="true"></i>
                          {/* <img src={chatimg} alt="" className="hm-img" /> */}
                        </div>
                      </Col>
                      <Col md="7">
                        <Link to="/allastrologerlist">
                          <h5 className="bt-txt">Chat with Astrologer</h5>
                          {/* <p><small>You can start a live chat with the astrologer of your choice using chat now functionality. </small></p> */}
                        </Link>{" "}
                      </Col>
                      {/* <div class="process-line-l"></div> */}
                    </Row>
                  </div>
                </Col>
                <Col md="4">
                  <div
                    className="process-box process-left"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <Row>
                      <Col md="5">
                        <div className="process-step">
                          <i
                            className="fa fa-phone-square"
                            aria-hidden="true"
                          ></i>
                          {/* <img src={callimg} alt="" className="hm-img" /> */}
                        </div>
                      </Col>
                      <Col md="7">
                        <Link to="/allastrologerlist">
                          <h5 className="bt-txt">Talk to Astrologer</h5>
                          {/* <p><small>You can start a live talk with the astrologer of your choice using talk now functionality. </small></p> */}
                        </Link>
                      </Col>
                      {/* <div class="process-line-l"></div> */}
                    </Row>
                  </div>
                </Col>
                {/* <Col md="4">
                  <div
                    className="process-box process-left"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <Row>
                      <Col md="5">
                        <div className="process-step">
                          <i class="fa fa-file-video-o" aria-hidden="true"></i>
                         
                        </div>
                      </Col>
                      <Col md="7">
                        <Link to="/liveAstrologer">
                          <h5 className="bt-txt">Live Astrologer</h5>
                        </Link>
                      </Col>
      
                    </Row>
                  </div>
                </Col> */}
              </div>
              {/* </Row> */}
            </Container>
          </section>
        </div>
      </div>
    );
  }
}

export default OurWorkFlow;
