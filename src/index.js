require('@babel/register')({
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', {
      'targets': {
        'node': '8.12'
      }
    }]
  ]
});
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const htmlGen = require('./helpers/htmlGen').default;

const ProcessHome = require('./processors/home').default;

const OUTPUT_DIR = 'dist';

// cleanup
fse.removeSync(OUTPUT_DIR);

let routes = []
routes = routes.concat(ProcessHome())

routes.forEach(route => {
  const outputFilePath = path.join(process.cwd(), OUTPUT_DIR, route.path);
  // TODO: create dir
  const justThePath = path.dirname(outputFilePath);
  fse.ensureDirSync(justThePath);
  fs.writeFileSync(outputFilePath, htmlGen(route.component), 'ascii');
})
// TODO: copy assets