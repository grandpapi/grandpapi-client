import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkSession } from '../../actions/sessionActions';
import { auth0 } from '../../services/auth';
import { selectToken } from '../../selectors/sessionSelectors';
import { Redirect } from 'react-router-dom';

export const withoutSession = Component => {

  class WithoutSession extends PureComponent {
    static propTypes = {
      handleCheckSession: PropTypes.func.isRequired,
      token: PropTypes.string
    }

    componentDidMount() {
      this.props.handleCheckSession();
    }

    render() {
      if(this.props.token) return <Redirect to='/dashboard' />;
      return <Component />;
    }
  }

  const mapStateToProps = state => ({
    token: selectToken(state)
  });

  const mapDispatchToProps = dispatch => ({
    handleCheckSession() {
      auth0.checkSession({}, (error, results) => {
        if(error) return;
        dispatch(checkSession({
          userId: results.idTokenPayload.sub,
          token: results.idToken,
          nickname: results.idTokenPayload.nickname
        }));
      });
    }
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithoutSession);
};
