const getData = require('./firebase');
const fs = require('fs');

function generateDataFile(data) {
  const { dirname } = require('path');
  const appDir = dirname(require.main.filename);
  const template = `export const data = ${data}`;
  console.log('[HYDRATE] Writing data');
  fs.writeFileSync(`${appDir}/../store/data.ts`, template, (error) => {
    console.log('[HYDRATE] Error occured while writing ' + error);
    return;
  });
  console.log('[HYDRATE] Terminating');
  process.exit(0);
}

console.log('[HYDRATE] Pulling data from server');
getData((data) => generateDataFile(JSON.stringify(data)));
