var exec = require('child_process').exec;

var child;

var opt = {
  encoding: 'utf-8',
  killSignal: 'SIGTERM'
};
child = exec('cd build; python -m SimpleHTTPServer', function(err, stdout, stderr) {
  if (err !== null) {
    console.log('Exec error: ' + err);
  }
  console.log(stdout);
});

