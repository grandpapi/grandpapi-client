import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import logoPink from '../../../assets/logo-pink.png';
import { NavLogo, GlobalHeaderContainer, NavContainer, HeroButton } from '../../styles';
import styles from '../../styles.css';
import { logout } from '../../services/auth';

export default function GlobalHeader() {
  const dashLink = <li><Link className={styles.styledBrownNavLink} to="/dashboard">My Dashboard</Link></li>;

  return (
    <GlobalHeaderContainer>
      <Link to="/"><NavLogo src={logoPink} /></Link>
      <NavContainer>
        <Nav dashLink={dashLink} />
      </NavContainer>
      <HeroButton onClick={logout}>Log Out</HeroButton>
    </GlobalHeaderContainer>
  );
}
