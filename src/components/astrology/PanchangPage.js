import React from "react";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
class PanchangPage extends React.Component {
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
                    <h1>About Panchang</h1>
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
                  <h3>PANCHANG</h3>
                  <p>
                    Panchang is an astrological calendar that is based on the
                    position of celestial bodies such as the Sun, Moon, and
                    planets. It is used to determine auspicious times for
                    various events, such as weddings, travel, and starting new
                    ventures. The panchang also provides information on
                    important festivals and fasting dates, as well as the phases
                    of the moon and other astronomical phenomena. With the help
                    of panchnag, a person can choose to start or accomplish a
                    particular task after studying the favorable planets ruling
                    the particular task. It is a belief among people that doing
                    task(s) as per panchang timings brings good fortune and
                    helps in the completion of the tasks with ease. Our online
                    panchang software developed in consultation of our
                    astrologers to get maximum benefits.
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
export default PanchangPage;
