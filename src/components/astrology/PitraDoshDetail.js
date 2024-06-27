import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";

import astrologinbg from "../../assets/img/astrologin-bg.jpg";

class PitraDoshDetail extends React.Component {
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
                                        <h1>PITRA DOSH DETAIL </h1>
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
                                    <h3>Pitra Dosh Detail</h3>
                                    <p>
                                        Pitra Dosh is a term used in Vedic astrology to describe a specific astrological condition that is believed to affect an individual's life due to the ancestors' sins. It is believed that if the ancestors' sins have not been resolved, it may result in Pitra Dosh in the individual's birth chart, which can cause negative effects in various aspects of life.
                                    </p>

                                    <p>
                                        According to Vedic astrology, Pitra Dosh is caused by the position of the Sun, Moon, and Mars in specific houses of an individual's birth chart. It is believed that the presence of this condition may cause problems in financial matters, health issues, delays in marriage, and difficulties in having children.

                                    </p>


                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </LayoutOne>
        );
    }
}
export default PitraDoshDetail;
