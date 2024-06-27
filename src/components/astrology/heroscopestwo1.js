import React from "react";
import { Link } from "react-router-dom";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";

import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import virgo from "../../assets/img/heroscope/virgo.png";
import aquarius from "../../assets/img/heroscope/aquarius.png";
import cancer from "../../assets/img/heroscope/cancer.png";
import capricorn from "../../assets/img/heroscope/capricorn.png";
import gemini from "../../assets/img/heroscope/gemini.png";
import leo from "../../assets/img/heroscope/leo.png";
import libra from "../../assets/img/heroscope/libra.png";
import pisces from "../../assets/img/heroscope/pisces.png";
import sagittarius from "../../assets/img/heroscope/sagittarius.png";
import scorpio from "../../assets/img/heroscope/scorpio.png";
import taurus from "../../assets/img/heroscope/taurus.png";
import aries from "../../assets/img/heroscope/aries.png";
class HeroscopesTwo1 extends React.Component {
  render() {
    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              // backgroundColor: '#ffcc01',
              // width: '100%',
              // padding: '70px 0px',
              // backgroundSize: 'cover',
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
                    <h1>Weekly Horoscope </h1>
                    <p></p>
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
                <div className="scope-1">
                  <h3>WEEKLY HOROSCOPE</h3>
                  <p>
                    A horoscope is a forecast of a person's future, typically
                    including predictions about personality, relationships, and
                    events, based on the positions of celestial bodies such as
                    the sun, moon, and planets at the time of their birth.
                    Horoscopes are typically created by astrologers and are
                    specific to an individual's birth date, time, and place.
                    Astrologers use astrological symbols and systems to
                    interpret the positions of celestial bodies and make
                    predictions about an individual's life. Our online horoscope
                    software developed in consultation of our astrologers.
                  </p>
                  <Row>
                    <Col md="2">
                      <Link to={"/horoscopedetail1/aries"}>
                        <div className="scope-detail scop-2 mtb-10">
                          <div className="scope-img">
                            <img src={aries} alt="" className="zoom" />
                          </div>
                          <div className="scope-text">
                            <h4 className="">Aries</h4>
                          </div>
                        </div>
                      </Link>
                    </Col>
                    <Col md="2">
                      <Link to={"/horoscopedetail1/taurus"}>
                        <div className="scope-detail scop-2 mtb-10">
                          <div className="scope-img">
                            <img src={taurus} alt="" className="zoom" />
                          </div>
                          <div className="scope-text">
                            <h4 className="">Taurus</h4>
                          </div>
                        </div>
                      </Link>
                    </Col>
                    <Col md="2">
                      <Link to={"/horoscopedetail1/gemini"}>
                        <div className="scope-detail scop-2 mtb-10">
                          <div className="scope-img">
                            <img src={gemini} alt="" className="zoom" />
                          </div>
                          <div className="scope-text">
                            <h4 className="">Gemini</h4>
                          </div>
                        </div>
                      </Link>
                    </Col>
                    <Col md="2">
                      <Link to={"/horoscopedetail1/cancer"}>
                        <div className="scope-detail scop-2 mtb-10">
                          <div className="scope-img">
                            <img src={cancer} alt="" className="zoom" />
                          </div>
                          <div className="scope-text">
                            <h4 className="">Cancer</h4>
                          </div>
                        </div>
                      </Link>
                    </Col>
                    <Col md="2">
                      <Link to={"/horoscopedetail1/leo"}>
                        <div className="scope-detail scop-2 mtb-10">
                          <div className="scope-img">
                            <img src={leo} alt="" className="zoom" />
                          </div>
                          <div className="scope-text">
                            <h4 className="">Leo</h4>
                          </div>
                        </div>
                      </Link>
                    </Col>
                    <Col md="2">
                      <Link to={"/horoscopedetail1/virgo"}>
                        <div className="scope-detail scop-2 mtb-10">
                          <div className="scope-img">
                            <img src={virgo} alt="" className="zoom" />
                          </div>
                          <div className="scope-text">
                            <h4 className="">Virgo</h4>
                          </div>
                        </div>
                      </Link>
                    </Col>
                    <Col md="2">
                      <Link to={"/horoscopedetail1/libra"}>
                        <div className="scope-detail scop-2 mtb-10">
                          <div className="scope-img">
                            <img src={libra} alt="" className="zoom" />
                          </div>
                          <div className="scope-text">
                            <h4 className="">Libra</h4>
                          </div>
                        </div>
                      </Link>
                    </Col>
                    <Col md="2">
                      <Link to={"/horoscopedetail1/scorpio"}>
                        <div className="scope-detail scop-2 mtb-10">
                          <div className="scope-img">
                            <img src={scorpio} alt="" className="zoom" />
                          </div>
                          <div className="scope-text">
                            <h4 className="">Scorpio</h4>
                          </div>
                        </div>
                      </Link>
                    </Col>
                    <Col md="2">
                      <Link to={"/horoscopedetail1/sagittarius"}>
                        <div className="scope-detail scop-2 mtb-10">
                          <div className="scope-img">
                            <img src={sagittarius} alt="" className="zoom" />
                          </div>
                          <div className="scope-text">
                            <h4 className="">Sagittarius</h4>
                          </div>
                        </div>
                      </Link>
                    </Col>
                    <Col md="2">
                      <Link to={"/horoscopedetail1/capricorn"}>
                        <div className="scope-detail scop-2 mtb-10">
                          <div className="scope-img">
                            <img src={capricorn} alt="" className="zoom" />
                          </div>
                          <div className="scope-text">
                            <h4 className="">Capricorn</h4>
                          </div>
                        </div>
                      </Link>
                    </Col>
                    <Col md="2">
                      <Link to={"/horoscopedetail1/aquarius"}>
                        <div className="scope-detail scop-2 mtb-10">
                          <div className="scope-img">
                            <img src={aquarius} alt="" className="zoom" />
                          </div>
                          <div className="scope-text">
                            <h4 className="">Aquarius</h4>
                          </div>
                        </div>
                      </Link>
                    </Col>
                    <Col md="2">
                      <Link to={"/horoscopedetail1/pisces"}>
                        <div className="scope-detail scop-2 mtb-10">
                          <div className="scope-img">
                            <img src={pisces} alt="" className="zoom" />
                          </div>
                          <div className="scope-text">
                            <h4 className="">Pisces</h4>
                          </div>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
export default HeroscopesTwo1;
