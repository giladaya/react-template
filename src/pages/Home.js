import React from 'react';
import styled from 'styled-components';
import levelsUrl from '../helpers/levelsUrl';

const Title = styled.h1`
`

export default props => (
  <div>
    <Title>Home</Title>
    <div>
      This is home
      <ul>
        {props.data.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
    <img src={levelsUrl('assets/Chuck-norris-002.jpg', props.level)}/>
  </div>
)