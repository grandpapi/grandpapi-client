import React from 'react';
import { PinkSpan, IntroRtoL, IntroGutterSpace } from '../../../styles';
import modelsGraphic from '../../../../assets/models.png';

export default function InstructModel() {
  return (
    <IntroRtoL>
      <IntroGutterSpace>
        <img src={modelsGraphic} />
      </IntroGutterSpace>
      <section>
        <h2><PinkSpan>Step Two:</PinkSpan> Create some models.</h2>
        <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.</p>
      </section>
    </IntroRtoL>
  );
}
