import React from 'react';
import Nav from '../all/Nav';
import { Link } from 'react-router-dom';
import logoPink from '../../../assets/logo-pink.png';
import { NavLogo, GlobalHeaderContainer, NavContainer } from '../../styles';

export default function LoginHeader() {

  return (
    <GlobalHeaderContainer>
      <Link to="/"><NavLogo src={logoPink} /></Link>
      <NavContainer>
        <Nav />
      </NavContainer>
    </GlobalHeaderContainer>
  );
}
