import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  Form,
  Button,
} from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import "../../assets/scss/astroteam.scss";
import noteimg from "../../assets/img/note.png";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import { connect } from "react-redux";
import { removeNotification } from "../../redux/actions/astoStatusAction";

class NotificationList extends React.Component {
  constructor() {
    super();
    this.state = {
      availableAstros: null,
      notification: [],
    };
  }

  componentDidMount = () => {
    axiosConfig
      .get("/admin/get_notification")
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({ notification: response.data.data });
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
    if (Object.keys(this.props?.astro_data)?.length)
      this.setState({ notification: [this.props?.astro_data] });
    else {
      this.setState({ notification: [] });
    }
  };
  componentWillUnmount() {
    //remove notification when user seen
    if (Object.keys(this.props?.astro_data)?.length > 0)
      this.props.removeNotification();
  }

  notificationDelete = (id) => {
    axiosConfig
      .get("/admin/dlt_notification/" + id)
      .then((response) => {
        console.log("@@@@@", response.data.data);
        swal("Success!", "Address SuccessFull! Deleted", "success");
        window.location.reload(true);
      })

      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };
  render() {
    const { notification } = this.state;

    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              // backgroundColor: "#ffcc01",
              // width: "100%",
              // padding: "70px 0px",
              // backgroundSize: "cover",
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
                    <h1>Notification</h1>
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
                <div className="notes-box">
                  <Row>
                    {notification.length ? (
                      notification.map((notif, index) => {
                        return (
                          <Col lg="12" key={index}>
                            <div className="noteify-list">
                              <div className="noteifybx">
                                <img src={noteimg} alt="" width="50px" />
                              </div>
                              <div className="noteifybxx">
                                <h2>
                                  {notif.fullname}
                                  {`, ${notif?.msg}`}
                                </h2>
                                <p>{notif.status}</p>
                                <span className="notify-sp">
                                  <button
                                    onClick={() =>
                                      this.notificationDelete(notif._id)(
                                        window.location.reload()
                                      )
                                    }
                                  >
                                    <i
                                      class="fa fa-times"
                                      aria-hidden="true"
                                    ></i>
                                  </button>
                                </span>
                              </div>
                            </div>
                          </Col>
                        );
                      })
                    ) : (
                      <h1 className="text-center my-2">No Notification</h1>
                    )}
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
const mapStateToProps = (state) => ({
  astro_data: state.notificationData.data,
});
const mapDispatchToProps = (dispatch) => {
  return {
    removeNotification: () => dispatch(removeNotification()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NotificationList);