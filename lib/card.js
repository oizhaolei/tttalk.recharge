var util = require('util');
var config = require("../config.js").config;
var logger = require('log4js').getLogger('card.js');

var MobileDetect = require('mobile-detect');

exports.recharge = function(req, res, next) {
  var serial = req.params.serial;
  logger.debug(req.headers['user-agent']);
  md = new MobileDetect(req.headers['user-agent']);

  res.status(200).send({
    success : true,
    msg : md.os()
  });

};
