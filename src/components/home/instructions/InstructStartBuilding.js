import React from 'react';
import { Link } from 'react-router-dom';
import { BodyButton, StartBuildingSection } from '../../../styles';

export default function InstructStartBuilding() {
  return (
    <StartBuildingSection>
      <h2>It's really that easy, so what are you waiting for? Sign up now and start making your dream fullstack app a reality today! </h2>
      <Link to="/login"><BodyButton>Start Building</BodyButton></Link>
    </StartBuildingSection>
  );
}
