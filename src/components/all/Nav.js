import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer } from '../../styles';
import styles from '../../styles.css';

export default function Nav() {
  return (
    <NavContainer>
      <ul>
        <li><Link className={styles.styledBrownNavLink} to="/about">About Mega Nap</Link></li>
        <li><Link className={styles.styledBrownNavLink} to="/docs">Documentation</Link></li>
        <li><Link className={styles.styledBrownNavLink} to="/apis">Example Apps</Link></li>
      </ul>
    </NavContainer>
  );
}
