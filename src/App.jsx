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

function App() {



  return (
    <>
      <NavBar />
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
        </Routes>

      </main>


    </>
  );
}

export default App;
