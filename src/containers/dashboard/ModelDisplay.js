import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ModelList from '../../components/dashboard/ModelList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchModels } from '../../actions/modelActions';
import { selectDbMdls } from '../../selectors/modelSelectors';
import { selectNickname } from '../../selectors/sessionSelectors';
import SingleDbEndpointList from '../../components/dashboard/SingleDbEndpointList';
import { selectCurrentDatabase } from '../../selectors/sessionSelectors';

class ModelDisplay extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    dbMdls: PropTypes.array,
    dbName: PropTypes.string.isRequired,
    currentDatabase: PropTypes.shape({
      dbName: PropTypes.string.isRequired,
      dbId: PropTypes.string.isRequired
    }).isRequired
  }

  newModel = () => {

  }
  componentDidMount() {
    this.props.fetch(this.props.dbName);
  }

  render() {
    const { username, dbName, dbMdls } = this.props;
    if(dbMdls.length === 0) return (
      <>
        <Link to="/create/model">Add Model</Link>
        <p>Add a few models to your Database!</p>
        </>
    );
    return (
      <>
        <Link to="/create/model">Add Model</Link>
        <ModelList dbName={dbName} models={dbMdls} />
        <SingleDbEndpointList username={username} dbName={dbName} dbMdls={dbMdls} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  dbMdls: selectDbMdls(state),
  username: selectNickname(state),
  currentDatabase: selectCurrentDatabase(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(dbName) {
    dispatch(fetchModels(dbName));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModelDisplay);
