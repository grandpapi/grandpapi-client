import React from 'react';
import Footer from '../components/all/Footer';
import GlobalHeader from '../components/all/GlobalHeader';
import { BodyContainer, MainContainer } from '../styles';

export default function Careers() {
  return (
    <BodyContainer>
      <GlobalHeader />
      <MainContainer>
        <h1>Come Work for Us</h1>
        <p>We have very little capital, but lots of love</p>
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
