import React from 'react';
import Nav from '../all/Nav';
import { Link } from 'react-router-dom';
import logoPink from '../../../assets/logo-pink.png';
import { NavLogo, GlobalHeaderContainer, NavContainer } from '../../styles';
import styles from '../../styles.css';
// import { logout } from '../../services/auth';

export default function LoginHeader() {
  const dashLink = <li><Link className={styles.styledBrownNavLink} to="/dashboard">My Dashboard</Link></li>;

  return (
    <GlobalHeaderContainer>
      <Link to="/"><NavLogo src={logoPink} /></Link>
      <NavContainer>
        <Nav dashLink={dashLink} />
      </NavContainer>
      {/* TODO: change to ternary based on login status */}
      {/* <HeroButton onClick={logout}>Log Out</HeroButton> */}
    </GlobalHeaderContainer>
  );
}
