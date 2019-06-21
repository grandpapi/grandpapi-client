import React from 'react';
import GlobalHeader from '../components/all/GlobalHeader';
import Footer from '../components/all/Footer';
import { BodyContainer, MainContainer, BodyLi } from '../styles';

export default function Docs() {
  return (
    <BodyContainer>
      <GlobalHeader />
      <MainContainer>
        <h2>Documentation</h2>
        <h3>Name Your Database</h3>
        <ul>
          <BodyLi>Choose a name that reflects your whole project. Do not include spaces in your name.</BodyLi>
          <BodyLi>Choose if you would like your database to be public or private. Public databases will have their endpoints published and will be open to other users to access the data. Private databases will not have published endpoints.</BodyLi>
        </ul>
        <h3>Create your models</h3>
        <ul>
          <BodyLi>This is the structure of your database.  Think carefully about what data you will want from your finished API.  So, if you have a database named FamousDogs, your model name would be Dog.</BodyLi>
          <BodyLi>Something about Fields; naming and dataType</BodyLi>
          <BodyLi>Create as many models as your database requires. The database **** has the following models</BodyLi>
        </ul>
        <h3>Add Data</h3>
        <h3>Access API endpoints</h3>
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
