import Ability from "../Ability/Ability";

const Abilities = ({pokemon, loading, setLoading}) => {
  const { abilities } = pokemon
  console.log(abilities);
  return ( 
  
  <div className="abilities-div">
    <article className="ability-list">
      {abilities.map((ability, idx) => {
        return <Ability key={idx} ability={ability}/>
      })

      }

    </article>
  
  </div>

 );
}
 
export default Abilities;