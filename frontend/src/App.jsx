import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx'
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/home.jsx';
import SearchReceipe from './pages/SearchReceipe.jsx';
import Recipe from './pages/Reciepe.jsx';
import Profile from './pages/Profile.jsx';
import AddReciepe from './pages/AddReciepe.jsx';

function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/search" element={<SearchReceipe/>}/>
        <Route path="/reciepe" element={<Recipe/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/addReciepe" element={<AddReciepe/>}/>





      </Routes>
    </Router>
    {/* <LandingPage/> */}

    </>
  )
}

export default App
