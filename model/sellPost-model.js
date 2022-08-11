const mongoose = require('mongoose')

const sellPostSchema = new mongoose.Schema({
	email: String,
	propertyName: String,
	propertyType: String,
	sellerName: String,
	images: String,
	propertyPrice: Number,
	rating: Number,
	width: String,
	length: String,
	location: String,
	totalarea: String,
	selingarea: String,
})

const sellPost = mongoose.model('sellPost', sellPostSchema)

module.exports = sellPost
