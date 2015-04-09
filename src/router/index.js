module.exports = function(ns, router) {
  router.get('/', function(req, res, next) {
    ns('controller.index').process({},req,res,next);
  });
};

