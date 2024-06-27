import React from "react";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import aries from "../../assets/img/heroscope/aries.png";
import astromob from "../../assets/img/astromob.png";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
class HeroscopesAll extends React.Component {
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
                    <h1>Yearly Horoscope 2022</h1>
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
              <Col lg="9">
                <div className="scope-1">
                  <h3>YEARLY HOROSCOPE 2022 PREDICTIONS</h3>
                  <p>
                    Astrogyata brings together astrologers and their boundless
                    knowledge about the occult science of Astrology on one
                    platform and lets you connect with them 24*7. Apart from the
                    best future predictions that help you get through the
                    difficult phase of life, Astrogyata also offers Free Live
                    astrology sessions, Daily horoscope, Free kundli matching
                    service, Spiritual store and much more.
                  </p>
                  <Row>
                    <Col md="12">
                      <div className="scope-detail">
                        <h4 className="mtb-20">
                          Aries Horoscope Predictions 2022
                        </h4>
                        <div className="scope-img">
                          <img src={aries} alt="" />
                        </div>
                        <div className="scope-text">
                          <p>
                            For starters, the Aries natives shall see a slow
                            start heading their way as they embrace the year
                            2022. And the first thing to slow down for the
                            Arians shall be your career prospects. Despite the
                            placement of Saturn in the Capricorn sign, which is
                            favorable for you, you might have to struggle in
                            finding yourself new opportunities. A dry spell in
                            your career or business shall exist for you till the
                            end of the first quarter of the year. Also, any kind
                            of professional goal.
                          </p>
                        </div>
                        <p className="mt-20">
                          As per the Aries yearly horoscope 2022, the native
                          will perform exceptionally well in their professional
                          life. The beginning of the year will not be as
                          expected. However, by the grace of Saturn in the tenth
                          house of the profession, you will soon be on the verge
                          of performing well in your job as well as in business.
                          Just keep in mind that, especially in the middle of
                          the year, you should be a little aware of the problems
                          in the workplace. This year will be a mixed time for
                          the students. So, make sure you focus well and keep
                          moving forward in your field of study.
                        </p>
                        <p className="mt-10">
                          As for your love life, Aries annual horoscope 2022
                          indicates that you will enjoy a romantic and
                          passionate time in 2022. The planet Jupiter joining
                          Venus in the third quarter will help you overcome the
                          lack of intimate love and indicate an auspicious time.
                          However, for some time, Rahu will enter the second
                          house of domestic affairs, which can make the family
                          environment irritable and tense. Soon that time too
                          will pass, and there will be a pleasant and joyful
                          time for your spouse or partner as well as your
                          family.
                        </p>
                        <p className="mt-10">
                          Financially, the Aries yearly horoscope 2022 predicts
                          that you may suffer losses around the second quarter
                          of the year. So, remember not to invest too much money
                          in too many places. In general, 2022 will not be good
                          in terms of health for Aries natives. Blame the shadow
                          planet Rahu which will be in your 2nd and 8th house,
                          which can cause digestive and allergic problems. Make
                          sure you avoid oily and unhealthy things and stick to
                          a veggie-specific diet.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg="3">
                <div className="abo-2">
                  <img src={astromob} alt="" width="100%"></img>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
export default HeroscopesAll;
