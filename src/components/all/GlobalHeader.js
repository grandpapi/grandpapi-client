import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import pinkLogo from '../../../assets/logo-pink.png';
import { HeaderContainer, NavLogo, NavContainer } from '../../styles';

export default function GlobalHeader() {
  return (
    <HeaderContainer>
      <Link to="/"><NavLogo src={pinkLogo} /></Link>
      <NavContainer>
        <Nav/>
      </NavContainer>
      <Link to="/login">Log In | Sign Up</Link>
    </HeaderContainer>
  );
}
