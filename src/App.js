// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Explore from './pages/Explore';
import Materials from './pages/Materials';
import Profile from './pages/Profile';
import ProjectDetail from './pages/ProjectDetail';
import ProjectSuggestions from './pages/ProjectSuggestions';
import Login from './pages/Login';
import './App.css';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app">
        {!isAuthenticated ? (
          <Login setAuthenticated={setAuthenticated} />
        ) : (
          <>
            <Routes>
              <Route path="/explore" element={<Explore />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/suggestions" element={<ProjectSuggestions />} />
              <Route path="*" element={<Navigate to="/explore" replace />} />
            </Routes>
            <Navbar />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
