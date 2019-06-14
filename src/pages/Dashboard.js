import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { selectNickname } from '../selectors/sessionSelectors';
import { connect } from 'react-redux';
import { logout } from '../services/auth';
import { postNickname } from '../actions/userDatabases/dbActions';
import { Link } from 'react-router-dom';

class Dashboard extends PureComponent {
  static propTypes = {
    nickname: PropTypes.string.isRequired,
  }

  render() {
    const { nickname } = this.props;
    return (
      <>
      <h1>Welcome to your dashboard, {nickname}!</h1>
      <button onClick={logout}>Log Out</button>
      <Link to="/create"><button>Create New API</button></Link>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  nickname: selectNickname(state)
});

const mapDispatchToProps = dispatch => ({
  post(nickname) {
    dispatch(postNickname(nickname));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard); 
