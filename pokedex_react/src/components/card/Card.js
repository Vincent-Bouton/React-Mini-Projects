import React from "react";
import pokemon from "./pokemon";

const Card = () => {
  const items = [];
  const card = () => {
    pokemon.forEach(element => {
      items.push(
        <div className="card">
          <h2 className="card-title">{element.name}</h2>

          <p>Type : {element.type}</p>
          <p>Exp : {element.base_experience} </p>
        </div>
      );
    });
  };
  card();
  return items;
};

export default Card;
