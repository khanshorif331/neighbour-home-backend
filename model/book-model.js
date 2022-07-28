const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	picture: String,
	stars: {
		type: String,
		required: true,
	},
	reviewTxt: {
		type: String,
		required: true,
		minLength: 5,
		maxLength: 500,
	},
})

const book = mongoose.model('book', bookSchema)

module.exports = book
