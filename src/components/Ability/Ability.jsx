const Ability = ({ ability }) => {
  return ( 
 <div className="ability">
  <div className="grid-name">
    <h3>
      {ability.ability.name}
    </h3>
  </div>
 </div>
  );
}
 
export default Ability;