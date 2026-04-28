const mongoose = require('mongoose');

const deptSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
});

const Dept = mongoose.model('Dept', deptSchema);

module.exports = Dept; 