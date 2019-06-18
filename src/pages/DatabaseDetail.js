import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ModelDisplay from '../containers/dashboard/ModelDisplay';
import GlobalHeader from '../components/all/GlobalHeader';


function DatabaseDetail({ match }) {
  return (
        <>
            <GlobalHeader />
            <ModelDisplay dbName={match.params.dbName} />
        </>
  );
}

DatabaseDetail.propTypes = {
  match: PropTypes.object.isRequired
};

export default withRouter(DatabaseDetail);
