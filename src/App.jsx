import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Avaliacao from './pages/Avaliacao';
import DetalhesDieta from './pages/DetalhesDieta';
import SaudeFisica from './pages/SaudeFisica'; // ✅ Importação da nova página

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avaliacao" element={<Avaliacao />} />
        <Route path="/detalhes" element={<DetalhesDieta />} />
        <Route path="/saudefisica" element={<SaudeFisica />} /> 
      </Routes>
    </Router>
  );
}

export default App;
