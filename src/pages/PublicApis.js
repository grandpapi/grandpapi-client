import React from 'react';
import Footer from '../components/all/Footer';
import GlobalHeader from '../components/all/GlobalHeader';
import { BodyContainer, MainContainer } from '../styles';
import PublicDatabaseDisplay from '../containers/publicApis/PublicDatabaseDisplay';

export default function PublicApis() {
  return (
    <BodyContainer>
      <GlobalHeader />
      <MainContainer>
            <h2>Public Apis</h2>
            <p>View a list of Mega Nap users' public API endpoints:</p>
        <PublicDatabaseDisplay />
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
