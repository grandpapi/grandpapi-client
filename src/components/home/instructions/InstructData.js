import React from 'react';
import { PinkSpan, IntroLtoR, IntroGutterSpace } from '../../../styles';
import dataGraphic from '../../../../assets/data.png';

export default function InstructData() {
  return (
    <IntroLtoR>
      <section>
        <img src={dataGraphic} />
      </section>
      <IntroGutterSpace>
        <h2><PinkSpan>Step Three:</PinkSpan> Add your data.</h2>
        <p>What can you put here? Anything you want! Scientific data, movie trivia, information about your pets — the sky's the limit.</p>
      </IntroGutterSpace>
    </IntroLtoR>
  );
}
