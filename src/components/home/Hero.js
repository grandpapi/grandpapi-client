import React from 'react';
import { Link } from 'react-router-dom';
import { H1, HeroSection, HeroButton, HeroTaglineSection, HeroImageSection } from '../../styles';
import splashHeroHeart from '../../../assets/spash-hero-heart.png';

export default function Hero() {
  return (
    <HeroSection>
      <HeroTaglineSection>
        <H1>Make an app<br /> with Mega Nap.</H1>
        <p>Get RESTful API endpoints from any data set in minutes.</p>
        <Link to="/login"><HeroButton>Start Building</HeroButton></Link>
      </HeroTaglineSection>
      <HeroImageSection>
        <img src={splashHeroHeart} />
      </HeroImageSection>

    </HeroSection>
  );
}
