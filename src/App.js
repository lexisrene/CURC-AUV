import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Join from './pages/Join';
import Team from './pages/Team';
import Vehicle from './pages/Vehicle';
import Sponsor from './pages/Sponsor';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/join" element={<Join/ >} />
            <Route path="/team" element={<Team/ >} />
            <Route path="/vehicle" element={<Vehicle/ >} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
