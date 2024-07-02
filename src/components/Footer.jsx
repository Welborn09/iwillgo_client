import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #203936;
  padding: 20px;
  text-align: center;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 IWillGo. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
