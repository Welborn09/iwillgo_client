/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute  from './components/PrivateRoute.jsx';
import NavSectionWrapper from './components/NavSectionWrapper.jsx';
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import SignUp from './Pages/Signup/Signup.jsx'
import Login from './Pages/Members/Login.jsx'
import FooterSectionWrapper from './components/FooterSectionWrapper.jsx';
import MemberHome from './Pages/Members/Pages/Home/Home.jsx';
import EventDetails from './Pages/Members/Pages/Events/EventDetails.jsx';
import ModalComponent from './Pages/Members/Modal/ModelComponent.jsx';
import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <>      
    <Router>      
      <NavSectionWrapper />
      <Routes>
        <Route path='/' Component={Home} />        
        <Route path='/about' Component={About} />                
        <Route path='/signup-form' Component={SignUp} />       
        <Route path='/login' Component={Login} />       
        
         {/* Member Pages 
        <PrivateRoute path='/Member/Home' Component={MemberHome}></PrivateRoute>*/}
        <Route path='/Member/Home' element={<MemberHome onShowModal={handleShowModal} />}></Route>        
        {/* <Route path='/Member/Events/EventDetails' Component={EventDetails}></Route> */}
      </Routes>
      <ModalComponent show={showModal} handleClose={handleCloseModal}>
          {modalContent}
        </ModalComponent>
      <FooterSectionWrapper />
    </Router>
    </>
  );
}

export default App
