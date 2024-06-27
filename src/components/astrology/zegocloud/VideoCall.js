import React, { useEffect, useState, useRef } from "react";
import axiosConfig from "../../../axiosConfig";
// import { getUserID } from "../astrologerdetail";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useHistory } from "react-router-dom";

import swal from "sweetalert";
import { Fetchuserdetail } from "../../header/IconGroup";
function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}
export default function App() {
  const [timer, setTimer] = useState(0);
  const [toggle, setToggle] = useState(false);
  let ref = useRef();
  const history = useHistory();
  useEffect(() => {
    if (toggle) {
      ref.current = setInterval(() => setTimer(timer => timer + 1), 1000);
    }
    return () => {
      clearInterval(ref.current);
    };
  }, [toggle]);
  // useEffect(() => {
  //   let id = localStorage.getItem("astroId");
  //   axiosConfig.get(`/admin/getoneAstro/${id}`).then(res => {
  //     // console.log(res.data.data);
  //   });
  // }, []);
  const handleStart = () => {
    setToggle(true);
    handlestartinterval();
  };

  const handlestartinterval = () => {
    debugger;
    ref.current = setInterval(() => {
      let userId = JSON.parse(localStorage.getItem("user_id"));
      let astroId = localStorage.getItem("astroId");
      console.log(userId, astroId);
      sessionStorage.setItem("typeofcall", "Video");

      let payload = {
        userId: userId,
        astroId: astroId,
        type: "Video",
        // status: true,
      };
      axiosConfig
        .post(`/user/deductChatBalance`, payload)
        .then(res => {
          debugger;
          console.log("callduration", res.data);
          Fetchuserdetail();
        })
        .catch(err => {
          debugger;
          console.log(err.response.data.message);
          if (
            err.response.data.message === "Insufficient balance for the call"
          ) {
            this.handlestop();
            this.props.history.push("/allastrologerlist");
            swal("You have Low Balance");
          }
        });
    }, 1000);
  };
  const handleStop = () => {
    setToggle(false);
  };

  const roomID = getUrlParams().get("roomID") || randomID(5);
  const formatTime = timer => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };
  let myMeeting = async element => {
    // generate Kit Token
    const appID = 1011009319;
    const name = JSON.parse(localStorage.getItem("userData"));
    const response = name.Userinfo?.full_name || randomID(5).toString();
    const serverSecret = "0b7c5477f07346c1a906c99d3f171f2e";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5).toString(),
      response
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    let userID = JSON.parse(localStorage.getItem("user_id"));

    // start the call

    zp.joinRoom({
      container: element,
      maxUsers: 2,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            "/#/VideoCall" +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      preJoinViewConfig: {
        title: "Join Astrologer Video Call",
      },

      onJoinRoom: () => {
        let obj = {
          astroid: localStorage.getItem("astroId"),
          videoLink: roomID,
          userid: userID,
        };
        axiosConfig
          .post("/user/send_VideoLink", obj)
          .then(response => {
            // console.log(response.data.data);
          })
          .catch(error => {
            console.log(error);
          });
      },
      onLeaveRoom: async () => {
        handleStop();
        let astroid = localStorage.getItem("astroId");
        let value = {
          userId: userID,
          astroId: astroid,
        };
        axiosConfig
          .post(`/user/changeStatus`, value)
          .then(res => {
            console.log("CloneJob Stop", res);
            localStorage.removeItem("CurrentChat_userid");
            history.push("/astrorating");
          })
          .catch(err => {
            console.log(err.response.data);
          });
      },
      onUserJoin: () => {
        handleStart();
      },
      onUserLeave: async () => {
        handleStop();
        let astroid = localStorage.getItem("astroId");
        let value = {
          userId: userID,
          astroId: astroid,
        };
        axiosConfig
          .post(`/user/changeStatus`, value)
          .then(res => {
            // console.log("CloneJob Stop astrooo", res);
            localStorage.removeItem("CurrentChat_userid");
            history.push("/astrorating");
          })
          .catch(err => {
            console.log(err.response.data);
          });
      },

      showScreenSharingButton: false,
    });
  };

  return (
    <div>
      <div className=" timer">
        <div className="currentTime">Current timer - {formatTime(timer)}</div>
      </div>
      <div
        className="myCallContainer"
        ref={myMeeting}
        style={{ width: "98vw", height: "100vh" }}
      ></div>
    </div>
  );
}
