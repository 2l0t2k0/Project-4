const mongoose = require('mongoose');

const SoftwareSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  version: {
    type: String,
    required: true,
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

const Software = mongoose.model('Software', SoftwareSchema);

module.exports = Software;