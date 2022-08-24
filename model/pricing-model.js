const mongoose = require('mongoose')

const pricingSchema = new mongoose.Schema({
	tag: String,
	price: String,
	period: String,
	description: String,
	benefit: {
		one: String,
		two: String,
		three: String,
		four: String,
		five: String,
	},
})

const pricing = mongoose.model('pricing', pricingSchema)

module.exports = pricing
