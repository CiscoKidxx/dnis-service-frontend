const Service = require('node-windows').Service;

var svc = new Service({
  name: 'SeeRC Frontend',
  description: 'Frontend software that displays everything. http://localhost:8000.',
  script: './express.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function() {
  svc.start();
});

svc.uninstall();
