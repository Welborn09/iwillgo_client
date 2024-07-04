/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import React from 'react';
import HeroSection from '../../components/HeroSection.jsx';
import Features from '../../components/Features.jsx';
import SignUpSection from '../../components/SignUpSection.jsx';
import Timeline from '../../components/Timeline.jsx';


function Home() {
    return (
        <>
        <HeroSection />
        <Features />
        <Timeline />
        <SignUpSection />
        </>
    );
  }
  
  export default Home;
  