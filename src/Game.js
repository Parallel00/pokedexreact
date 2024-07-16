import React from "react";
import Pokedex from "./Pokedex";

function Game(props) {
  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffledPokemon = shuffleArray(props.pokemon);
  const half = Math.ceil(shuffledPokemon.length / 2);
  const team1 = shuffledPokemon.slice(0, half);
  const team2 = shuffledPokemon.slice(half);

  const exp1 = team1.reduce((totalExp, pokemon) => totalExp + pokemon.base_experience, 0);
  const exp2 = team2.reduce((totalExp, pokemon) => totalExp + pokemon.base_experience, 0);

  return (
    <div>
      <Pokedex pokemon={team1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={team2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
}

Game.defaultProps = {
  pokemon: [
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]
};

export default Game;
