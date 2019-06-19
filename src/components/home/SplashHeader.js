import React from 'react';
import { Link } from 'react-router-dom';
import { SplashHeaderContainer, NavLogo } from '../../styles';
import styles from '../../styles.css';
import logoPink from '../../../assets/logo-pink.png';

export default function SplashHeader() {
  return (
    <SplashHeaderContainer>
      <NavLogo src={logoPink} />
      <Link className={styles.styledNavLink} to="/login">Log In | Sign Up</Link>
    </SplashHeaderContainer>
  );
}
