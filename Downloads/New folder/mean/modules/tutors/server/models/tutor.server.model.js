'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
//  Schema = mongoose.Schema;

var reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  rating : {
    type : Number,
    required : true,
    min : 0,
    max : 5
  },
  review : {
    type : String,
    required : true,
    trim: true
  },
  createdOn : {
    type : Date,
    default : Date.now
  }
});

var courseSchema = new mongoose.Schema({
  course_code: {
    type: String,
    required : true
  },
  course_tittle: {
    type: String,
    required : true
  },
  description : {
    type : String,
    required : true
  },
  fee : {
    type : Number,
    required : true
  },
  status : {
    type : String,
    default: '',
    trim: true
  },
  createdOn : {
    type : Date,
    default : Date.now
  }
});

/**
 * Tutor Schema
 */
var TutorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  licensedDate: {
    type: Date,
    default: Date.now
  },
  specialtyDesc: {
    type: String,
    default: ''
  },
  category : [String],
  course : [courseSchema],
  reviews : [reviewSchema]
});



mongoose.model('Tutor', TutorSchema);
