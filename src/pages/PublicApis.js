import React from 'react';
import Footer from '../components/all/Footer';
import GlobalHeader from '../components/all/GlobalHeader';
import { BodyContainer, MainContainer } from '../styles';

export default function PublicApis() {
  return (
    <BodyContainer>
      <MainContainer>
        <GlobalHeader />
        <h1>Public Apis</h1>
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
