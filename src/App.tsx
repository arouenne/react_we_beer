import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BeerListComponent from './component/BeerListComponent';
import AboutComponent from './component/AboutComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<BeerListComponent />} />
          <Route path="/about" element={<AboutComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
