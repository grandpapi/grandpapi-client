import React from 'react';
import Footer from '../components/all/Footer';
import GlobalHeader from '../components/all/GlobalHeader';
import { BodyContainer, MainContainer } from '../styles';

export default function PublicApis() {
  return (
    <BodyContainer>
      <GlobalHeader />
      <MainContainer>
        <h2>Public Apis</h2>
        <p>View a list of Mega Nap users' recently published API endpoints:</p>
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
