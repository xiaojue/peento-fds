module.exports = function(ns,registerLocals,debug){
  var app = ns('app');
  registerLocals('nav',function(name,callback,context){
    app.call('nav.get',null,callback);
  });
};
