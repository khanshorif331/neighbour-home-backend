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
		type: String,
		required: true,
	},
	assignment: String,
	discount: String,
	price: {
		type: Number,
		required: true,
	},
})

const constructor = mongoose.model('constructor', constructorSchema)

module.exports = constructor
