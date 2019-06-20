/* eslint-disable quotes */
import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContainer, StyledNavUl, FooterTagline } from '../../styles';

export default function Footer() {
  return (
    <FooterContainer>
      <StyledNavUl>
        <Link to={"/table3"}><li>About Us</li></Link>
        <Link to={"/careers"}><li>Careers</li></Link>
        <Link to={"/privacy"}><li>Privacy Policy</li></Link>
        <Link to={"/apis"}><li>Public APIs</li></Link>
      </StyledNavUl>
      <FooterTagline>
        <p>Mega Nap: For the love of apps</p>
      </FooterTagline>
    </FooterContainer>
  );
}
