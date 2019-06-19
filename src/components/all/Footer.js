import React from 'react';
import { FooterContainer, StyledNavUl, FooterTagline } from '../../styles';

export default function Footer() {
  return (
    <FooterContainer>
      <StyledNavUl>
        <li>About Us</li>
        <li>Careers</li>
        <li>Privacy Policy</li>
        <li>Public APIs</li>
      </StyledNavUl>
      <FooterTagline>
        <p>Mega Nap: For the love of apps</p>
      </FooterTagline>
    </FooterContainer>
  );
}
