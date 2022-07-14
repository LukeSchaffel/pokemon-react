import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Spinner.css'
import { Spinner } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import AllPokemon from './pages/All-Pokemon/All-Pokemon';
import { getAllPokemon } from './components/services/poke-api';
import { getPokemonInfo } from './components/services/poke-api';
import SearchPage from './pages/SearchPage/SearchPage';
import PokemonDetails from './pages/PokemonDetails/PokemonDetail';
import MoveDetails from './pages/MoveDetails/MoveDetails';
import Pokeball from './components/Pokeball/Pokeball';

function App() {
  const [loading, setLoading] = useState(false)


    return (
      <>
        <NavBar classname='nav' />
        <main>
          <Routes>
            <Route
              path='/'
              element={<AllPokemon
                loading={loading}
                setLoading={setLoading}
              />}
            />
            <Route
              path='/search'
              element={<SearchPage />}
            />
            <Route path='/pokemon-details' element={<PokemonDetails loading={loading}
              setLoading={setLoading}
            />}>

            </Route>
            <Route path='/move-details' element={<MoveDetails />} />
          </Routes>

        </main>


      </>
    );
  }

export default App;
