import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logoPink from '../../../assets/logo-pink.png';
import { NavLogo, GlobalHeaderContainer, HeroButton, BodyButton } from '../../styles';
import styles from '../../styles.css';
import { logout } from '../../services/auth';
import { navigateDashboard } from '../../actions/sessionActions';

function GlobalHeader({ dashboardClick }) {
  return (
    <GlobalHeaderContainer>
      <Link to="/"><NavLogo src={logoPink} /></Link>
      <section>
        <BodyButton header><Link to="/dashboard" className={styles.linkInButton} onClick={() => dashboardClick()}>My Dashboard</Link></BodyButton>
        <HeroButton onClick={logout}>Log Out</HeroButton>
      </section>
    </GlobalHeaderContainer>
  );
}

GlobalHeader.propTypes = {
  dashboardClick: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => ({
  dashboardClick() {
    dispatch(navigateDashboard());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(GlobalHeader);
