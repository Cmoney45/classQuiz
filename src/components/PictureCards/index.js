import React from "react";
import "./style.css";

function PictureCard(props) {
  return (
    <div className="card bg-dark" onClick={() => props.removeFriend(props.id)}>
      <img className="card-img" alt={props.name} src={props.image} />
        <div className="protitle">
          {props.name}
        </div>
    </div>
  );
}

export default PictureCard;
