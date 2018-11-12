import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

export default function( element, title="React Template" ) {
  const sheet = new ServerStyleSheet();
  const reactDom = ReactDOMServer.renderToStaticMarkup(
    sheet.collectStyles(element)
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