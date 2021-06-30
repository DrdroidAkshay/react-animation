import React, { Component } from "react";
import { Transition } from "react-transition-group";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

// class App extends Component {
//   state = {
//     modalIsVisible: false,
//     backdropIsVisible: false,
//   };

//   showModalHandler = () => {
//     this.setState({ modalIsVisible: true, backdropIsVisible: true });
//   };
//   closeModalHandler = () => {
//     this.setState({ modalIsVisible: false, backdropIsVisible: false });
//   };
//   render() {
//     return (
//       <div className="App">
//         <h1>React Animations</h1>
//         <Modal
//           showModal={this.state.modalIsVisible}
//           closed={this.closeModalHandler}
//         />
//         <Backdrop showBackdrop={this.state.backdropIsVisible} />
//         <button className="Button" onClick={this.showModalHandler}>
//           Open Modal
//         </button>
//         <h3>Animating Lists</h3>
//         <List />
//       </div>
//     );
//   }
// }
const animationTiming = { enter: 400, exit: 1000 };
class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br></br>
        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
          onEnter={() => {
            console.log("enter");
          }}
          onEntering={() => {
            console.log("entering");
          }}
          onEntered={() => {
            console.log("entered");
          }}
          onExiting={() => {
            console.log("exiting");
          }}
          onExit={() => {
            console.log("exit");
          }}
          onExited={() => {
            console.log("exited");
          }}
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                padding: 30,
                opacity: state === "exiting" ? 0 : 1,
                transition: "all 1s ease-out",
              }}
            ></div>
          )}
        </Transition>
        <Transition
          in={this.state.modalIsOpen}
          timeout={animationTiming}
          mountOnEnter
          unmountOnExit
        >
          {(state) => <Modal show={state} closed={this.closeModal} />}
        </Transition>

        <Backdrop show={this.state.modalIsOpen} />
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
