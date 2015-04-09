var peento = require('peento');

var app = peento(require('./config'));

app.use('./src');

app.use('fds-vhost');

app.start();
