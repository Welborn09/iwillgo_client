/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from React <Router></Router>

import Logo from './../assets/images/logo_v2.jpg'

const SignUpContainer = styled.section`
  padding: 50px 20px;
  text-align: center;
  background: #203936;
  color: #fff;
`;

const SignUpTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const SignUpButton = styled.button`
  background: #fff;
  color: #007bff;
  padding: 2px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #B8E648;
  }
`;

const SignUpSection = () => {
  return (
    <SignUpContainer>
      <SignUpTitle>Who Will Go?</SignUpTitle>
      <Link to="/signup-form">
        <SignUpButton>
          <img src={Logo} width="120px" />
        </SignUpButton>
      </Link>
      
    </SignUpContainer>
  );
};

export default SignUpSection;
