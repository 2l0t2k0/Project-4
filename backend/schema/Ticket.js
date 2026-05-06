const mongoose = require('mongoose');
const Dept = require('./Dept');
const User = require('./User');
const Software = require('./Software');


const TicketSchema = new mongoose.Schema({
  software: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Software',
    required: true,
  },
  Ticketreason: {
    type: String,
    enum: ['new', 'update'],
    required: true,
  },
  reason : {
    type: String,
    required: true,
  },
  Version: {
    type: String,
    required: true,
  },
  URL: {
    type: String
  },
  Dept: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dept',
    required: true,
  },
  Submitter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['open', 'in progress', 'closed'],
    default: 'open',
  },
  Notes: {
    type: String
  },
},{timestamps: true});

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;