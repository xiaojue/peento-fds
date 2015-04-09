module.exports = function(ns, plugin, debug) {
  plugin.load(__dirname);
  var app = ns('app');
  app.once('start', function() {
    /*
    var nav = ns('nav', []);
    app.call('nav.add', [{
      url: '/',
      title: 'index'
    },{
      url:'/abc',
      title:'abc'
    }], function() {
      console.log('start');
    });
    */
  });
};

