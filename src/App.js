import React, { Component } from "react";

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
class App extends Component {
  state = {
    modalIsOpen: false,
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
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
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
