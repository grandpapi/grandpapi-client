import React from 'react';
import Footer from '../components/all/Footer';
import GlobalHeader from '../components/all/GlobalHeader';
import { MainContainer, BodyContainer } from '../styles';

export default function Privacy() {
  return (
    <BodyContainer>
      <MainContainer>
        <GlobalHeader />
        <h1>Privacy Policy</h1>
        <p> Something clever </p>
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
