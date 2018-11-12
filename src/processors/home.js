import React from 'react';
import Home from '../pages/Home';

export default function() {
  const data = [
    'aaa',
    'bbb',
    'cdcd',
  ];
  return [
    {path: 'index.html', component: <Home data={data}/>}
  ]
}