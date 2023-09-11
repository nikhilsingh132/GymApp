import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import  ExerciseDetail from './pages/ExerciseDetail';
import Bmicalculator from './pages/Bmicalculator';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/exercise/:id" element={<ExerciseDetail />} />
          <Route exact path="/Bmicalculator" element={<Bmicalculator />} />
        </Routes>
      </Box>
      <Footer/>
    </>
  );
}

export default App;
