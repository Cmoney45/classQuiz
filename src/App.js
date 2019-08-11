import React, { Component } from "react";
import Board from "./components/Board";
import Navbar from "./components/NavBar";
import Wrapper from "./components/GameWrapper";
import Store from "./store";
import "./App.css";

class App extends Component {

  render() {
    return (
      <Store.Container>
        <Navbar />
        <Wrapper>
          <Board />
        </Wrapper>
      </Store.Container>
    );
  }
};

export default App;
