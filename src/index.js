module.exports = function(ns, plugin, debug) {
  plugin.load(__dirname);
  var app = ns('app');
  app.once('start', function() {
    ns('configManager', require('./lib/config'));
  });
};

