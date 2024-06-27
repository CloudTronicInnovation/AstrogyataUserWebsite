import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

import One from "../../assets/img/heroscope/1.png";
import Two from "../../assets/img/heroscope/2.png";
import Three from "../../assets/img/heroscope/3.png";
import Four from "../../assets/img/heroscope/4.png";
import Five from "../../assets/img/heroscope/5.png";
import Six from "../../assets/img/heroscope/6.png";
import Seven from "../../assets/img/heroscope/7.png";
import Eight from "../../assets/img/heroscope/8.png";
import Nine from "../../assets/img/heroscope/9.png";

// import astrologinbg from "../../assets/img/astrologin-bg.jpg";
// import Numerology from "./Numerology";

class NumerologyNo extends React.Component {
    render() {
        return (



            <div>
                {/* <Row>
                    <Col md="12">
                        <div className="leftcont text-left">
                            <h1>Numerology Horoscope</h1>
                            <p></p>
                        </div>
                    </Col>
                </Row> */}





                {/* <h3>NUMEROLOGY HOROSCOPE</h3>
                <p>

                    A Numerology is a forecast of a person's future, typically
                    including predictions about personality, relationships, and
                    events, based on the positions of celestial bodies such as
                    the sun, moon, and planets at the time of their birth.
                    Horoscopes are typically created by astrologers and are
                    specific to an individual's birth date, time, and place.
                    Astrologers use astrological symbols and systems to
                    interpret the positions of celestial bodies and make
                    predictions about an individual's life. Our online horoscope
                    software developed in consultation of our astrologers.
                </p> */}
                <Row>
                    <Col md="1">
                        <Link to={"1"}>
                            <div className="">
                                <div className="">
                                    <img src={One} alt="" className="zoom" />
                                </div>
                                <div className="scope-text">
                                    {/* <h4 className="">1</h4> */}
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col md="1">
                        <Link to={"2"}>
                            <div className="">
                                <div className="">
                                    <img src={Two} alt="" className="zoom" />
                                </div>
                                <div className="scope-text">
                                    {/* <h4 className="">1</h4> */}
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col md="1">
                        <Link to={"3"}>
                            <div className="">
                                <div className="">
                                    <img src={Three} alt="" className="zoom" />
                                </div>
                                <div className="scope-text">
                                    {/* <h4 className="">1</h4> */}
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col md="1">
                        <Link to={"4"}>
                            <div className="">
                                <div className="">
                                    <img src={Four} alt="" className="zoom" />
                                </div>
                                <div className="scope-text">
                                    {/* <h4 className="">1</h4> */}
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col md="1">
                        <Link to={"5"}>
                            <div className="">
                                <div className="">
                                    <img src={Five} alt="" className="zoom" />
                                </div>
                                <div className="scope-text">
                                    {/* <h4 className="">1</h4> */}
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col md="1">
                        <Link to={"6"}>
                            <div className="">
                                <div className="">
                                    <img src={Six} alt="" className="zoom" />
                                </div>
                                <div className="scope-text">
                                    {/* <h4 className="">1</h4> */}
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col md="1">
                        <Link to={"7"}>
                            <div className="">
                                <div className="">
                                    <img src={Seven} alt="" className="zoom" />
                                </div>
                                <div className="scope-text">
                                    {/* <h4 className="">1</h4> */}
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col md="1">
                        <Link to={"8"}>
                            <div className="">
                                <div className="">
                                    <img src={Eight} alt="" className="zoom" />
                                </div>
                                <div className="scope-text">
                                    {/* <h4 className="">1</h4> */}
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col md="1">
                        <Link to={"9"}>
                            <div className="">
                                <div className="">
                                    <img src={Nine} alt="" className="zoom" />
                                </div>
                                <div className="scope-text">
                                    {/* <h4 className="">1</h4> */}
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>

            </div>




        );
    }
}
export default NumerologyNo;
