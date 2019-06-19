import React from 'react';
import { Link } from 'react-router-dom';
import { H1, HeroSection } from '../../styles';

export default function Hero() {
  return (
    <HeroSection>
      <H1>Make an app with Mega Nap.</H1>
      <p>Easily enter your data, then receive endpoints.</p>
      <Link to="/login">Start Building</Link>
    </HeroSection>
  );
}
