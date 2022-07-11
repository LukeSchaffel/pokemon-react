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

function App() {



  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route
            path='/AllPokemon'
            element={<AllPokemon />}
          />
          <Route
            path='/SearchPage'
            element={<SearchPage />}

          />
        </Routes>

      </main>


    </>
  );
}

export default App;
