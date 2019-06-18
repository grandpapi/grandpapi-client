import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSession } from '../../actions/sessionActions';
import Login from '../../pages/Login';

class Callback extends PureComponent {
  static propTypes = {
    handleSessionAction: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.handleSessionAction();
  }

  render() {
    return <Login />;
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  handleSessionAction() {
    const action = setSession();
    dispatch(action);
    action.payload.then(() => {
      props.history.push('/dashboard');
    });
  }
});


export default connect(
  null,
  mapDispatchToProps
)(Callback);
