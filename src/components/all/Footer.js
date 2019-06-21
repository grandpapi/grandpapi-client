import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContainer, StyledNavUl, FooterTagline } from '../../styles';
import styles from '../../styles.css';

export default function Footer() {
  return (
    <FooterContainer>
      <StyledNavUl>
        <Link to="/about"><li>About Mega Nap</li></Link>
        <Link to="/docs"><li>Documentation</li></Link>
        <Link to="/apis"><li>Public APIs</li></Link>
      </StyledNavUl>
      <StyledNavUl>
        <Link to="/table3"><li>About Us</li></Link>
        <Link to="/careers"><li>Careers</li></Link>
        <Link to="/privacy"><li>Privacy Policy</li></Link>
      </StyledNavUl>
      <FooterTagline>
        <p>Mega Nap, <span className={styles.footerTaglinePink}>For the love of apps.</span></p>
      </FooterTagline>
    </FooterContainer>
  );
}
