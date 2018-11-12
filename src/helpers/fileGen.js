import fs from "fs";
import path from 'path';
import React from 'react';
import htmlGen from './htmlGen';
import App from '../App';
import { LevelProvider } from '../components/WithLevel';

export default function(outPath) {
  return function (filePath, element) {
    const outputFileAbsPath = path.join(outPath, filePath);
    // TODO: cross OS
    const level = outputFileAbsPath.split('/').length - outPath.split('/').length - 1;

    const dom = (
      <LevelProvider level={level}>
        <App level={level}>
          {element}
        </App>
      </LevelProvider>
    )

    fs.writeFileSync(outputFileAbsPath, htmlGen(dom), 'ascii');
  }
}