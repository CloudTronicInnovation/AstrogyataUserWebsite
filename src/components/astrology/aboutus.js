import React from "react";
// import { Link } from 'react-router-dom'
import { Container, Row, Col } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import Abotimg from "../../assets/img/abot.png";
class AboutUs extends React.Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12 mb-30">
        <div className="category-home">
          <section>
            <Container>
              <div className="heading">
                <h2>About Us</h2>
                <img src={textbottom} alt="" className="sb-img" />
              </div>
              <Row>
                <Col lg="6">
                  <div>
                    <img
                      src={Abotimg}
                      alt=""
                      gclassName="ab-img"
                      className="abt-img"
                    />
                  </div>
                </Col>
                <Col lg="6">
                  <div className="">
                    <h3>Astrogyata Connects You With Best Astrologers</h3>
                    <p>
                      Astrology is a practice that originated thousands of years ago in which people study the positions of celestial bodies, such as the sun, moon, and planets, in the belief that they have an influence on human affairs and natural phenomena. Based on the positions of these bodies, astrologers create birth charts or horoscopes that are said to reveal someone's personality traits, life path, and potential future events.
                    </p>

                    <p>
                      There are total nine planets in the astrology are Sun (Surya), Moon (Chandra), Mars (Mangala), Mercury (Budha), Jupiter (Brihaspati), Venus (Shukra), Saturn (Shani), Rahu (north node of the moon), and Ketu (south node of the moon).
                    </p>

                    <p>
                      Among these planets, some planets are known as friendly planets, meaning the presence of them brings positivity to your life. And then, there are also planets that have a negative effect on human life. The latter would be planets like Rahu and Ketu. Their presence in one’s Kundli is said to bring pain and misery. The impact of planets on one’s life depends upon the position of these planets in houses. There are total twelve houses in Kundli and all of these houses represent one thing or the other
                    </p>


                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    );
  }
}

export default AboutUs;
