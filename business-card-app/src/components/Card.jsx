import React from "react";
import "./Card.css";

const Card = (props) => {
  const { title, description, interests, linkedin, twitter } = props.item;

  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{description}</p>
      <h3>Interests</h3>
      <ul>
        {interests?.map((i, key) => {
          return <li key={key}>{i}</li>;
        })}
      </ul>
      <div className="social-media-btns">
        <a href={linkedin} target="_blank">
          <button>LinkedIn</button>
        </a>
        <a href={twitter} target="_blank">
          <button>Twitter</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
