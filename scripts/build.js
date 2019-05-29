const fse = require('fs-extra');
const theme = require('../src/input.js');

fse.writeFile('./themes/output.json', JSON.stringify(theme), error => {
  if (error) throw error;
  console.log('File successfully written');
});
