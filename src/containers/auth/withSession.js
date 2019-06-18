import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { login } from '../../services/auth';
import { selectToken } from '../../selectors/sessionSelectors';
import { connect } from 'react-redux';
import Login from '../../pages/Login';

export const withSession = Component => {
  class WithSession extends PureComponent {
        static propTypes = {
          token: PropTypes.string.isRequired
        }

        componentDidMount() {
          if(!this.props.token) login();
        }

        render() {
          if(!this.props.token) return <Login />;
          return <Component />;
        }
  }

  const mapStateToProps = state => ({
    token: selectToken(state)
  });

  return connect(
    mapStateToProps
  )(WithSession);
};
