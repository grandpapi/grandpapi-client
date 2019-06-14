import { connect } from 'react-redux';
import NewDbForm from '../../components/create/NewDbForm';
import { createDb } from '../../actions/userDatabases/dbActions';

const mapDispatchToProps = dispatch => ({
  onSubmit(db) {
    dispatch(createDb(db));
  }
});

const mapStateToProps = () => ({ test: 'test' });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDbForm);
