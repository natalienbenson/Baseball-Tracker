import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home.jsx';
import Tracker from './pages/Tracker.jsx';

function App() {
  return (
    <div className="app">
    

      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracker" element={<Tracker />} />
        </Routes>
      </main>

   
    </div>
  );
}

export default App;