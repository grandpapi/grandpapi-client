import React from 'react';
import DataEntryForm from '../components/create/DataEntryForm';
import GlobalHeader from '../components/all/GlobalHeader';
import Footer from '../components/all/Footer';
import { BodyContainer, MainContainer } from '../styles';
import Breadcrumbs from '../containers/dashboard/Breadcrumbs';

export default function DataCreation() {
  return (
    <BodyContainer>
      <GlobalHeader />
      <Breadcrumbs />
      <MainContainer>
        <DataEntryForm />
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
