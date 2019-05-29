const fs = require('fs');
const theme = require('./input.js');

fs.writeFile('test-theme-color-theme.json', JSON.stringify(theme), error => {
  if (error) throw error;
  JSON.stringify(theme);
  console.log('File successfully written to disk');
});
