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
fse.ensureDirSync(OUTPUT_DIR);

// Copy assets dir
const assetsSourcePath = path.join(__dirname, 'assets');
const assetsTargetPath = path.join(OUTPUT_DIR, 'assets');

console.log(`Copying assets from ${assetsSourcePath} to ${assetsTargetPath}`);
fse.copySync(assetsSourcePath, assetsTargetPath);

// Generate routes
let routes = [];
routes = routes.concat(ProcessHome());
// more generators here...


// Generate files for routes
console.log(`Processing ${routes.length} routes`);
routes.forEach(route => {
  const outputFilePath = path.join(process.cwd(), OUTPUT_DIR, route.path);
  
  // create dir as needed
  const justThePath = path.dirname(outputFilePath);
  fse.ensureDirSync(justThePath);
  
  // output the files
  fs.writeFileSync(outputFilePath, htmlGen(route.component), 'ascii');
})
// TODO: copy assets