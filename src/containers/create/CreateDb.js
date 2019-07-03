import { connect } from 'react-redux';
import DbForm from '../../components/create/DbForm';
import { createDb } from '../../actions/dbActions';
import { selectDbList } from '../../selectors/dbSelectors';

const mapStateToProps = state => ({
  dbList: selectDbList(state)
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
