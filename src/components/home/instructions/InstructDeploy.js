import React from 'react';
import { PinkSpan, IntroRtoL, IntroGutterSpace } from '../../../styles';
import deployGraphic from '../../../../assets/deploy.png';

export default function InstructDeploy() {
  return (
    <IntroRtoL>
      <IntroGutterSpace>
        <img src={deployGraphic} />
      </IntroGutterSpace>
      <section>
        <h2><PinkSpan>Step Four:</PinkSpan> Deploy and start using your new endpoints!</h2>
        <p>Once you get your RESTful API endpoints you can use them however you like. What will you make with your new Mega Nap app?</p>
      </section>
    </IntroRtoL>
  );
}
