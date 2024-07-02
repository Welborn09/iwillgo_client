import React from 'react';
import { useLocation } from 'react-router-dom';
import NavSection from './NavSection';

const NavSectionWrapper = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/signup-form' && <NavSection />}
    </>
  );
};

export default NavSectionWrapper;
