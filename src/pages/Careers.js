import React from 'react';
import Footer from '../components/all/Footer';
import GlobalHeader from '../components/all/GlobalHeader';
import { BodyContainer, MainContainer } from '../styles';

export default function Careers() {
  return (
    <BodyContainer>
      <GlobalHeader />
      <MainContainer>
        <h2>Come Work for Us</h2>
        <p>We aren't currently hiring, but we're always interested in hearing from talented job seekers. Drop us a line at jobs@meganap.com and let us know what you're good at.</p>
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
