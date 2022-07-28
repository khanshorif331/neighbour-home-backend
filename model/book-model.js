const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 5,
		// maxlength: 255,
	},
	picture: String,
	pdf: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
		minlength: 10,
		// maxlength: 2000,
	},
})

const book = mongoose.model('book', bookSchema)

module.exports = book
