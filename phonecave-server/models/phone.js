'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  manufacturer: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  color: {
    type: String,
    trim: true
  },
  price: {
    type: Number
  },
  imageFileName: {
    type: String,
  },
  screen: {
    type: String,
    trim: true
  },
  processor: {
    type: String,
    trim: true
  },
  ram: {
    type: Number
  },
});

const Phone = mongoose.model('Phone', schema);

module.exports = Phone;
