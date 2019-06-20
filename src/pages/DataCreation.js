import React from 'react';
import DataEntryForm from '../components/create/DataEntryForm';
import GlobalHeader from '../components/all/GlobalHeader';
import Footer from '../components/all/Footer';

export default function DataCreation() {
  return (
    <>
      <GlobalHeader />
      <DataEntryForm />
      <Footer />
    </>   
  );
}
