var util = require('util');
var config = require("../config.js").config;
var logger = require('log4js').getLogger('card.js');

var MobileDetect = require('mobile-detect');

exports.recharge = function(req, res, next) {
  var serial = req.params.serial;
  md = new MobileDetect(req.headers['user-agent']);

  logger.debug(md.os());
  if ('AndroidOS' === md.os()) {
    res.render('android', {
      serial : serial
    });
  } else {
    res.render('download', {
      serial : serial
    });
  }

};
