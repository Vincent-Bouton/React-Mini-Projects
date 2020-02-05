import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = props => {
  const pokecard = props.pokemon.map(p => (
    <Pokecard
      key={p.id}
      name={p.name}
      id={p.id}
      type={p.type}
      exp={p.base_experience}
    />
  ));
  let isWinner = props.isWinner ? (
    <h2 className="Pokedex-winner">Winner</h2>
  ) : (
    <h2 className="Pokedex-loser">Loser</h2>
  );
  return (
    <div className="Pokedex">
      <div className="Pokedex-game">
        {isWinner}
        <h4>Total experience : {props.exp}</h4>
      </div>
      <div className="Pokedex-cards">{pokecard}</div>
    </div>
  );
};

export default Pokedex;
