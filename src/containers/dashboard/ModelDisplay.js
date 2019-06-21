import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ModelList from '../../components/dashboard/ModelList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchModels } from '../../actions/modelActions';
import { selectDbMdls } from '../../selectors/modelSelectors';
import SingleDbEndpointList from '../../components/dashboard/SingleDbEndpointList';
import { selectCurrentDatabase } from '../../selectors/sessionSelectors';

class ModelDisplay extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    dbMdls: PropTypes.array,
    dbName: PropTypes.string.isRequired,
    currentDatabase: PropTypes.shape({
      dbName: PropTypes.string.isRequired,
      dbId: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired
    }).isRequired,
    publicAccess: PropTypes.bool
  }

  componentDidMount() {
    this.props.fetch(this.props.currentDatabase.dbId);
  }

  render() {
    const { currentDatabase: { username }, dbName, dbMdls, publicAccess } = this.props;
    if(dbMdls.length === 0 && !publicAccess) return (
      <>
        <Link to="/create/model">Add Model</Link>
        <p>Add a few models to your Database!</p>
      </>
    );
    return (
      <>
        {
          !publicAccess &&
          <>
            <Link to="/create/model">Add Model</Link>
            <ModelList dbName={dbName} models={dbMdls} publicAccess={publicAccess} />
          </>
        }
        <SingleDbEndpointList username={username} dbName={dbName} dbMdls={dbMdls} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  dbMdls: selectDbMdls(state),
  currentDatabase: selectCurrentDatabase(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(dbId) {
    dispatch(fetchModels(dbId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModelDisplay);
