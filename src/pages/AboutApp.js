import React from 'react';
import Footer from '../components/all/Footer';
import GlobalHeader from '../components/all/GlobalHeader';
import { BodyContainer, MainContainer } from '../styles';

export default function AboutApp() {
  return (
    <BodyContainer>
      <MainContainer>
        <GlobalHeader />
        <h1>About App</h1>
        <h2>FAQ</h2>
        <h3>What is an API?</h3>
        <p>An API stands for Application Programming Interface.  MegaNap specifically deals with web APIs.   The specifics of APIs are out of the scope of this FAQ, but we encourage you to learn more about them here!</p>
        <a href='https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction'>MDN - APIs</a>
        <h3>What does MegaNap do for me?</h3>
        <p>MegaNap is an easy way to create a RESTful API without manually coding it.  If you are a coding newbie learning about fetching, it can be really difficult to find a simple API with fun information to use.  Our boredom of the Pokemon API is what inspired this project! But, this tool is also really useful for front end developers that need to prototype as well.</p>
        <h3>What will I get from MegaNap after adding my data?</h3>
        <p>You will receive endpoints - unique URIs - that you can use to fetch your data from. </p>
        <h3>I want to make a more complicated API.</h3>
        <p>We kept this tool simple, but hope it inspires you to move forward and improve your code! There are tons of great tutorials out there if you want to dive into creating your own API. </p>

      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
