import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper mt-3">
    {props.children}
  </div>;
}

export default Wrapper;
