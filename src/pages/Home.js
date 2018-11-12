import React from 'react';
import styled from 'styled-components';
import levelsUrl from '../helpers/levelsUrl';
import {withLevel} from '../components/WithLevel';

const Title = styled.h1`
`

const Home = props => (
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

export default withLevel(Home);