import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { selectToken } from '../../selectors/sessionSelectors';
import { connect } from 'react-redux';

export const withSession = Component => {
  class WithSession extends PureComponent {
    static propTypes = {
      token: PropTypes.string.isRequired
    }

    render() {
      if(!this.props.token) return <Redirect to="/login" />;
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
