import { Card } from "react-bootstrap";

const PokemonCard = ({ pokemon }) => {

  return (

    <article className="pokemon-card">
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