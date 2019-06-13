import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getNickname } from '../selectors/sessionSelectors';
import { connect } from 'react-redux';
import { logout } from '../services/auth';

class Dashboard extends PureComponent {
  static propTypes = {
    nickname: PropTypes.string.isRequired
  }

  // state = {}

  // handleLogout = () => {
  //   logout()
  // }

  render() {
    const { nickname } = this.props;
    return (
      <>
      <h1>Welcome to your Dashboard {nickname}</h1>
      <button onClick={logout}>Log Out</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  nickname: getNickname(state)
});

export default connect(
  mapStateToProps
)(Dashboard); 
