'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuotesSchema = new Schema({
	url: String,
	text: String,
	time: String
});

module.exports = mongoose.model('Quotes', QuotesSchema)