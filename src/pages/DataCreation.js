import React from 'react';
import DataEntryForm from '../components/create/DataEntryForm';
import GlobalHeader from '../components/all/GlobalHeader';
import Footer from '../components/all/Footer';
import { BodyContainer, MainContainer } from '../styles';

export default function DataCreation() {
  return (
    <BodyContainer>
      <MainContainer>
        <GlobalHeader />
        <DataEntryForm />
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
