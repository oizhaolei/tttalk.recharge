var util = require('util');
var config = require("../config.js").config;
var logger = require('log4js').getLogger('card.js');

var MobileDetect = require('mobile-detect');

exports.recharge = function(req, res, next) {
  var serial = req.params.serial;
  logger.debug(req.headers['user-agent']);
  md = new MobileDetect(req.headers['user-agent']);

  if ('' === md.os()) {
    res.render('android');
  } else {
    res.render('android');

  }

};
