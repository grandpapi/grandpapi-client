import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import logoPink from '../../../assets/logo-pink.png';
import { NavLogo, GlobalHeaderContainer, NavContainer } from '../../styles';

export default function GlobalHeader() {
  return (
    <GlobalHeaderContainer>
      <Link to="/"><NavLogo src={logoPink} /></Link>
      <NavContainer>
        <Nav/>
      </NavContainer>
      {/* TODO: change to ternary based on login status */}
      <Link to="/login">Log In | Sign Up</Link>
    </GlobalHeaderContainer>
  );
}
