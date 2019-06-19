import React from 'react';
import { Link } from 'react-router-dom';
import { SplashHeaderContainer, NavLogo } from '../../styles';
import styles from '../../styles.css';

export default function SplashHeader() {
  return (
    <SplashHeaderContainer>
      <NavLogo src='assets/logo-pink.png' />
      <Link className={styles.styledNavLink} to="/login">Log In | Sign Up</Link>
    </SplashHeaderContainer>
  );
}
