import { Card } from "react-bootstrap";

const PokemonCard = ({ pokemon }) => {
  const type = pokemon.types[0].type.name
  const colors = {
    bug:'rgb(136,151,14)',
    dark:'rgb(54,45,32, .75)',
    dragon:'rgb(104,87,195)',
    electric:'rgb(251,183,24)',
    fairy:'rgb(241,173,243)',
    fighting:'rgb(126,49,29, .75)',
    fire: 'rgb(239,101,63)',
    flying: 'rgb(136,152,227)',
    ghost: 'rgb(96,97,177, .75)',
    grass: 'rgb(136,199,81)',
    ground: 'rgb(212,181,91)',
    ice: 'rgb(140,218,242)',
    normal: 'rgb(212,210,205)',
    poison: 'rgb(163,103,166)',
    pyscic: 'rgb(235,71,128)',
    rock: 'rgb(183,158,84)',
    steel: 'rgb(182,183,194)',
    water: 'rgb(67,158,245, .75)'
  }

  return (

    <article className="pokemon-card" style={{backgroundColor:colors[type]}}>
      <div>
        <header className="card-header">
          <h5>{pokemon.name}</h5> <h5>{pokemon.id}</h5>
        </header>
        <img className="card-image" src={pokemon.sprites.front_default} alt={pokemon.sprites.front_default}></img>
        <div className="card-text">
          <div className="type-div">
            <h5>Type: </h5>
            <ul>
              <li className="type-list">{pokemon.types[0].type.name}</li>
              {pokemon.types.length > 1 ?
                <li className="type-list">: {pokemon.types[1].type.name}</li> : null
              }
            </ul>
          </div>
          {pokemon.moves[0].move.name}
        </div>
      </div>
    </article>


  );



}

export default PokemonCard;