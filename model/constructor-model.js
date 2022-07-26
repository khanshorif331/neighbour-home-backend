const mongoose = require('mongoose')

const constructorSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		minLength: 3,
	},
	type: String,
	picture: String,
	duration: String,
	assignment: String,
	discount: String,
	price: Number,
})

const constructor = mongoose.model('constructor', constructorSchema)

module.exports = constructor
