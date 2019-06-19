import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import DataDisplay from '../containers/dashboard/DataDisplay';
import GlobalHeader from '../components/all/GlobalHeader';


function ModelDetail({ match }) {
  return (
    <>
      <GlobalHeader />
      <h1>{match.params.mdlName}</h1>
    </>
  );
}

ModelDetail.propTypes = {
  match: PropTypes.object.isRequired
};

export default withRouter(ModelDetail);
