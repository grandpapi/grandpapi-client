import { connect } from 'react-redux';
import NewDbForm from '../../components/create/NewDbForm';
import { createDb } from '../../actions/userDatabases/dbActions';
import { selectUserId, selectNickname } from '../../selectors/sessionSelectors';

const mapDispatchToProps = dispatch => ({
  onSubmit(db) {
    dispatch(createDb(db));
  }
});

const mapStateToProps = state => ({
  userId: selectUserId(state),
  nickname: selectNickname(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDbForm);
