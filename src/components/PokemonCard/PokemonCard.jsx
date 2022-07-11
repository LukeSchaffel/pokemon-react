import { Card } from "react-bootstrap";

const PokemonCard = ({ pokemon }) => {

  if (!(pokemon.name)) {
    return <h1>Search by Name</h1>
  }

  return (

    <Card className="pokemon-card">

      <Card.Body>
        <Card.Title className="card-header">
          {pokemon.name}
        </Card.Title>

        <Card.Img className="card-image" src={pokemon.sprites.front_default}></Card.Img>
        <Card.Text className="card-text">
          <div className="type-div">
            <h5>Type: </h5>
            <ul>
              {pokemon.types.map((type) => {
                return <li className="type-list">{type.type.name}</li>
              })}
            </ul>
          </div>
          {pokemon.moves[0].move.name}
        </Card.Text>
      </Card.Body>
    </Card>


  );



}

export default PokemonCard;