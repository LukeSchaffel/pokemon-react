import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Spinner.css'

import NavBar from './components/NavBar/NavBar';
import AllPokemon from './pages/All-Pokemon/All-Pokemon';
import { getAllPokemon } from './components/services/poke-api';
import { getPokemonInfo } from './components/services/poke-api';
import SearchPage from './pages/SearchPage/SearchPage';
import PokemonDetails from './pages/PokemonDetails/PokemonDetail';
import MoveDetails from './pages/MoveDetails/MoveDetails';

function App() {



  return (
    <>
      <NavBar classname='nav'/>
      <main>
        <Routes>
          <Route
            path='/'
            element={<AllPokemon />}
          />
          <Route
            path='/search'
            element={<SearchPage />}
          />
         <Route path='/pokemon-details' element={<PokemonDetails/>}></Route>
         <Route path='/move-details' element={<MoveDetails/>} /> 
        </Routes>

      </main>


    </>
  );
}

export default App;
