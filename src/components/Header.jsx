import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #f8f9fa;
  padding: 20px;
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: #343a40;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>IWillGo</Logo>
    </HeaderContainer>
  );
};

export default Header;
