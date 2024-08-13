import React from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
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
          width: 270
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
          width:150,
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
          field: "userAmt",
          sortable: true,
          width:130,
          filter: "agNumberColumnFilter",
          valueGetter: (params) => {
            return Math.floor(params.data.userAmt);
          },
        },

        {
          headerName: "Call Charges",
          field: "totalCredited",
          sortable: true,
          width:120,
          filter: "agNumberColumnFilter",
        },
        {
          headerName: "Call Duration",
          field: "Duration",
          width:120,
          sortable: true,
          filter: "agNumberColumnFilter",
          valueGetter: (params) => {
            const totalSeconds = params.data.Duration;
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            const formattedMinutes = String(minutes).padStart(2, "0");
            const formattedSeconds = String(seconds).padStart(2, "0");
            return `${formattedMinutes}:${formattedSeconds} Min`;
          },
        },
        {
          headerName: "Date",
          width:120,
          valueGetter: function (params) {
            return params.data.createdAt.split("T")[0];
          },
          sortable: true,
          filter: "agNumberColumnFilter",
        },
        {
          headerName: "Time",
          width:120,
          valueGetter: function (params) {
            const date = new Date(params.data.createdAt);
            return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            // return params.data.createdAt.split("T")[1].split(".")[0];
          },
          sortable: true,
          filter: "agNumberColumnFilter",
        },
        {
          headerName: "Call Record",
          field: "RecordingUrl",
          sortable: true,
          filter: "agNumberColumnFilter",
          cellRendererFramework: (params) => {
            const { value } = params;
            return (
              <>
                {value ? (
                  <button
                    class="btn btn-warning btn-sm"
                    onClick={() => this.handlePlayPause(value)}
                  >
                    Play
                  </button>
                ) : (
                  <span>No recording available</span>
                )}
              </>
            );
          },
        },
      ],
    };
  }
  componentDidMount() {
    let userId = JSON.parse(localStorage.getItem("user_id"));

    axiosConfig
      .get(`/user/userCallHistory/${userId}`)
      .then((response) => {
        if (response.data.status === true) {
          this.setState({
            userChatList: response?.data?.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handlePlayPause = (audioUrl) => {
    Swal.fire({
      title: "Recorded Call",
      width: 400,
      html: `
        <audio id="audioPlayer" controls>
          <source src="${audioUrl}" type="audio/mp3" />
        </audio>
        <br />
        <button id="playButton"  class="btn btn-secondary">Play</button>
        <button id="pauseButton" class="btn btn-danger">Pause</button>
      `,

      confirmButtonText: "Close",
      didOpen: () => {
        const audioPlayer = document.getElementById("audioPlayer");
        const playButton = document.getElementById("playButton");
        const pauseButton = document.getElementById("pauseButton");

        playButton.addEventListener("click", () => {
          audioPlayer.play();
        });
        pauseButton.addEventListener("click", () => {
          audioPlayer.pause();
        });

        // Store reference to the audio player
        this.setState({ audioPlayer, audioUrl });
      },
      willClose: () => {
        // Stop and reset audio player on modal close
        if (this.state.audioPlayer) {
          this.state.audioPlayer.pause();
          this.state.audioPlayer.currentTime = 0;
        }
      },
    });
  };

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
              paginationPageSize={20}
              rowHeight={50}
              colWidth={150}
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
