/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import React from 'react';
import { useLocation } from 'react-router-dom';
import NavSection from './NavSection';
import MemberNavSection from '../Pages/Members/Components/MemberNav';

const NavSectionWrapper = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname == '/' && location.pathname !== '/signup-form' && location.pathname !== '/login' && location.pathname !== '/Member/Home' && <NavSection />}
      {location.pathname == '/Member/Home' && <MemberNavSection />}
    </>
  );
};

export default NavSectionWrapper;
