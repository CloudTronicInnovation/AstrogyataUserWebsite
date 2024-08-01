import React from "react";
import { connect } from "react-redux";
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
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import LayoutOne from "../../layouts/LayoutOne";
import "../../assets/scss/astroteam.scss";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axiosConfig from "../../axiosConfig";
import { setWalletAmount } from "../../redux/actions/walletActions"; 

class WalletMoney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      planList: [],
      data: {},
      amount: 0,
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  componentDidMount = () => {
    let user_id = JSON.parse(localStorage.getItem("user_id"));
    console.log("first", user_id);
    axiosConfig
      .get(`/user/viewoneuser/${user_id}`)
      .then(response => {
        console.log("Wallet Money", response.data.data);
        
        this.setState({
          amount: response.data.data.amount,
          
        });
        this.props.dispatch(setWalletAmount(response.data.data.amount));
  
      })
      .catch(error => {
        console.log(error);
      });
      

    axiosConfig
      .get("/user/active_plans")
      .then(response => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({ planList: response.data.data });
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.response.data.data);
      });
  };

  render() {
    const { planList } = this.state;
    console.log(planList);
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
                    <h1>Add Money to Wallet</h1>
                    <h3>
                      Available balance : <span>{Math.floor(this.state.amount)}</span>
                    </h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section>
          <Container>
            <Row>
              <Col xl="3" lg="3" md="3" sm="6" xs="6">
                <Link to="/walletaddform">
                  <div className="promoBox success-box info-ribbon">
                    <aside>
                      <p>100% extra</p>
                    </aside>
                    <h4>Amount</h4>
                    <p></p>
                  </div>
                </Link>
              </Col>
              {planList.length
                ? planList.map((plan, index) => {
                    return (
                      <Col xl="3" lg="3" md="3" sm="6" xs="6" key={index}>
                        <Link
                          to={{
                            pathname: "/paymentdetail",
                            state: plan.amount,
                          }}
                        >
                          <div className="promoBox success-box info-ribbon">
                            <aside>
                              <p>{plan.title}</p>
                            </aside>
                            <h4>INR {plan.amount}</h4>
                          </div>
                        </Link>
                      </Col>
                    );
                  })
                : null}
            </Row>
          </Container>
        </section>

        {/* modal for recharge*/}

        <Modal
          size="md"
          style={{ maxWidth: "600px", width: "100%" }}
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader className="wr-3" toggle={this.toggle}>
            <h2 className="wr-4">Apply Voucher Code</h2>
          </ModalHeader>
          <ModalBody>
            <div className="Wr-1 wr-t">
              <form>
                <Col md="12">
                  <input type="text" placeholder="Enter Your Voucher  Code" />
                </Col>
                <Button className="btn btn-success">Submit</Button>
              </form>
            </div>
          </ModalBody>
        </Modal>
      </LayoutOne>
    );
  }
}

export default connect()(WalletMoney);
