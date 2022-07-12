import { useEffect } from "react";
import { useState } from "react";
import { getLocationInfo } from "../services/poke-api";
import { Spinner } from "react-bootstrap";


const EncounterLocations = ({ pokemon }) => {
  const locationURL = pokemon.location_area_encounters
  const [locations, setLocations] = useState([])
  const [smallList, setSmallList] = useState(true)
  const [firstFive, setFirstFive] = useState([])
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    getLocationInfo(locationURL)
      .then(newLocations => {
        setLocations(newLocations)
        setFirstFive(newLocations.slice(0, 5))
      })
      setLoading(false)
  }, [])



  return (
    <div className="locations-div">
      <article className="locations-list">
        <header>
          {loading ? <Spinner animation="grow" variant='danger'></Spinner> : null}
          <h3>
            {locations.length < 1 ?
              "Not Found in the Wild" :
              "Locations:"
            }
          </h3>
          {locations.length > 5 ?
            <button 
            onClick={()=>{setSmallList(!smallList)}}
            className="gen-btn">
              Show {locations.length - firstFive.length} More
            </button> : null
          }
        </header>
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

      </article>
    </div>
  );
}

export default EncounterLocations;