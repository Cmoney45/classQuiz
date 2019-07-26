import React from "react";
import "./style.css";

function Jumbotron(props) {
    return <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4 text-center">{`D&D Class Quiz`}</h1>
            <p className="lead text-center">
                Click go to find out what Race, Class, Alignment and Stats you are!
            </p>
        </div>
    </div>;
}

export default Jumbotron;
