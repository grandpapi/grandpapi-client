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
          <BodyLi>Once you've named your model you'll need to define it's schema. Do this by picking the types of data you'll enter in the model and what those data types should be called. For instance, in your Dog model you might want a field called Name that accepts a string, or a field called Spayed/Neuter that accepts a boolean.</BodyLi>
          <BodyLi>Create as many models as your database requires! Keep them specific and related to your database.</BodyLi>
        </ul>
        <h3>Add Data</h3>
        <BodyLi>Now that your model schema has been defined, it's time to start filling your database with data!</BodyLi>
        <BodyLi>You can enter your data all at once, or submit a few entries at a time and come back to add more later. Mega Nap makes it easy for you to add new data to your database at any time.</BodyLi>
        <h3>Access API endpoints</h3>
        <BodyLi>You'll have access to your RESTful API endpoints as soon as you make your first model. The more data you add to your database, the more useful your endpoints will be.</BodyLi>
        <BodyLi>You can share your endpoints with other developers, too. Who knows what kind of cool apps people might make with your data!</BodyLi>
      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
