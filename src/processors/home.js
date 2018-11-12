import React from 'react';
import Home from '../pages/Home';

export default function(generator) {
  const data = [
    'aaa',
    'bbb',
    'cdcd',
  ];
  generator('index.html', <Home data={data}/>);
}