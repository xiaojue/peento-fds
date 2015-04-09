module.exports = function(ns,debug){
  return function(params,callback){
    var nav = ns('nav');
    var navs = nav.concat(params);
    ns('nav',navs);
    callback(null,navs);
  };
};
