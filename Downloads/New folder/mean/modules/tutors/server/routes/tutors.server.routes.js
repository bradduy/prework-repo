'use strict';

/**
 * Module dependencies
 */
var tutorsPolicy = require('../policies/tutors.server.policy'),
  tutors = require('../controllers/tutors.server.controller');

module.exports = function(app) {
  // Tutors Routes
  app.route('/api/tutors').all(tutorsPolicy.isAllowed)
    .get(tutors.list)
    .post(tutors.create);
  app.route('/api/tutors/register').all(tutorsPolicy.isAllowed)
    .post(tutors.createTutorRegis);
    

  app.route('/api/tutors/:tutorId').all(tutorsPolicy.isAllowed)
    .get(tutors.read)
    .put(tutors.update)
    .delete(tutors.delete);

  // Finish by binding the Tutor middleware
  app.param('tutorId', tutors.tutorByID);
};
