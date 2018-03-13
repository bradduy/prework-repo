'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Tutor_registration Schema
 */
var TutorRegisSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  cvLink: {
    type: String,
    default: ''
  },
  specialtyDesc: [String],
  intro_words: {
    type: String,
    default: ''
  },
  status: {
    type: Number,
    default: 0
  },
  created: {
    type: Date,
    default: Date.now
  }
 
});

mongoose.model('TutorRegistration', TutorRegisSchema, 'tutor_registrations');
