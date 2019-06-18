import { connect } from 'react-redux';
import DbForm from '../../components/create/DbForm';
import { createDb } from '../../actions/userDatabases/dbActions';
import { selectDbShow } from '../../selectors/dbSelectors';
import { selectMdlNameShow, selectMdlEntryShow } from '../../selectors/modelSelectors';

const mapStateToProps = state => ({
  dbShow: selectDbShow(state),
  modelNameShow: selectMdlNameShow(state),
  modelEntryShow: selectMdlEntryShow(state)
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
