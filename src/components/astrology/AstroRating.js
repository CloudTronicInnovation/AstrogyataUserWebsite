import React from "react";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import StarRatingComponent from "react-star-rating-component";
import { Col, Container, Row } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import swal from "sweetalert";
import Swal from "sweetalert2";
import axiosConfig from "../../axiosConfig";
class AstroRating extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 1,
      rating_custom_icon: 6,
      rating_half_star: 3.5,
      rating_empty_initial: 0,
      type: "Chat",
      astroid: "",
      userid: "",
      comment: "",
      showAlertOnBack: false, 
    };
  }

  // For not go back on chatapp after exit 
  componentDidMount() {
    window.history.pushState(null, null, window.location.href); // Manipulate history state to prevent back navigation
    window.addEventListener("popstate", this.handlePopState); // Add listener for back button
  }

  componentWillUnmount() {
    window.removeEventListener("popstate", this.handlePopState); // Clean up back button listener
  }

  handlePopState = (e) => {
    if (this.state.showAlertOnBack) {
      // alert("You cannot navigate back from this page.");
      Swal.fire({
        icon: "warning",
        title: "You cannot navigate back from this page",
        width: "500px",
        timer: 1000,
      });
      this.setState({ showAlertOnBack: false });
    }
    window.history.pushState(null, null, window.location.href);
  };

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  onStarClickHalfStar(nextValue, prevValue, name, e) {
    const xPos =
      (e.pageX - e.currentTarget.getBoundingClientRect().left) /
      e.currentTarget.offsetWidth;

    if (xPos <= 0.5) {
      nextValue -= 0.5;
    }

    console.log(
      "name: %s, nextValue: %s, prevValue: %s",
      name,
      nextValue,
      prevValue
    );
    this.setState({ rating_half_star: nextValue });
  }

  onStarClickEmptyInitial(nextValue, prevValue, name) {
    console.log(
      "name: %s, nextValue: %s, prevValue: %s",
      name,
      nextValue,
      prevValue
    );
    this.setState({ rating_empty_initial: nextValue });
  }
  submitHandler = e => {
    console.log("e, astroid,");
    e.preventDefault();
    let user_id = JSON.parse(localStorage.getItem("user_id"));  
    let astroId = localStorage.getItem("astroId");
    let obj = {
      userid: user_id,
      astroid: astroId,
      rating: this.state.rating,
      comment: this.state.comment,
      type: this.state.type,
    };
    axiosConfig
      .post(`/user/addChatReview`, obj)
      .then(response => {
        this.setState({
          comment: "",
          rating: "1",
          
        });

        // swal("Success!", "Thank You For Your Valuable FeedBack", "success");
        Swal.fire({
          icon: "success",
          title: "Thank You For Your Valuable FeedBack",
          width: "500px",
          timer: 1500,
        });
        this.props.history.push("/");
      })

      .catch(error => {
        console.log(error);
      });
  };

  handleChange = e => {
    this.setState({
      // rating: e.target.value,
      comment: e.target.value,
    });
  };

  render() {
    let astroname = (localStorage.getItem("astroname"));  
    // console.log(astroname);
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
                    <h1>Your Review for<br/> {astroname.toUpperCase()}</h1>
                    <p></p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section>
          <Container>
            <Row>
              <Col lg="12">
                <div className="rat-box">
                  <h3>Add Reviews</h3>
                  <form>
                    <Row>
                      <Col md="6">
                        <div className="star-bx mt-5">
                          <h3>Rating Number({this.state.rating})</h3>
                          <div style={{ fontSize: 26 }}>
                            <StarRatingComponent
                              name="app2"
                              starCount={5}
                              value={Number(this.state.rating)}
                              onStarClick={this.onStarClick.bind(this)}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="comm-bx">
                          <label>Comments *</label>
                          <textarea
                            name="comment"
                            placeholder="Your Message*"
                            required
                            maxLength={150}
                            value={this.state.comment}
                            onChange={e => {
                              this.handleChange(e);
                            }}
                          ></textarea>
                          <button
                            className="stb-btn"
                            onClick={e =>
                              this.submitHandler(
                                e,
                                this.state.astroId,
                                this.state.userId
                              )
                            }
                          >
                            Submit
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default AstroRating;
