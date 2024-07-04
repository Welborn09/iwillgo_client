/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

const FooterSectionWrapper = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/signup-form' && <Footer />}
    </>
  );
};

export default FooterSectionWrapper;
