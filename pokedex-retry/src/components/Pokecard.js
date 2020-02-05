import React from "react";
import "./Pokecard.css";

const Pokecard = props => {
  let imageId = props.id < 999 ? `00${props.id}`.slice(-3) : props.id;

  return (
    <div className="Pokecard">
      <h1 className="Pokecard-name">{props.name}</h1>
      <img
        className="Pokecard-image"
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`}
      />
      <p>Type : {props.type}</p>
      <p>Experience : {props.exp}</p>
    </div>
  );
};

export default Pokecard;
