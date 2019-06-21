import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectNickname } from '../../selectors/sessionSelectors';
import { selectAllMdls } from '../../selectors/modelSelectors';
import { fetchAllModels } from '../../actions/modelActions';
import AllDbEndpointsList from '../../components/dashboard/AllDbEndpointsList';

class EndpointDisplay extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    models: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired
  }

  componentDidMount() {
    const { fetch, username } = this.props;
    fetch(username);
  }

  render() {
    const { models, username } = this.props;

    if(models.length === 0) return <h1>Endpoints</h1>;

    const dbNames = [...new Set(models.map(model => model.dbId.dbName))];
    
    const modelsByDb = dbNames.map(db => {
      const mdlArray = [];
      models.forEach(model => {
        if(model.dbId.dbName === db) {
          mdlArray.push(model);
        }
      });
      return mdlArray;
    });
    
    return (
      <>
      <h3>Endpoints</h3>
      <AllDbEndpointsList username={username} dbNames={dbNames} models={modelsByDb} />
      {models.length === 0 && (
        <>
        <h3>No endpoints yet...</h3>
        <p>Create a database, then a model.</p>
        <Link to="/create/database">Create a database</Link>
        </>
      )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  models: selectAllMdls(state),
  username: selectNickname(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(username) {
    dispatch(fetchAllModels(username));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EndpointDisplay);
