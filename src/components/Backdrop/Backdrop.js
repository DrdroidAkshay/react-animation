import React from "react";

import "./Backdrop.css";

// const backdrop = (props) => {
//   const cssClass = ["Backdrop", props.showBackdrop ? "" : "BackdropHide"];
//   return <div className={cssClass.join("")}></div>;
// };
const backdrop = (props) => {
  const cssClasses = [
    "Backdrop",
    props.show ? "BackdropOpen" : "BackdropClosed",
  ];

  return <div className={cssClasses.join(" ")}></div>;
};

export default backdrop;
