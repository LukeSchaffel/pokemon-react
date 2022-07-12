import { useEffect } from "react";
import { useState } from "react";
import { getLocationInfo } from "../services/poke-api";


const EncounterLocations = ({ pokemon }) => {
  const locationURL = pokemon.location_area_encounters
  const [locations, setLocations] = useState([])
  const [smallList, setSmallList] = useState(true)
  const [firstFive, setFirstFive] = useState([])



  useEffect(() => {
    getLocationInfo(locationURL)
      .then(newLocations => {
        setLocations(newLocations)
        setFirstFive(newLocations.slice(0, 5))
      })

  }, [])





  return (
    <article className="locations-div">
      <header>
        <h4>
          {locations.length < 1 ?
            "Not Found in the Wild" :
            "Locations:"
          }
        </h4>
        {locations.length > 5 ?
          <button className="gen-btn">
            Show {locations.length - firstFive.length} More
          </button> : null 
          }
        <div>
          
          {smallList ?
            <ul>
              {firstFive.map((location, i) => {
                const area = location.location_area.name
                return <li key={i}>{area}</li>
              })}
            </ul> :
            <ul>
              {locations.map((location, i) => {
                const area = location.location_area.name
                return <li key={i}>{area}</li>
              })}
            </ul>

          }
        </div>
      </header>

    </article>
  );
}

export default EncounterLocations;