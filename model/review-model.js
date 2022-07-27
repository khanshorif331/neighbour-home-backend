const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
	// name: {
	// 	type: String,
	// 	required: true,
	// 	minLength: 3,
	// 	maxLength: 20,
	// },
	// picture: String,
	// gender: {
	// 	type: String,
	// 	enum: ['male', 'female'],
	// },
	// surname: {
	// 	type: String,
	// 	minLength: 3,
	// 	maxLength: 30,
	// },
})

const review = mongoose.model('review', reviewSchema)

module.exports = review
