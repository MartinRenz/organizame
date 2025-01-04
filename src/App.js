// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import Tasks from './components/Tasks.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
  );
};

export default App;