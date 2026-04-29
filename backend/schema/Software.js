const mongoose = require('mongoose');

const SoftwareSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  dept: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dept',
    required: true,
  },
},{timestamps: true});

const TicketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  software: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Software',
    required: true,
  },
  status: {
    type: String,
    enum: ['open', 'in progress', 'closed'],
    default: 'open',
  },
  supportingfiles: [{
    filename: String,
    url: String,
  }],
},{timestamps: true});

const Software = mongoose.model('Software', SoftwareSchema);

module.exports = Software;