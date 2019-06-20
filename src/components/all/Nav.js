import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, StyledNavUl } from '../../styles';
import styles from '../../styles.css';
import PropTypes from 'prop-types';

function Nav({ dashLink }) {
  return (
    <NavContainer>
      <StyledNavUl>
        <li><Link className={styles.styledBrownNavLink} to="/about">About Mega Nap</Link></li>
        <li><Link className={styles.styledBrownNavLink} to="/docs">Documentation</Link></li>
        <li><Link className={styles.styledBrownNavLink} to="/apis">Example Apps</Link></li>
        {dashLink}
      </StyledNavUl>
    </NavContainer>
  );
}

Nav.PropTypes = {
  dashLink: PropTypes.element
}

export default Nav;
