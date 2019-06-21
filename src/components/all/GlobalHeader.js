import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logoPink from '../../../assets/logo-pink.png';
import { NavLogo, GlobalHeaderContainer, HeroButton, BodyButton } from '../../styles';
import styles from '../../styles.css';
import { logout } from '../../services/auth';
import PropTypes from 'prop-types';
import { selectToken } from '../../selectors/sessionSelectors';


class GlobalHeader extends PureComponent {
  static propTypes = {
    token: PropTypes.string.isRequired
  }

  navTokenCheck = () => {
    if(!this.props.token) {
      return <Link className={styles.styledNavLink} to="/login">Log In | Sign Up</Link>;
    }
    return <><BodyButton header><Link to="/dashboard" className={styles.linkInButton}>My Dashboard</Link></BodyButton>
      <HeroButton onClick={logout}>Log Out</HeroButton></>;
  }
  render() {
    return (
      <GlobalHeaderContainer>
        <Link to="/"><NavLogo src={logoPink} /></Link>
        <section>
          {this.navTokenCheck()}
        </section>
      </GlobalHeaderContainer >
    );
  }
}

const mapStateToProps = state => ({
  token: selectToken(state)
});

export default connect(
  mapStateToProps
)(GlobalHeader);
