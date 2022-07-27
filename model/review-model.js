const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
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

const review = mongoose.model('review', reviewSchema)

module.exports = review
