import React from "react";

const Card = (props) => {
  return (
    <div className="upgrade">
      <h3>{props.head}</h3>
      <p>{props.body}</p>
      <button onClick={props.event}>{props.button}</button>
    </div>
  );
};

export default Card;
