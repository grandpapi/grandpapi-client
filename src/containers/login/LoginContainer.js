import { connect } from 'react-redux';
import LoginForm from '../../components/login/LoginForm';

const mapDispatchToProps = dispatch => ({
  onSignupSubmit(signupInfo) {
    console.log(signupInfo);
  },
  onLoginSubmit(loginInfo) {
    console.log(loginInfo);
  }
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
