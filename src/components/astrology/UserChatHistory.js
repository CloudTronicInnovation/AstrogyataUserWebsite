import React from "react";
import "../../assets/scss/astroteam.scss";
import axiosConfig from "../../axiosConfig";
import { Container, Row, Col } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class UserChatHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserChatHistory: [],
      data: {},
      WalletBalance: "",
    };

    this.state = {
      TablerowData: [],
      columns: [
        {
          headerName: "Astrologer Name",
          field: "astroId.fullname",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Conversation Type",
          field: "type",
          sortable: true,
          filter: "agNumberColumnFilter",
        },
        {
          headerName: "Rate",
          field: "totalCredited",
          sortable: true,
          filter: "agNumberColumnFilter",
        },
        {
          headerName: "Amount",
          field: "userAmt",
          sortable: true,
          filter: "agNumberColumnFilter",
        },

        {
          headerName: "Deduction",
          field: "userdeductedAmt",
          sortable: true,
          filter: "agNumberColumnFilter",
        },

        {
          headerName: "Duration (In Seconds)",
          field: "totalDuration",
          sortable: true,
          filter: "agNumberColumnFilter",
        },
        {
          headerName: "Date",
          valueGetter: function (params) {
            return params.data.createdAt.split("T")[0];
          },
          sortable: true,
          filter: "agNumberColumnFilter",
        },
        {
          headerName: "Time",
          valueGetter: function (params) {
            const date=new Date(params.data.createdAt)
            return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            // return params.data.createdAt.split("T")[1].split(".")[0];
          },
          sortable: true,
          filter: "agNumberColumnFilter",
        },
      ],
    };
  }
  componentDidMount = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));

    axiosConfig
      .get(`/user/viewoneuser/${userId}`)
      .then(response => {
        console.log(response.data.data.amount);
        // sessionStorage.setItem("userBalance", response.data.data.amount);
        this.setState({ WalletBalance: response.data.data.amount });
      })
      .catch(error => {
        console.log(error);
      });
    axiosConfig
      .get(`/user/userChathistory/${userId}`)
      .then(response => {
        const AllChatData = response.data.data.filter(
          ele => ele.type === "chat"
        );
        this.setState({
          UserChatHistory: AllChatData,
        });
      })
      .catch(error => {
        console.log(error);
      });
    axiosConfig
      .get(`/user/userChathistory/${userId}`)
      .then(response => {
        console.log(response);
        this.setState({
          amount: response.data.data.amount,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state.UserChatHistory);
    const { UserChatHistory } = this.state;
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
                    <h1>UserChatHistory Transactions</h1>

                    <h3>
                      Available balance :
                      <span>Rs {this.state.WalletBalance}</span>
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
              rowData={UserChatHistory}
              pagination={true}
              paginationPageSize={50}
            />
          </div>
        </section>
      </LayoutOne>
    );
  }
}
export default UserChatHistory;
