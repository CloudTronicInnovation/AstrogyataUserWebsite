// import React, { useEffect, useRef, useState, useParams } from "react";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
// // import { generateToken, getRandomName, randomID } from "./util";

// const Home = () => {
//   // const { roomID } = useParams();
//   // console.log(roomID);

//   const myMeeting = useRef("");
//   const [token, setToken] = useState("");
//   useEffect(() => {
//     getData();
//   }, []);
//   const getData = async (element) => {
//     const appID = 117315587;
//     const serverSecret = "7d73c3ebbc300b3863c13e2711a69195";
//     const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//       appID,
//       serverSecret,
//       // roomID,
//       Date.now().toString(),
//       "astroDev"
//     );
//     const zp = ZegoUIKitPrebuilt.create(kitToken);
//     // const response = await generateToken(randomID(5), "3423", getRandomName());
//     // console.log(response);
//     zp.joinRoom({
//       container: element,
//       // sharedLinks: [
//       //   {
//       //     name: "Personal link",
//       //     url:
//       //       window.location.origin +
//       //       window.location.pathname +
//       //       "?roomID=" +
//       //       roomID,
//       //   },
//       // ],
//       scenario: {
//         mode: ZegoUIKitPrebuilt.GroupRoom, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
//       },
//     });
//   };

//   // console.log(myMeeting.current);
//   useEffect(() => {
//     if (myMeeting.current) {
//       const inst = ZegoUIKitPrebuilt.create(myMeeting);
//       inst.joinRoom({
//         container: myMeeting.current,
//       });
//     }
//   }, [myMeeting.current]);

//   // start the call

//   return (
//     <div>
//       <div ref={myMeeting}></div>
//     </div>
//   );
// };
// export default Home;
