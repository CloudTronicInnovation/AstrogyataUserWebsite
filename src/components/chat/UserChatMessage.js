import React from "react";
import "../../assets/scss/chat.scss";
import axiosConfig from "../../axiosConfig";
class ChatAppMassage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChatList: [],
      Activeastro: {},
      index: "",
    };
  }
  componentDidMount = () => {
    // axiosConfig
    //   .get(`/user/allchatwithuser/${response.data?.data?.roomid}`)
    //   .then(respons => {
    //     this.handleStart();
    //     console.log(respons?.data?.data);
    //     if (respons.data.status === true) {
    //       this.setState({ roomChatData: respons?.data.data });
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  render() {
    console.log("roomChatData", this.props.roomChatData);
    return (
      <>
        {this.props.roomChatData.length
          ? this.props.roomChatData
              .map((chat, index) => {
                return (
                  <>
                    {chat.type === "user" ? (
                      <div className="message me">
                        <div className="message-body">{chat.msg}</div>
                      </div>
                    ) : (
                      <div className="message">
                        <div className="message-body">{chat.msg}</div>
                      </div>
                    )}
                  </>
                );
              })
              .reverse()
          : null}
      </>
    );
  }
}

export default ChatAppMassage;
