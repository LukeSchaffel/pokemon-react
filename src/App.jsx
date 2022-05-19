import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AllPokemon from './pages/All-Pokemon/All-Pokemon';

function App() {
  return (
   <>
    <NavBar />
    <Routes>
      <Route
        path='/AllPokemon'
        element={<AllPokemon/>}
      />

    </Routes>


 
   
   </>
  );
}

export default App;
