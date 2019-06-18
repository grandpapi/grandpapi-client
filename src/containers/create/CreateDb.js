import { connect } from 'react-redux';
import DbForm from '../../components/create/DbForm';
import { createDb } from '../../actions/userDatabases/dbActions';
import { selectUserDbs, selectDbShow } from '../../selectors/dbSelectors';

const mapStateToProps = state => ({
  userDbs: selectUserDbs(state),
  dbShow: selectDbShow(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit(db) {
    dispatch(createDb(db));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DbForm);
