import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";

import "../../assets/scss/astroteam.scss";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";

class AskQuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modeChange: true,
      SelectedPackage: "125",
      askAstroList: [],
    };
  }
  componentDidMount = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    axiosConfig
      .get(`/user/completed_order/${userId}`)
      .then(response => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({ askAstroList: response.data?.data });
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  callback = data => {
    this.setState({ modeChange: data });
  };

  render() {
    const { askAstroList } = this.state;

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
                    <h1>Ask Question Astrologer</h1>
                    <p></p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section id="team" class="pb-5">
          <Container>
            <Row>
              {askAstroList.length ? (
                askAstroList?.map((askAstro, index) => {
                  return (
                    <Col md="3" key={index}>
                      <div className="image-flip">
                        <div className="mainflip flip-0">
                          <div className="frontside">
                            <Link
                              to={"/askquestion/" + askAstro?.astroid?._id}
                              className=""
                            >
                              <div className="card">
                                <div className="card-body text-center">
                                  <p>
                                    <img src={askAstro?.astroid?.img} alt="" />
                                  </p>
                                  <h4 className="card-title">
                                    {askAstro?.astroid?.fullname}
                                  </h4>
                                  <ul className="mb-3">
                                    <li>
                                      Specility:
                                      <span>
                                        {askAstro?.astroid?.all_skills}
                                      </span>
                                    </li>
                                    <li>
                                      Language:
                                      <span>{askAstro?.astroid?.language}</span>
                                    </li>
                                    <li>
                                      Experience:
                                      <span>
                                        {askAstro?.astroid?.exp_in_years}
                                      </span>
                                    </li>
                                    <li>
                                      Call Rate:
                                      <span>
                                        {askAstro?.astroid?.callCharge}/Mins
                                      </span>
                                    </li>
                                  </ul>
                                  <Link
                                    className="btn btn-primary btn-sm st-d"
                                    to={
                                      "/askquestion/" + askAstro?.astroid?._id
                                    }
                                  >
                                    Ask Question
                                  </Link>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })
              ) : (
                <span>You did not purchase any plan </span>
              )}
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default AskQuestionList;
