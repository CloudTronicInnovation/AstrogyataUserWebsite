import React from "react";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../../layouts/LayoutOne";
import astrologinbg from "../../../assets/img/astrologin-bg.jpg";
class HeroscopeData extends React.Component {
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
                    <h1>ZODIAC SIGNS</h1>
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
                  <h3>Zodiac Signs</h3>
                  <p>
                    Zodiac signs refer to the 12 astrological signs that are
                    based on the position of the sun at the time of a person's
                    birth. The 12 zodiac signs are:
                  </p>
                  <h4>Aries (March 21 - April 19):</h4>
                  <p>
                    Aries are typically seen as confident, courageous, and
                    energetic, but can also be impulsive, impatient, and
                    short-tempered. They are natural leaders who are not afraid
                    to take risks and pursue their goals. Aries can be
                    impulsive, impatient, and short-tempered. They may struggle
                    with controlling their anger and acting before thinking
                    things through.
                  </p>
                  <h4> Taurus (April 20 - May 20):</h4>
                  <p>
                    Taurus are typically seen as reliable, patient, and
                    practical, but can also be stubborn, possessive, and
                    materialistic. They have a strong work ethic and are willing
                    to put in the effort to achieve their goals. Tauruses can be
                    stubborn, possessive, and materialistic. They may struggle
                    with adapting to change and letting go of things they value.
                  </p>
                  <h4>Gemini (May 21 - June 20):</h4>
                  <p>
                    Geminis are typically seen as curious, adaptable, and
                    sociable, but can also be inconsistent, superficial, and
                    indecisive. They are quick learners who excel at connecting
                    with others. Geminis can be inconsistent, superficial, and
                    indecisive. They may struggle with staying focused and
                    making important decisions.
                  </p>
                  <h4> Cancer (June 21 - July 22):</h4>
                  <p>
                    Cancers are typically seen as sensitive, empathetic, and
                    nurturing, but can also be moody, clingy, and overemotional.
                    They are deeply caring individuals who value relationships
                    and emotional connections. Cancers can be moody, clingy, and
                    overemotional. They may struggle with setting boundaries and
                    dealing with rejection.
                  </p>
                  <h4>Leo (July 23 - August 22):</h4>
                  <p>
                    Leos are typically seen as confident, generous, and
                    enthusiastic, but can also be arrogant, stubborn, and
                    attention-seeking. They are natural performers who love to
                    be in the spotlight and inspire others. Leos can be
                    arrogant, stubborn, and attention-seeking. They may struggle
                    with accepting criticism and sharing the spotlight with
                    others.
                  </p>
                  <h4>Virgo (August 23 - September 22):</h4>
                  <p>
                    Virgos are typically seen as practical, detail-oriented, and
                    analytical, but can also be critical, perfectionistic, and
                    anxious. They are perfectionists who strive for excellence
                    in everything they do. Virgos can be critical,
                    perfectionistic, and anxious. They may struggle with
                    accepting imperfections in themselves and others.
                  </p>
                  <h4> Libra (September 23 - October 22):</h4>
                  <p>
                    Libras are typically seen as diplomatic, charming, and
                    romantic, but can also be indecisive, superficial, and
                    people-pleasing. They have a natural ability to balance
                    competing interests and bring harmony to relationships.
                    Libras can be indecisive, superficial, and people-pleasing.
                    They may struggle with standing up for themselves and making
                    tough decisions.
                  </p>
                  <h4> Scorpio (October 23 - November 21):</h4>
                  <p>
                    Scorpios are typically seen as passionate, intense, and
                    mysterious, but can also be jealous, obsessive, and
                    vengeful. They are deeply committed individuals who value
                    honesty and authenticity. Scorpios can be jealous,
                    obsessive, and vengeful. They may struggle with trusting
                    others and letting go of grudges.
                  </p>
                  <h4> Sagittarius (November 22 - December 21):</h4>
                  <p>
                    Sagittarians are typically seen as optimistic, adventurous,
                    and philosophical, but can also be reckless, blunt, and
                    tactless. They are free spirits who are always seeking new
                    experiences and knowledge. Sagittarians can be reckless,
                    blunt, and tactless. They may struggle with following rules
                    and taking responsibility for their actions.
                  </p>
                  <h4>Capricorn (December 22 - January 19):</h4>
                  <p>
                    Capricorns are typically seen as responsible, disciplined,
                    and ambitious, but can also be rigid, pessimistic, and
                    unforgiving. They are driven individuals who work hard to
                    achieve their goals and fulfill their responsibilities.
                    Capricorns can be rigid, pessimistic, and unforgiving. They
                    may struggle with taking risks and being open to new
                    experiences.
                  </p>
                  <h4>Aquarius (January 20 - February 18):</h4>
                  <p>
                    Aquarians are typically seen as independent, progressive,
                    and humanitarian, but can also be detached, rebellious, and
                    eccentric. They value personal freedom and are not afraid to
                    challenge the status quo. Aquarians can be detached,
                    rebellious, and eccentric. They may struggle with forming
                    deep emotional connections with others and conforming to
                    societal norms.
                  </p>
                  <h4> Pisces (February 19 - March 20):</h4>
                  <p>
                    Pisces are typically seen as imaginative, empathetic, and
                    spiritual, but can also be escapist, impressionable, and
                    overly trusting. They have a deep connection to their
                    emotions and the world around them. Pisces can be escapist,
                    impressionable, and overly trusting. They may struggle with
                    setting boundaries and being realistic about their goals.
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
export default HeroscopeData;
