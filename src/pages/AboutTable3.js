import React from 'react';
import Footer from '../components/all/Footer';
import GlobalHeader from '../components/all/GlobalHeader';
import { BodyContainer, MainContainer, TeamSection } from '../styles';
import Ben from '../../assets/tabl3-ben.jpg';
import Emily from '../../assets/tabl3-emily.jpeg';
import Chris from '../../assets/tabl3-chris.jpeg';
import Marty from '../../assets/tabl3-marty.jpeg';
import Tommy from '../../assets/tabl3-tommy.jpeg';

export default function AboutTable3() {
  return (
    <BodyContainer>
      <GlobalHeader />
      <MainContainer>
        <h2>About Tabl3</h2>
        <p>Mega Nap is the brainchild of Emily Baier, Marty Martinez, Ben Parisot, Chris Piccaro, and Tommy Tran; collectively known as Tabl3. They are fullstack JavaScript developers working in React/Redux, Node.js, and Express.</p>
        <h2>Meet the Team:</h2>
        <TeamSection>
          <li>
            <img src={Emily} alt="Emily Baier" />
            <a href="https://www.linkedin.com/in/emily-baier/">Emily Baier</a>
          </li>
          <li>
            <img src={Marty} alt="Marty Martinez" />
            <a href="https://www.linkedin.com/in/marty-martinez/">Marty Martinez</a>
          </li>
          <li>
            <img src={Ben} alt="Ben Parisot" />
            <a href="https://www.linkedin.com/in/benparisot/">Ben Parisot</a>
          </li>
          <li>
            <img src={Chris} alt="Chris Piccaro" />
            <a href="https://www.linkedin.com/in/chris-piccaro/">Chris Piccaro</a>
          </li>
          <li>
            <img src={Tommy} alt="Tommy Tran" />
            <a href="https://www.linkedin.com/in/tranttommy/">Tommy Tran</a>
          </li>
        </TeamSection>

      </MainContainer>
      <Footer />
    </BodyContainer>
  );
}
