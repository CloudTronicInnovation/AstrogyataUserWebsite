// import React from "react";
// import { useTranslation } from "react-i18next";
// import { NavLink } from "react-router-dom";
// // import { LANGUAGES } from "../constants/index";

// // const isActive = ({ isActive }) => `link ${isActive ? "active" : ""}`;

// // export const Menu = () => {
// //   const { i18n } = useTranslation();

// //   const onChangeLang = e => {
// //     const lang_code = e.target.value;
// //     i18n.changeLanguage(lang_code);
// //   };

// //   return (
// //     <>
// //       <nav>
// //         <div>
// //           <NavLink className={isActive} to="/"> 
// //             {"home"}
// //           </NavLink>
// //           <NavLink className={isActive} to="/about">
// //             {"about"}
// //           </NavLink>
// //         </div>

// //         <select defaultValue={i18n.language} onChange={onChangeLang}>
// //           {LANGUAGES.map(({ code, label }) => (
// //             <option key={code} value={code}>
// //               {label}
// //             </option>
// //           ))}
// //         </select>
// //       </nav>
// //     </>
// //   );
// // };
// // import React from "react";
// // import { NavLink } from "react-router-dom";

// const LANGUAGES = [
//   { code: "en", label: "English" },
//   { code: "fr", label: "French" },
//   //   { label: "Spanish", code: "es" },
//   //   { label: "English", code: "en" },
//   //   { label: "Italian", code: "it" },
//   // Add more language options as needed
// ];

// function Menu({ i18n, isActive, onChangeLang }) {
//   return (
//     <nav>
//       <div>
//         <NavLink className={isActive} to="/">
//           {"home"}
//         </NavLink>
//         <NavLink className={isActive} to="/about">
//           {"about"}
//         </NavLink>
//       </div>

//       <select defaultValue={i18n.language} onChange={onChangeLang}>
//         {LANGUAGES.map(({ code, label }) => (
//           <option key={code} value={code}>
//             {label}
//           </option>
//         ))}
//       </select>
//     </nav>
//   );
// }

// export default Menu;
