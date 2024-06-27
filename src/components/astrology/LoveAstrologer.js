import React from "react";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
class LoveAstrologer extends React.Component {
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
                                        <h1>Love & Astrologer</h1>
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
                                    <h3>Love & Astrologer</h3>
                                    <p>

                                        Astrology is often associated with love and relationships. The position of celestial bodies /Grah at the time of their birth can influence their personality traits and their romantic compatibility with others.
                                    </p>
                                    <p>According to astrology, there are 12 zodiac signs, each with its own unique personality characteristics and traits. It is believed that certain zodiac signs are more compatible with each other, while others may not be a good match.</p>
                                    <p>Astrology can also provide insight into the challenges and opportunities that may arise in a romantic relationship. For example, some zodiac signs may be more prone to jealousy, while others may have a greater capacity for emotional intimacy.</p>
                                    <p>With the help of Astrology, you can find the best partner for you, our online software prepared under the guidance of experienced astrologer and software is not just merely check the compatibility of zodiac signs.  Grah  </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </LayoutOne>
        );
    }
}
export default LoveAstrologer;
