module.exports = function(ns,debug){
  return function(params,callback){
    callback(null,ns('nav'));
  };
};
