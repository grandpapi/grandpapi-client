import React from 'react';
import Footer from '../components/all/Footer';
import GlobalHeader from '../components/all/GlobalHeader';
import { BodyContainer, MainContainer } from '../styles';

export default function AboutTable3() {
  return (
    <BodyContainer>
      <GlobalHeader />
      <MainContainer>
        <h1>Table 3</h1>
        <p>Grandpapi took a MegaNap</p>
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
