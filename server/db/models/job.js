var db = require('../database');
var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
 client: String,
  // client: {type: Schema.ObjectId, ref: 'ClientSchema'},
 rate: Number,
 start: Date,
 end: Date,
 status: Boolean,
 description: String
});

var Job = mongoose.model('Job', jobSchema);


module.exports = Job;