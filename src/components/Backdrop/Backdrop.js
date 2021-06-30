import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
  const cssClass = ["Backdrop", props.showBackdrop ? "" : "BackdropHide"];
  return <div className={cssClass.join("")}></div>;
};

export default backdrop;
