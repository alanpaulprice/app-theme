const fse = require('fs-extra');
const input = require('../src/input');

fse.writeFile(
  './themes/app-theme-color-theme.json',
  JSON.stringify(input),
  error => {
    if (error) throw error;
  }
);
