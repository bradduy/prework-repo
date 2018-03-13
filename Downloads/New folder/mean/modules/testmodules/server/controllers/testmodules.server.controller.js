'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Testmodule = mongoose.model('Testmodule'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  _ = require('lodash');

/**
 * Create a Testmodule
 */
exports.create = function(req, res) {
  var testmodule = new Testmodule(req.body);
  testmodule.user = req.user;

  testmodule.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(testmodule);
    }
  });
};

/**
 * Show the current Testmodule
 */
exports.read = function(req, res) {
  // convert mongoose document to JSON
  var testmodule = req.testmodule ? req.testmodule.toJSON() : {};

  // Add a custom field to the Article, for determining if the current User is the "owner".
  // NOTE: This field is NOT persisted to the database, since it doesn't exist in the Article model.
  testmodule.isCurrentUserOwner = req.user && testmodule.user && testmodule.user._id.toString() === req.user._id.toString();

  res.jsonp(testmodule);
};

/**
 * Update a Testmodule
 */
exports.update = function(req, res) {
  var testmodule = req.testmodule;

  testmodule = _.extend(testmodule, req.body);

  testmodule.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(testmodule);
    }
  });
};

/**
 * Delete an Testmodule
 */
exports.delete = function(req, res) {
  var testmodule = req.testmodule;

  testmodule.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(testmodule);
    }
  });
};

/**
 * List of Testmodules
 */
exports.list = function(req, res) {
  Testmodule.find().sort('-created').populate('user', 'displayName').exec(function(err, testmodules) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(testmodules);
    }
  });
};

/**
 * Testmodule middleware
 */
exports.testmoduleByID = function(req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Testmodule is invalid'
    });
  }

  Testmodule.findById(id).populate('user', 'displayName').exec(function (err, testmodule) {
    if (err) {
      return next(err);
    } else if (!testmodule) {
      return res.status(404).send({
        message: 'No Testmodule with that identifier has been found'
      });
    }
    req.testmodule = testmodule;
    next();
  });
};
