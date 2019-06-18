import React from 'react';
import CreateDb from '../containers/create/CreateDb';
import CreateModel from '../containers/create/CreateModel';
import styled from 'styled-components';

export default function Create() {
  const TestingStyledComponents = styled.h1`
    font-size: 48px;
    color: coral;
  `;
  return (
    <>
      <TestingStyledComponents>Hello there!</TestingStyledComponents>
      <CreateDb />
      <CreateModel />
    </>
  );
}
