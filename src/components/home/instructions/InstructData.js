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
        <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.</p>
      </IntroGutterSpace>
    </IntroLtoR>
  );
}
