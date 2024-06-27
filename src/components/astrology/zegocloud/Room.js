// import * as React from "react";
// // import "./style.css";
// // import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
// // import { generateToken, getRandomName, randomID } from "./util";
// export function generateToken(userid, roomid, fullname) {
//   return fetch(
//     `http://65.2.148.70:8000/user/allchatwithuser/638dcc72ef0c127a0c5a0426`
//   ).then(res => res.json());
// }

// export function randomID(len) {
//   let result = "";
//   if (result) return result;
//   var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";

//   var maxPos = chars.length;
//   len = len || 5;
//   for (let i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   console.log(result);
//   return result;
// }

// export function getRandomName() {
//   const names = [
//     "Anjali",
//     "Pratima",
//     "Sadik",
//     "Rohit",
//     "Amit",
//     "Pranay",
//     "Anujesh",
//     "Ashish",
//   ];
//   return names[Math.round(Math.random() * names.length)];
// }

// // const { roomID } = useParams();
// // console.log(roomID);

// // function randomID(len) {
// //   let result = "";
// //   if (result) return result;
// //   var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
// //     maxPos = chars.length,
// //     i;
// //   len = len || 5;
// //   for (i = 0; i < len; i++) {
// //     result += chars.charAt(Math.floor(Math.random() * maxPos));
// //   }
// //   return result;
// // }

// // export function getUrlParams(
// //   url: string = window.location.href
// // ): URLSearchParams {
// //   let urlStr = url.split("?")[1];
// //   return new URLSearchParams(urlStr);
// // }
