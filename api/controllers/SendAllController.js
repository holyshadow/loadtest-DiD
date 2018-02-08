'use strict';

var syslog = require('syslog');
var logger = syslog.createClient(514, 'localhost');

var mongoose = require('mongoose'),
  Message = mongoose.model('send_all');


exports.list_all_req = function(req, res) {
  Message.find({}, function(err, send_all) {
    if (err)
      res.send(err);
      
    res.json(send_all);
  });
};


exports.create_a_task = function(req, res) {
  req.body["seq"] = req.params.seqId;
  var new_task = new Message(req.body);
  
  new_task.save(function(err, send_all) {
    if (err)
      res.send(err);
    
    logger.info('seq: %d', req.params.seqId);
    res.json(send_all);
  });
};