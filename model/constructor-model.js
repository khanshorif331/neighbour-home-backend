const mongoose = require('mongoose')

const constructorSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		minLength: 3,
	},
	type: {
		type: String,
		required: true,
	},
	picture: String,
	duration: {
		type: Number,
		required: true,
	},
	assignment: Number,
	discount: Number,
	price: {
		type: Number,
		required: true,
	},
	description: String,
})

const constructor = mongoose.model('constructor', constructorSchema)

module.exports = constructor
