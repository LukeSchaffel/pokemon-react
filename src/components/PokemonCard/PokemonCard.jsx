import { Card } from "react-bootstrap";

const PokemonCard = ({pokemon}) => {


  return (
  <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="bottom" src={pokemon.sprites.front_default}></Card.Img>
      <Card.Body>
        <Card.Title>
        {pokemon.name}
        </Card.Title>
      </Card.Body>
    </Card>
 
  </>
  );
}

export default PokemonCard;