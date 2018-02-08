'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AllMsgSchema = new Schema({
  seq: {
    type: String
  },
  time_recieve: {
    type: Date,
    default: Date.now
  },
  payload: {
      type: String
  }
});

var IDPMsgSchema = new Schema({
  seq: {
    type: String
  },
  time_recieve: {
    type: Date,
    default: Date.now
  },
  payload: {
      type: String
  }
});

module.exports = mongoose.model('send_all', AllMsgSchema);
module.exports = mongoose.model('sendIDP', IDPMsgSchema);