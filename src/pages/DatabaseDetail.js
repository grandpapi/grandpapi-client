import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ModelDisplay from '../containers/dashboard/ModelDisplay';
import GlobalHeader from '../components/all/GlobalHeader';
import Footer from '../components/all/Footer';
import { BodyContainer, MainContainer } from '../styles';

function DatabaseDetail({ match }) {
  return (
    <BodyContainer>
      <GlobalHeader />
      <MainContainer>
        <ModelDisplay dbName={match.params.dbName} />
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}

DatabaseDetail.propTypes = {
  match: PropTypes.object.isRequired
};

export default withRouter(DatabaseDetail);
