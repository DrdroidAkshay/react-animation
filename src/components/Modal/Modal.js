import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import "./Modal.css";

// const modal = (props) => {
//   const cssClass = ["Modal", props.showModal ? "" : "ModalHide"];
//   return (
//     <div className={cssClass.join("")}>
//       <h1>A Modal</h1>
//       <button className="Button" onClick={props.closed}>
//         Dismiss
//       </button>
//     </div>
//   );
// };
const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
      }}
    >
      {(state) => {
        return (
          <div className={"Modal"}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </CSSTransition>
  );
};

export default modal;
