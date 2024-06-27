// import * as React from "react";
// // import './style.css';
// import { getUserID } from "../astrologerdetail";
// // import { getUser1ID } from "../LiveAstrologer";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
// // import { generateToken, getRandomName, randomID } from "./util";
// function randomID(len) {
//   let result = "";
//   if (result) return result;
//   var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
//     maxPos = chars.length,
//     i;
//   len = len || 5;
//   for (i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   return result;
// }

// export function getUrlParams(
//   url: string = window.location.href
// ): URLSearchParams {
//   let urlStr = url.split("?")[1];
//   return new URLSearchParams(urlStr);
// }

// export default function LiveVideo() {
//   const roomID = getUrlParams().get("roomID") || randomID(5);
//   let role_str = getUrlParams(window.location.href).get("role") || "Host";
//   const role =
//     role_str === "Host"
//       ? ZegoUIKitPrebuilt.Host
//       : role_str === "Cohost"
//       ? ZegoUIKitPrebuilt.Cohost
//       : ZegoUIKitPrebuilt.Audience;

//   let sharedLinks = [];
//   if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
//     sharedLinks.push({
//       name: "Join as co-host",
//       url:
//         window.location.origin +
//         "/#/LiveVideo" +
//         window.location.pathname +
//         "?roomID=" +
//         roomID +
//         "&role=Cohost",
//     });
//   }
//   sharedLinks.push({
//     name: "Join as audience",
//     url:
//       window.location.origin +
//       "/#/LiveVideo" +
//       window.location.pathname +
//       "?roomID=" +
//       roomID +
//       "&role=Audience",
//   });
//   // generate Kit Token
//   const appID = 1011009319;
//   const response = getUserID();
//   // const response1 = getUser1ID();

//   const serverSecret = "0b7c5477f07346c1a906c99d3f171f2e";
//   const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//     appID,
//     serverSecret,
//     roomID,
//     randomID(5),
//     response
//     // response1
//   );

//   // start the call
//   let myMeeting = async (element: HTMLDivElement) => {
//     // Create instance object from Kit Token.
//     const zp = ZegoUIKitPrebuilt.create(kitToken);
//     // start the call
//     zp.joinRoom({
//       container: element,
//       scenario: {
//         mode: ZegoUIKitPrebuilt.LiveStreaming,
//         config: {
//           role,
//         },
//       },
//       sharedLinks,
//     });
//   };

//   return (
//     <div
//       className="myCallContainer"
//       ref={myMeeting}
//       style={{ width: "100vw", height: "100vh" }}
//     ></div>
//   );
// }
