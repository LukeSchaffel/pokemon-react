import Ability from "../Ability/Ability";

const Abilities = ({ pokemon, loading, setLoading }) => {
  const { abilities } = pokemon

  return (

    <div className="abilities-div">
      <article className="abilities-list">
        <header>
          <h1>Abilities: </h1>
        </header>
        <ul>
          {abilities.map((ability, idx) => {
            return <li key={idx}>
              <Ability ability={ability} />
            </li>
          })}
        </ul>
      </article>
    </div>
  );
}

export default Abilities;