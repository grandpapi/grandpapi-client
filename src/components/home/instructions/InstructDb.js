import React from 'react';
import { PinkSpan, IntroLtoR, IntroGutterSpace } from '../../../styles';
import databaseGraphic from '../../../../assets/database.png';

export default function InstructDb() {
  return (
    <IntroLtoR>
      <section>
        <img src={databaseGraphic} />
      </section>
      <IntroGutterSpace>
        <h2><PinkSpan>Step One:</PinkSpan> Create a database and give it a name.</h2>
        <p>This is your new playground, and it's ready to hold all your data. What will you build with it?</p>
      </IntroGutterSpace>
    </IntroLtoR>
  );
}
