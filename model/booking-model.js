const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
	data: {
		name: String,
		customerEmail: String,
		customerAddress: String,
		customerPhone: Number,
	},

	engineer: {
		gender: String,
		name: String,
		picture: String,
		profession: String,
		email: String,
		phone: Number,
		_id: String,
	},
})

const booking = mongoose.model('booking', bookingSchema)

module.exports = booking
