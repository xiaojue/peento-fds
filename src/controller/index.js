module.exports = function(ns, createController, debug) {
  var app = ns('app');
  var controller = createController({
    'name': 'index',
    'public': function(params, req, res, next) {
        res.render('index');
    }
  });
  return controller;
};

