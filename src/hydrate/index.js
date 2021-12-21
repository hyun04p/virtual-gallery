const getData = require('./firebase');
const fs = require('fs');

function generateDataFile(data) {
  const { dirname } = require('path');
  const appDir = dirname(require.main.filename);
  const template = `export const data = ${data}`;
  console.log('writing');
  fs.writeFileSync(`${appDir}/../store/data.ts`, template, (error) => {
    return;
  });
}

getData((data) => generateDataFile(JSON.stringify(data)));
