var util = require('util');
var config = require("../config.js").config;
var logger = require('log4js').getLogger('qrcode.js');

var qr = require('qr-image');

exports.site = function(req, res, next) {
  var code = qr.image(config.site, { type: 'svg' });
  res.type('svg');
  code.pipe(res);
};

exports.card = function(req, res, next) {
  var serial = req.params.serial;
  var url = config.site + serial;
  var code = qr.image(url, { type: 'svg' });
  res.type('svg');
  code.pipe(res);
};
