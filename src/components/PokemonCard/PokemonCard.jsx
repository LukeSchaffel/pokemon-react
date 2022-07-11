import { Card } from "react-bootstrap";

const PokemonCard = ({ pokemon }) => {

  return (

    <Card className="pokemon-card">

      <Card.Body>
        <Card.Title className="card-header">
          {pokemon.name}{pokemon.id}
        </Card.Title>

        <Card.Img className="card-image" src={pokemon.sprites.front_default}></Card.Img>
        <Card.Text className="card-text">
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
        </Card.Text>
      </Card.Body>
    </Card>


  );



}

export default PokemonCard;