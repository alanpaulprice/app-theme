const chokidar = require('chokidar');
const exec = require('child_process').exec;

chokidar.watch('src', { ignored: /(^|[\/\\])\../ }).on('all', (event, path) => {
  console.log(`${event} detected in ${path}`);
  exec('npm run build');
});
