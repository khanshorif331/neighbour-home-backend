const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
	data: {
		name: String,
		customerEmail: String,
		customerAddress: String,
		customerPhone: String,
	},

	engineer: {
		gender: String,
		name: String,
		picture: String,
		profession: String,
		email: String,
		phone: String,
		_id: String,
	},
})

const booking = mongoose.model('booking', bookingSchema)

module.exports = booking
