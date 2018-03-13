'use strict';

/**
 * Module dependencies
 */
var testmodulesPolicy = require('../policies/testmodules.server.policy'),
  testmodules = require('../controllers/testmodules.server.controller');

module.exports = function(app) {
  // Testmodules Routes
  app.route('/api/testmodules').all(testmodulesPolicy.isAllowed)
    .get(testmodules.list)
    .post(testmodules.create);

  app.route('/api/testmodules/:testmoduleId').all(testmodulesPolicy.isAllowed)
    .get(testmodules.read)
    .put(testmodules.update)
    .delete(testmodules.delete);

  // Finish by binding the Testmodule middleware
  app.param('testmoduleId', testmodules.testmoduleByID);
};
