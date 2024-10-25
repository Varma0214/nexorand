// src/components/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Home from './Home/Home'; // Make sure this is the correct path
import Leaderboard from './Leaderboard/Leaderboard'; // Make sure this is the correct path
import Login from './Auth/Login'; // Make sure this is the correct path
import Registration from './Auth/Registration'; // Make sure this is the correct path
import Navbar from './Navbar/Navbar'; // Make sure this is the correct path
const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
