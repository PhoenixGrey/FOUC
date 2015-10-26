var exec = require('child_process').exec;

var child;

var opt = {
  encoding: 'utf-8',
  killSignal: 'SIGTERM',
	cwd: './build'
};
child = exec('python -m SimpleHTTPServer', opt, function(err, stdout, stderr) {
  if (err !== null) {
    console.log('Exec error: ' + err);
  }
  console.log(stdout);
});

