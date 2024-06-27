import React from "react";
import axiosConfig from "../../axiosConfig";
import LayoutOne from "../../layouts/LayoutOne";
import aboutone from "../../assets/img/aboutone.png";
import asectionbg from "../../assets/img/asectionbg.jpg";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import { Container, Row, Col } from "reactstrap";
class AboutDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutDetail: [],
    };
  }

  componentDidMount = () => {
    axiosConfig
      .get("/admin/getAbout_us")
      .then(response => {
        console.log(response.data.data);
        if (response.data.status === true) {
          this.setState({ aboutDetail: response.data.data });
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.response);
      });
  };
  render() {
    const { aboutDetail } = this.state;
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
                    <h1>About Us</h1>
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
              {aboutDetail.length
                ? aboutDetail.map((abtdetail, index) => {
                  return (
                    <Col key={index} lg="6">
                      <div className="abo-1">
                        <h3>WHAT WE DO</h3>
                        <p>{abtdetail?.aboutDetail}</p>
                        <div className="bst-stro">
                          <h2>Call Us </h2>
                          <h3>
                            <i class="fa fa-phone"></i>
                            189 000 000 000
                          </h3>
                        </div>
                      </div>
                    </Col>
                  );
                })
                : null}
              <Col lg="6">
                <div className="abo-2">
                  <img src={aboutone} alt="" className="about-img"></img>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section
          style={{
            backgroundImage: `url(${asectionbg})`,
            width: "100%",
            padding: "0px 0px",
            backgroundSize: "cover",
          }}
        >
          <Container>
            <Row>
              <Col md="6">
                <div className="ourm">
                  <h2>MISSION</h2>
                  <p>
                    Our mission is to create a community for the people who seek
                    astrological guidance for the betterment of life. We want to
                    help out people who are going through a bad phase of life in
                    the most trusted way.
                  </p>
                </div>
              </Col>
              <Col md="6">
                <div className="ourm">
                  <h2>VISION</h2>
                  <p>
                    Our vision is to provide astrological solutions to the
                    customers who are facing problems. We want to give direction
                    to their life with the assistance of our trusted and
                    certified astrologers.
                  </p>
                </div>
              </Col>

              <Col md="12">
                <div className="ourm mb-50">
                  <h2>OUR STORY</h2>
                  <p>
                    Astrogyata came into being with an aim to not only keep the ethos of traditional astrology intact but to also amalgamate in it the solutions to modern problems like mental health, stress, depression, etc.
                    With that being the first and foremost goal, Astrogyata founder, Puneet Gupta, has not only worked to deliver the best of Vedic astrology on the platform but has touched every aspect of mental wellnessthrough spiritual means.
                    With the grace of God, Astrogyata, over the years, has not only been able to achieve the aforementioned aim but also add-on to the list of ‘achieved goals’ and continues to do so.
                    Today, with over 4000 astrologers onboard and over 1 Lakh minutes of daily consultation, Astrogyata, besides allowing you to talk to the best astrologers, also provides numerous other services like Free live sessions, Free Kundli matching, Daily horoscope and much more.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col md="12">
                <FunFactOne />
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default AboutDetail;
