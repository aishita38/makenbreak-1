import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Spreadsheet from './Spreadsheet';
import { AuthProvider } from './AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/app" element={<Spreadsheet />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
