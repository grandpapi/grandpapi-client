import React from 'react';
import Splash from '../components/home/Splash';
import Footer from '../components/all/Footer';
import InstructDb from '../components/home/instructions/InstructDb';
import InstructModel from '../components/home/instructions/InstructModel';
import InstructData from '../components/home/instructions/InstructData';
import InstructDeploy from '../components/home/instructions/InstructDeploy';
import InstructStartBuilding from '../components/home/instructions/InstructStartBuilding';
import InstructIntro from '../components/home/instructions/InstructIntro';
export default function Home() {
  return (
    <>
      <Splash />
      <section className="instructions">
        <InstructIntro />
        <InstructDb />
        <InstructModel />
        <InstructData />
        <InstructDeploy />
        <InstructStartBuilding />
      </section>
      <Footer />
    </>
  );
}
