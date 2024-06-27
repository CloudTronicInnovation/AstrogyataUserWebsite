import React, { Component } from "react";
import LayoutOne from "../../layouts/LayoutOne";
// import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row, ListGroup } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import axiosConfig from "../../axiosConfig";
import ReactHtmlParser from "react-html-parser";
export default class TermsOfUse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      termlist: [],
    };
  }
  componentDidMount() {
    axiosConfig
      .get(`/admin/get_term_cond`)
      .then(res => {
        console.log(res.data.data);
        this.setState({ termlist: res.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <LayoutOne headerTop="visible">
        <Container fluid className="mb-4">
          <Row className="mb-5">
            <div className="headingtitle text-center ptb-40">
              <h2>Terms and Conditions</h2>
              <img src={textbottom} alt="" className="sb-img" />
            </div>
          </Row>
          <Container>
            <Row>
              <ListGroup>
                {/* <h3 style={{ fontWeight: "500" }}>UPDATION</h3> */}
                {this.state.termlist &&
                  this.state.termlist?.map((all, index) => {
                    return <p key={index}> {ReactHtmlParser(all.desc)}</p>;
                  })}

                {/* <br></br> */}

                {/* <h3 style={{ fontWeight: "500" }}>USER CONSENT</h3>
                <p>
                  By accessing the Website and using it, you (“Member”, “You”,
                  “Your”) indicate that you understand the terms and
                  unconditionally & expressly consent to the Terms of Usage of
                  this Website. If you do not agree with the Terms of Usage,
                  please do not click on the “I AGREE” button. The User is
                  advised to read the Terms of Usage carefully before using or
                  registering on the Website or accessing any material,
                  information or services through the Website. Your use and
                  continued usage of the Website (irrespective of the amendments
                  made from time to time) shall signify your acceptance of the
                  terms of usage and your agreement to be legally bound by the
                  same.
                </p> */}

                {/* <br></br> */}

                {/* <h3 style={{ fontWeight: "500" }}>GENERAL DESCRIPTION</h3> */}
                {/* <p>
                  The Website is an internet-based portal having its existence
                  on World Wide Web, Application and other electronic medium and
                  provides astrological content, reports, data, telephone, video
                  and email consultations (hereinafter referred as “Content”).
                  The Website is offering “Free Services” and “Paid Services”
                  (Collectively referred as “Services”). Free Services are
                  easily accessible without becoming a member however for
                  accessing the personalised astrological services and/or
                  receive additional Content and get access to Paid Services,
                  You are required to register as a member on the portal. By
                  registering for Paid Services, a Member agrees to:
                </p> */}

                {/* <p>
                  Our prices do not vary according to the market needs,
                  competitor pricing etc.
                </p>
                <br></br>
                <br></br> */}
              </ListGroup>
            </Row>
          </Container>
        </Container>
      </LayoutOne>
    );
  }
}
