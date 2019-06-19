import React from 'react';
import { FooterContainer, StyledNavUl } from '../../styles';

export default function Footer() {
  return (
    <FooterContainer>
      <StyledNavUl>
        <li>About Us</li>
        <li>Careers</li>
        <li>Privacy Policy</li>
        <li>Public APIs</li>
      </StyledNavUl>
    </FooterContainer>
  );
}
