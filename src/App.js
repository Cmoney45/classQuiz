import React, { Component } from "react";
import Board from "./components/Board";
import Navbar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/GameWrapper";
import Store from "./store";
import Results from "./components/Results"
import "./App.css";

class App extends Component {

  render() {
    return (
      <Store.Container>
        <Navbar />
        <Jumbotron />
        <Wrapper>
          <Board />
          <Results/>

        </Wrapper>
      </Store.Container>
    );
  }
};

export default App;
