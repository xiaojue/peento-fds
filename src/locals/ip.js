module.exports = function(ns,registerLocals,debug){
  var app = ns('app');
  registerLocals('ip',function(name,callback,context){
    app.call('ip',null,callback);
  });
  registerLocals('title',function(name,callback,context){
    callback(null,'fd-server admin');
  });
};
