/*
    CREATED AND WRITTEN BY STEVE WELBORN
*/
import React from 'react';

import Logo from './../assets/images/logo_v2.jpg'
import { NavMainSection, NavBar, Container, ContainerLogo, NavToggle, ButtonSpan, NavCollapse,
         NavUl, NavListItem, NavListLink
 } from './../styles/NavSection.styles';



const NavSection = () => {
    return (
      <NavMainSection>
        <NavBar>
          <Container>
            <ContainerLogo href="/">
            <img src={Logo} width="250px"/>
            </ContainerLogo>
            <NavToggle data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                <ButtonSpan />
            </NavToggle>
            <NavCollapse id="navbarSupportedContent">
                <NavUl>
                  <NavListItem>
                    <NavListLink href="/">Home</NavListLink>
                  </NavListItem>
                  <NavListItem>
                    <NavListLink href="/services">Services</NavListLink>
                  </NavListItem>
                  <NavListItem>
                    <NavListLink href="/about">About</NavListLink>
                  </NavListItem>
                </NavUl>            
            </NavCollapse>
          </Container>
        </NavBar>
      </NavMainSection>      
    );
  };
  
  export default NavSection;