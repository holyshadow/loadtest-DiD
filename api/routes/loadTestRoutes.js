'use strict';
module.exports = function(app) {
  var send_all = require('../controllers/SendAllController');
  var send_idp = require('../controllers/SendIDPController');
  
  app.route('/send_all')
    .get(send_all.list_all_req)

  app.route('/send_all/:seqId')
    .post(send_all.create_a_task);

  app.route('/send_idp')
    .get(send_idp.list_all_req)

  app.route('/send_idp/:seqId')
    .post(send_idp.create_a_task);
};
