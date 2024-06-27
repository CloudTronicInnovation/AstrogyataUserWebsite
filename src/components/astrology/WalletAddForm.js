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
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";

class WalletAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      userid: "",
      amount: "",
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    // let { id } = this.props.match.params
    // console.log(id)
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let obj = {
      userid: userId,
      amount: parseInt(this.state.amount),
    };

    axiosConfig
      .post(`/user/add_custome_amt`, obj)
      .then(response => {
        console.log("@@@@@", response.data.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/allastrologerlist");
      })

      .catch(error => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };
  render() {
    return (
      <LayoutOne headerTop="visible">
        <section>
          <Container>
            <Row>
              <Col lg="2"></Col>
              <Col lg="8">
                <div className="wal-amt">
                  <h3>Add Amount to Wallet</h3>
                  <form onSubmit={this.submitHandler}>
                    <Row>
                      <Col md="12">
                        <label>Amount</label>
                        <input
                          type="text"
                          placeholder="Enter Amount"
                          name="amount"
                          value={this.state.amount}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col md="12" className="mt-3">
                        <Button className="btn btn-success">Submit</Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
              <Col lg="2"></Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default WalletAddForm;
