import * as React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useHistory, useLocation, useParams } from "react-router-dom";
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
  let location = useLocation();
  console.log(location.state?.videoliveStream);
  let roomId = location.state?.videoliveStream;
  if (roomId) {
    let roomID = roomId;
    //   const roomID = roomId;
    // getUrlParams().get("roomID") || randomID(5);
    let role_str = getUrlParams(window.location.href).get("role") || "Host";
    const role =
      role_str === "Audience"
        ? ZegoUIKitPrebuilt.Audience
        : role_str === "Audience";

    let sharedLinks = [];
    if (role === ZegoUIKitPrebuilt.Audience || role_str === "Audience") {
      sharedLinks.push({
        name: "Join as co-host",
        url:
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "?roomID=" +
          roomID +
          "&role=Cohost",
      });
    }
    sharedLinks.push({
      name: "Join as audience",
      url:
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?roomID=" +
        roomID +
        "&role=Audience",
    });
    // generate Kit Token
    const appID = 913321685;
    const serverSecret = "ec2b5151f49c5376a2e91a5a81a69bc0";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5),
      randomID(5)
    );
    // start the call
    let myMeeting = async element => {
      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.LiveStreaming,
          config: {
            role,
          },
        },
        sharedLinks,
      });
    };

    return (
      <div
        className="myCallContainer"
        ref={myMeeting}
        style={{ width: "100vw", height: "100vh" }}
      ></div>
    );
  }
}
