'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Testmodule Schema
 */
var TestmoduleSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Testmodule name',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Testmodule', TestmoduleSchema);
