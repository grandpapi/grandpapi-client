import { connect } from 'react-redux';
import DbForm from '../../components/create/DbForm';
import { createDb } from '../../actions/userDatabases/dbActions';

const mapDispatchToProps = dispatch => ({
  onSubmit(db) {
    dispatch(createDb(db));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(DbForm);
