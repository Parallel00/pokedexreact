import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex(props) {
  let winDet = null;
  if (props.isWinner) {
    winDet = <p className="winDet">Hand wins!</p>;
  } else {
	  winDet = <p className="winDet">Hand loses!</p>;
  }

  return (
    <div className="Pokedex">
      <h2 className="nm">Pokedex</h2>
      <div className="cards">
        {props.pokemon.map(pokdx => (
          <Pokecard
            id={pokdx.id}
            name={pokdx.name}
            type={pokdx.type}
            exp={pokdx.base_experience}
          />
        ))}
      </div>
      <h4>Experience: {props.exp}</h4>
      {winDet}
    </div>
  );
}

export default Pokedex;
