import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, StyledNavUl } from '../../styles';
import styles from '../../styles.css';

export default function Nav() {
  return (
    <NavContainer>
      <StyledNavUl>
        <li><Link className={styles.styledBrownNavLink} to="/about">About Mega Nap</Link></li>
        <li><Link className={styles.styledBrownNavLink} to="/docs">Documentation</Link></li>
        <li><Link className={styles.styledBrownNavLink} to="/apis">Example Apps</Link></li>
      </StyledNavUl>
    </NavContainer>
  );
}
