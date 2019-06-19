import React from 'react';
import { Link } from 'react-router-dom';
import { H1, HeroSection, HeroButton, HeroTaglineSection, HeroImageSection } from '../../styles';

export default function Hero() {
  return (
    <HeroSection>
      <HeroTaglineSection>
        <H1>Make an app<br /> with Mega Nap.</H1>
        <p>Create a database, receive endpoints, and integrate into your frontend app in minutes.</p>
        <Link to="/login"><HeroButton>Start Building</HeroButton></Link>
      </HeroTaglineSection>
      <HeroImageSection>
        <img src="assets/spash-hero-heart.png" />
      </HeroImageSection>

    </HeroSection>
  );
}
