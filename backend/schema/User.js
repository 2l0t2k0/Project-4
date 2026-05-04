const Dept = require('./Dept');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashedpassword: {
    type: String,
    required: true,
  },
  Dept: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dept',
    default: 'General'
  },
  Permissions: {
    type: String,
    enum: ['User', 'Admin', 'SuperAdmin'],
    default: 'User'
  }
},{timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;