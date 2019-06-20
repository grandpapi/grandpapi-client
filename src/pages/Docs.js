import React from 'react';
import GlobalHeader from '../components/all/GlobalHeader';
import Footer from '../components/all/Footer';
import { BodyContainer, MainContainer } from '../styles';

export default function Docs() {
  return (
    <BodyContainer>
      <GlobalHeader />
      <MainContainer>
        <h1>Docs</h1>
        <h2>Name Your Database</h2>
        <ul>
          <li>Choose a name that reflects your whole project. Do not include spaces in your name.</li>
          <li>Choose if you would like your database to be public or private. Public databases will have their endpoints published and will be open to other users to access the data. Private databases will not have published endpoints.</li>
        </ul>
        <h2>Create your models</h2>
        <ul>
          <li>This is the structure of your database.  Think carefully about what data you will want from your finished API.  So, if you have a database named FamousDogs, your model name would be Dog.</li>
          <li>Something about Fields; naming and dataType</li>
          <li>Create as many models as your database requires. The database **** has the following models</li>
        </ul>
        <h2>Add Data</h2>
        <h2>Access API endpoints</h2>
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
