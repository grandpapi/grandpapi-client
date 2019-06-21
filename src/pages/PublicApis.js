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
        <PublicDatabaseDisplay />
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
