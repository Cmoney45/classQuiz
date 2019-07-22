import React from "react";


function Navbar (props) {
    return <div className="navbar fixed-top navbar-light bg-dark text-light">
      <h2 className="mr-auto">Memory game</h2>
      <h4 className="m-auto">Click an image to start!</h4>
      <h4 className="ml-auto">Score: {props.score} | Top Score: {props.highScore} </h4>
    </div>
}

export default Navbar;
