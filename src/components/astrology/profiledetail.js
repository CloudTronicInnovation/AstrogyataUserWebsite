import React from "react"
import { Link } from "react-router-dom";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
import women from "../../assets/img/women.jpg";
import LayoutOne from "../../layouts/LayoutOne";
import Tab from "react-bootstrap/Tab";
import Rating from "@mui/material/Rating";
import LinearProgress from "@mui/material/LinearProgress";
import Nav from "react-bootstrap/Nav";
import popupimg  from "../../assets/img/popupimg.png";


class ProfileDetail extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
        modalState: true
    };

    this.handleShow = this.handleShow.bind(this);
}

handleShow() {
    this.setState({ modalState: !this.state.modalState });
}

  render() {


    return (
      <div>
          <div className={"modal fade" + (this.state.modalState ? " show d-block" : " d-none")} tabIndex="-1" role="dialog">
              <div className="modal-dialog md-1" role="document">
                  <div className="modal-content">
                      <div className="modal-header md-h">
                          <h2> WelCome to <strong> Astro Vipra</strong></h2>
                          <button type="button" className="close md-close" onClick={this.handleShow}>
                              <span>&times;</span>
                          </button>
                      </div>
                      <div className="modal-body">
                           <Row>
                                <Col md="12">
                                    <h3>What’s Your Sign? Read Your Daily, Weekly and Monthly Horoscope Today Our Best Astrologer's</h3>
                                </Col>
                                <Col md="8">
                                     <div className="md-left">
                                          <ul>
                                              <li>
                                                  <i class="fa fa-hand-o-right md-i" aria-hidden="true"></i>
                                                 <Link>
                                                    Astrology could be deemed the first science, as planetary interactions observed in the night sky were used to chart seasonal agricultural calendars.
                                                 </Link>
                                              </li>
                                              <li>
                                                 <i class="fa fa-hand-o-right md-i" aria-hidden="true"></i>
                                                 <Link>
                                                 Astrology is the study of the movements of the sun, moon, and planets, and how those movements influence human behavior. 
                                                 </Link>
                                              </li>
                                              <li>
                                                 <i class="fa fa-hand-o-right md-i" aria-hidden="true"></i>
                                                 <Link>
                                                 Astrology is not a science; rather, it’s a symbolic language. It uses hieroglyphic symbols to help uncover unconscious ideas, thought patterns.
                                                 </Link>
                                              </li>
                                              <li>
                                                 <i class="fa fa-hand-o-right md-i" aria-hidden="true"></i>
                                                 <Link>
                                                 An astrologer can decode the chart and describe your inner world, personality traits, love life, finances, professional life, marriage, marriage partners, parents, children, siblings, and friends. 
                                                 </Link>
                                              </li>
                                              <li>
                                                 <i class="fa fa-hand-o-right md-i" aria-hidden="true"></i>
                                                 <Link>
                                                    An astrology reading can offer an alternative perspective and much-needed validation.
                                                 </Link>
                                              </li>
                                          </ul>
                                     </div>
                                </Col>
                                 <Col md="4">
                                     <div className="md-left">
                                         <img src={popupimg}  alt="" className="mdl-img"/>
                                      </div>
                                 </Col>
                           </Row>
                      </div>
                      {/* <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" onClick={this.handleShow}>Close</button>
                          <button type="button" className="btn btn-primary">Save changes</button>
                      </div> */}
                  </div>
              </div>
          </div>
      </div>
  );
  }
}


export default ProfileDetail;
