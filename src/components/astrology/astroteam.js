import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import astro3 from "../../assets/img/team/astro3.jpg";
import "../../assets/scss/astroteam.scss";

class AstroTeam extends React.Component {
  render() {
    return (
      <section id="team" class="pb-5">
        <Container>
          <div className="heading mb-30">
            <h2>Best Astrologers</h2>
            <img src={textbottom} alt="" />
          </div>
          <Row>
            <Col md="3">
              <div className="image-flip">
                <div className="mainflip flip-0">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img src={astro3} alt="" />
                        </p>
                        <h4 className="card-title">Krishnan Iyer</h4>
                        <ul className="mb-3">
                          <li>
                            {" "}
                            <span>Tarot Card Reading , Vedic Astrology</span>
                          </li>
                          <li>
                            Language: <span>English , Tamil , Malayalam</span>
                          </li>
                        </ul>
                        <Link className="btn btn-primary btn-sm st-d">
                          Online
                        </Link>
                        <Link className="btn btn-primary btn-sm">
                          <i class="fa fa-phone"></i> Call
                          <small>
                            / 20 <i class="fa fa-inr" aria-hidden="true"></i>{" "}
                            per Hour
                          </small>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Krishnan Iyer</h4>
                        <ul>
                          <li>
                            Rating :<span>(1458)</span>
                            <p className="mb-3">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                            </p>
                          </li>
                          <li>
                            {' '}
                            <span>Tarot Card , Vedic Astrology</span>
                          </li>
                          <li>
                            Language: <span>English , Tamil , Malayalam</span>
                          </li>
                          <li>
                            Experience: <span>22 Years</span>
                          </li>
                        </ul>
                        <Link
                          to="/astrologerdetail"
                          className="btn btn-primary btn-sm"
                        >
                          <i class="fa fa-phone"></i> Call Now
                          <small>
                            {' '}
                            20 <i class="fa fa-inr" aria-hidden="true"></i>Hour
                          </small>
                        </Link>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="image-flip">
                <div className="mainflip flip-0">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img src={astro3} alt="" />
                        </p>
                        <h4 className="card-title">Krishnan Iyer</h4>
                        <ul className="mb-3">
                          <li>
                            {" "}
                            Specility:{" "}
                            <span>Tarot Card Reading , Vedic Astrology</span>
                          </li>
                          <li>
                            Language: <span>English , Tamil , Malayalam</span>
                          </li>
                        </ul>
                        <Link className="btn btn-primary btn-sm st-d">
                          Online
                        </Link>
                        <Link className="btn btn-primary btn-sm">
                          <i class="fa fa-phone"></i> Call
                          <small>
                            / 20 <i class="fa fa-inr" aria-hidden="true"></i>{" "}
                            per Hour
                          </small>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Krishnan Iyer</h4>
                        <ul>
                          <li>
                            Rating :<span>(1458)</span>
                            <p className="mb-3">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                            </p>
                          </li>
                          <li>
                            {" "}
                            <span>Tarot Card , Vedic Astrology</span>
                          </li>
                          <li>
                            Language: <span>English , Tamil , Malayalam</span>
                          </li>
                          <li>
                            Experience: <span>22 Years</span>
                          </li>
                        </ul>
                        <Link
                          to="/astrologerdetail"
                          className="btn btn-primary btn-sm"
                        >
                          <i class="fa fa-phone"></i> Call Now
                          <small>
                            {" "}
                            20 <i class="fa fa-inr" aria-hidden="true"></i>{" "}
                            /Hour{" "}
                          </small>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="image-flip">
                <div className="mainflip flip-0">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img src={astro3} alt="" />
                        </p>
                        <h4 className="card-title">Krishnan Iyer</h4>
                        <ul className="mb-3">
                          <li>
                            {" "}
                            <span>Tarot Card Reading , Vedic Astrology</span>
                          </li>
                          <li>
                            Language: <span>English , Tamil , Malayalam</span>
                          </li>
                        </ul>
                        <Link className="btn btn-primary btn-sm st-d">
                          Online
                        </Link>
                        <Link className="btn btn-primary btn-sm">
                          <i class="fa fa-phone"></i> Call
                          <small>
                            {" "}
                            / 20 <i
                              class="fa fa-inr"
                              aria-hidden="true"
                            ></i>{" "}
                            per Hour
                          </small>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Krishnan Iyer</h4>
                        <ul>
                          <li>
                            Rating :<span>(1458)</span>
                            <p className="mb-3">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                            </p>
                          </li>
                          <li>
                            {" "}
                            <span>Tarot Card , Vedic Astrology</span>
                          </li>
                          <li>
                            Language: <span>English , Tamil , Malayalam</span>
                          </li>
                          <li>
                            Experience: <span>22 Years</span>
                          </li>
                        </ul>
                        <Link
                          to="/astrologerdetail"
                          className="btn btn-primary btn-sm"
                        >
                          <i class="fa fa-phone"></i> Call Now
                          <small>
                            {" "}
                            <i class="fa fa-inr" aria-hidden="true"></i> 20/Hour
                          </small>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="image-flip">
                <div className="mainflip flip-0">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img src={astro3} alt="" />
                        </p>
                        <h4 className="card-title">Krishnan Iyer</h4>
                        <ul className="mb-3">
                          <li>
                            {" "}
                            <span>Tarot Card Reading , Vedic Astrology</span>
                          </li>
                          <li>
                            Language: <span>English , Tamil , Malayalam</span>
                          </li>
                        </ul>
                        <Link className="btn btn-primary btn-sm st-d">
                          Online
                        </Link>
                        <Link className="btn btn-primary btn-sm">
                          <i class="fa fa-phone"></i> Call
                          <small>
                            {" "}
                            /<i class="fa fa-inr" aria-hidden="true"></i> 20 per
                            Hour
                          </small>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Krishnan Iyer</h4>
                        <ul>
                          <li>
                            Rating :<span>(1458)</span>
                            <p className="mb-3">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                            </p>
                          </li>
                          <li>
                            {" "}
                            <span>Tarot Card , Vedic Astrology</span>
                          </li>
                          <li>
                            Language: <span>English , Tamil , Malayalam</span>
                          </li>
                          <li>
                            Experience: <span>22 Years</span>
                          </li>
                        </ul>
                        <Link
                          to="/astrologerdetail"
                          className="btn btn-primary btn-sm"
                        >
                          <i class="fa fa-phone"></i> Call Now
                          <small>
                            {" "}
                            20 <i class="fa fa-inr" aria-hidden="true"></i>{" "}
                            /Hour
                          </small>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default AstroTeam;
