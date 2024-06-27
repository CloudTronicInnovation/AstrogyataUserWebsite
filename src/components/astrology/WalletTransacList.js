import React from "react";
import "../../assets/scss/astroteam.scss";
import axiosConfig from "../../axiosConfig";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class WalletTransacList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      WalletTransacList: [],
      data: {},
    };
    this.state = {
      TablerowData: [],
      columns: [
        {
          headerName: "ID",
          field: "transaction_id",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Amount Before",
          field: "beforeAmt",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Transaction Amount",
          field: "amount",
          sortable: true,
          filter: "agNumberColumnFilter",
        },
        {
          headerName: "Amount After",
          field: "finalAmt",
          sortable: true,
          filter: "agNumberColumnFilter",
        },
        {
          headerName: "Date/Time",
          field: "createdAt",
          sortable: true,
          filter: "agNumberColumnFilter",
        },
        {
          headerName: "	Transaction Type",
          field: "tran_Type",
          sortable: true,
          filter: "agNumberColumnFilter",
        },
      ],
    };
  }
  componentDidMount = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    axiosConfig
      .get(`/user/walletHistory/${userId}`)
      .then(response => {
        if (response.data.status === true) {
          this.setState({
            WalletTransacList: response.data.data,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
    axiosConfig
      .get(`/user/viewoneuser/${userId}`)
      .then(response => {
        this.setState({
          amount: response.data.data.amount,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { WalletTransacList } = this.state;
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
                    <h1>Wallet Transactions</h1>

                    <h3>
                      Available balance : <span>{this.state.amount}</span>
                    </h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section>
          <div
            className="ag-theme-balham"
            style={{
              height: "80vh",
              width: "100%",
            }}
          >
            <AgGridReact
              columnDefs={this.state?.columns}
              rowData={WalletTransacList}
              pagination={true}
              paginationPageSize={50}
            />
          </div>
        </section>
      </LayoutOne>
    );
  }
}
export default WalletTransacList;
