'use strict';

var syslog = require('syslog');
var logger = syslog.createClient(514, 'localhost');
var mongoose = require('mongoose'),
Message = mongoose.model('sendIDP');

exports.list_all_req = function(req, res) {
  Message.find({}, function(err, sendIDP) {
    if (err)
      res.send(err);

    res.json(sendIDP);
  });
};


exports.create_a_task = function(req, res) {
  req.body["seq"] = req.params.seqId;
  var new_task = new Message(req.body);
  
  var current = new Date().toISOString();
  console.log(req.body["seq"] + " " + current);
  new_task.save(function(err, sendIDP) {
    if (err)
      res.send(err);
    
    //var temp = new Date().toISOString();
    //var str = new Array(25).join( temp );

    logger.info('seq: %d', req.params.seqId);
    res.json(sendIDP);
  });
};
