import React from "react";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
class TodayFestival extends React.Component {
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
                                        <h1>Today Festival </h1>
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
                                    <h3>Today Festival  </h3>

                                    <p>
                                        Lucky Gemstone is a remarkable branch of Vedic astrology. Collection of the 5 books, written during the period of 1939-1952 is called Lucky Gemstone. Written in ancient Urdu language, first time in the history of astrology, Lucky Gemstone introduced a new style of horoscope analysis with quick and affordable remedies. Authorship of the books seems to be disputed.
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
export default TodayFestival;
