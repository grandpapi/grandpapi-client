import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { selectNickname } from '../selectors/sessionSelectors';
import { connect } from 'react-redux';
import { logout } from '../services/auth';
import { postNickname } from '../actions/userDatabases/dbActions';

class Dashboard extends PureComponent {
  static propTypes = {
    nickname: PropTypes.string.isRequired,
    post: PropTypes.func.isRequired
  }

  render() {
    const { nickname, post } = this.props;
    return (
      <>
      <h1>Welcome to your dashboard, {nickname}!</h1>
      <button onClick={logout}>Log Out</button>
      <button onClick={() => post(nickname)}>Post Nickname</button>
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
