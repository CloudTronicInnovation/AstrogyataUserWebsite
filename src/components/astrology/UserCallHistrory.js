import React from "react";

import { Container, Row, Col, Table } from "reactstrap";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import LayoutOne from "../../layouts/LayoutOne";
import "../../assets/scss/astroteam.scss";
import axiosConfig from "../../axiosConfig";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { textFieldClasses } from "@mui/material";

class UserCallHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userChatList: [],
    };

    this.state = {
      TablerowData: [],
      columns: [
        {
          headerName: "Conversation ID",
          field: "Sid",
          sortable: true,
          filter: true,
          
          
        },
   {
          headerName: "Astrologer Name",
          field: "astroid.fullname",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Conversation Type",
          field: "Call",
          sortable: true,
          filter: "agNumberColumnFilter",
        cellRendererFramework: (params) => {
          const type = params.data?.userId?.type || "Call";
          return (
            <div>
              <span>{type}</span>
            </div>
          );
        },
        },
        {
          headerName: "Wallet Amount",
          field: "userid.amount",
          sortable: true,
          filter: "agNumberColumnFilter",
          valueGetter: (params) => {
            return Math.floor(params.data.userid.amount);
          },
        },

        {
          headerName: "Call Charges",
          field: "totalCredited",
          sortable: true,
          filter: "agNumberColumnFilter",
        },
        {
          headerName: "Duration",
          field: "Duration",
          sortable: true,
          filter: "agNumberColumnFilter",
          valueGetter: (params) => {
            const totalSeconds = params.data.totalDuration;
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            const formattedMinutes = String(minutes).padStart(2, '0');
            const formattedSeconds = String(seconds).padStart(2, '0');
            return `${formattedMinutes}:${formattedSeconds}`;
          },
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
      ]
    };
  }
  componentDidMount() {
    let userId = JSON.parse(localStorage.getItem("user_id"));

    axiosConfig
      .get(`/user/userCallHistory/${userId}`)
      .then(response => {
        if (response.data.status === true) {
          this.setState({
            userChatList: response?.data?.data,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { userChatList } = this.state;
    console.log(userChatList);

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
                    <h1>User Call History</h1>
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
              rowData={userChatList}
              pagination={true}
              paginationPageSize={50}
            />
          </div>
        </section>
        {/* <section>
          <Container>
            <Row>
              <Col lg="12">
                <div className="">
                  <Table striped className="">
                    <thead>
                      <tr>
                        <th>#Conversation ID</th>
                        <th>Astrologer Name</th>

                        <th>Conversation Type</th>
                        <th>Rate</th>
                        <th>Duration</th>

                        <th>Deducation</th>
                        <th>Date/Time</th>
                      </tr>
                    </thead>
                    {userChatList.length
                      ? userChatList.map(user => {
                          return (
                            <tbody key={user._id}>
                              <tr>
                                <th>{user?.Sid}</th>
                                <td>{user?.astroid?.fullname}</td>

                                <td>Call</td>

                                <td>{user?.astroid?.callCharge}/Min.</td>

                                <td>{user?.Duration} Min</td>
                                <td>{user?.userdeductedAmt} Rs</td>
                                <td>{user?.DateCreated.split("T")[0]}</td>
                              </tr>
                            </tbody>
                          );
                        })
                      : null}
                  </Table>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}
      </LayoutOne>
    );
  }
}

export default UserCallHistory;
