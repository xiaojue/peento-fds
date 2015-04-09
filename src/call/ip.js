var os = require('os');
module.exports = function(ns, debug) {
  var ifaces = os.networkInterfaces();
  var ip = [];
  for (var dev in ifaces) {
    var alias = 0;
    ifaces[dev].forEach(function(details) {
      if (details.family == 'IPv4') {
        ip.push([dev+(alias ? ':' + alias :''),details.address]); ++alias;
      }
    });
  }
  return function(params,callback) {
    return callback(null,ip);
  };
};

