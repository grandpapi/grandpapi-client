import React from 'react';
import { Link } from 'react-router-dom';
import { BodyButton, StartBuildingSection } from '../../../styles';

export default function InstructStartBuilding() {
  return (
    <StartBuildingSection>
      <h2>It's really that easy. Sign up today and start making your dream fullstack app a reality! </h2>
      <Link to="/login"><BodyButton>Start Building</BodyButton></Link>
    </StartBuildingSection>
  );
}
