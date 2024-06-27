import React from "react";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
class Tarot extends React.Component {
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
                                        <h1>Tarot </h1>
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
                                    <h3>Tarot</h3>

                                    <p>
                                        Tarot is a deck of cards used for divination, spiritual guidance, and personal insight. It
                                        consists of 78 cards, each with its own symbolic meaning and artwork. The Tarot deck is
                                        divided into two parts: the Major Arcana, which contains 22 cards that represent major
                                        life themes and archetypes, and the Minor Arcana, which contains 56 cards that represent more everyday events and experiences.
                                    </p>
                                    <p>During a Tarot reading, the cards are shuffled and laid out in a specific pattern or "spread." The reader then interprets the meaning of the cards based on their position in the spread, the symbols and images on the cards, and the intuition and knowledge of the reader. Tarot readings providew insights into a person's past, present, and future, as well as guidance on important decisions, relationships, and other aspects of life.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </LayoutOne>
        );
    }
}
export default Tarot;
