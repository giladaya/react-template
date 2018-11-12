import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from '../App';

export default function( Component, title="React Template" ) {
  const sheet = new ServerStyleSheet();
  const reactDom = ReactDOMServer.renderToStaticMarkup(
    <App>
      {Component}
    </App>
  );

  const styleTags = sheet.getStyleTags();

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8"/>
      <title>${title}</title>
      ${styleTags}
    </head>

    <body>
      ${reactDom}
    </body>
    </html>
  `;
}