const mongoose = require('mongoose');
const Dept = require('./Dept');


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
    default: '69f81f40d3353d871939b243'
  },
  notes: {
    type: String,
    default: '',
  },
},{timestamps: true});



const Software = mongoose.model('Software', SoftwareSchema);


module.exports = Software;