import React from 'react';
import { Link } from 'react-router-dom';

export default function InstructStartBuilding() {
  return (
    <section>
      <h2>Easy, right? So what are you waiting for? Sign up now and start making your dream fullstack app a reality! </h2>
      <Link to="/login">Start Building!</Link>
    </section>
  );
}
