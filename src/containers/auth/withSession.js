import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { login } from '../../services/auth';
import { selectToken } from '../../selectors/sessionSelectors';
import { connect } from 'react-redux';

export const withSession = Component => {
  class WithSession extends PureComponent {
        static propTypes = {
          token: PropTypes.string.isRequired
        }

        componentDidMount() {
          if(!this.props.token) login();
        }

        render() {
          if(!this.props.token) return <h1>Sorry you need to log in mate</h1>;
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
