import React from "react";
import "../../assets/scss/chat.scss";
import ReactHtmlParser from "react-html-parser";
class ChatAppMassage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChatList: [],
      Activeastro: {},
      index: "",
    };
  }

  render() {
    return (
      <>
        {this.props.roomChatData.length
          ? this.props.roomChatData
              .map((chat, index) => {
                return (
                  <>
                    {chat.type === "user" ? (
                      <div className="message me aaa">
                        <div
                          className="message-body"
                          dangerouslySetInnerHTML={{ __html: chat.msg }}
                        />
                      </div>
                    ) : (
                      <div className="message">
                        <div className="message-body abc">
                          {ReactHtmlParser(chat.msg)}
                        </div>
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
