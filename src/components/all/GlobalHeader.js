import React from 'react';
import { Link } from 'react-router-dom';
import logoPink from '../../../assets/logo-pink.png';
import { NavLogo, GlobalHeaderContainer, HeroButton, BodyButton } from '../../styles';
import styles from '../../styles.css';
import { logout } from '../../services/auth';

export default function GlobalHeader() {
  return (
    <GlobalHeaderContainer>
      <Link to="/"><NavLogo src={logoPink} /></Link>
      <section>
        <BodyButton><Link to="/dashboard" className={styles.linkInButton}>My Dashboard</Link></BodyButton>
        <HeroButton onClick={logout}>Log Out</HeroButton>
      </section>
    </GlobalHeaderContainer>
  );
}
