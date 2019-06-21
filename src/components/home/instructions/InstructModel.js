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
        <p>These will determine how your data is stored in your databse and how it you'll receive it when you make a fetch.</p>
      </section>
    </IntroRtoL>
  );
}
