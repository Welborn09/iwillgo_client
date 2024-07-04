/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavSectionWrapper from './components/NavSectionWrapper.jsx';
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import SignUp from './Pages/Signup/Signup.jsx'
import FooterSectionWrapper from './components/FooterSectionWrapper.jsx';
import './App.css'

function App() {

  return (
    <>      
    <Router>      
      <NavSectionWrapper />
      <Routes>
        <Route path='/' Component={Home} />        
        <Route path='/about' Component={About} />                
        <Route path='/signup-form' Component={SignUp} />        
      </Routes>
      <FooterSectionWrapper />
    </Router>
    </>
  );
}

export default App
