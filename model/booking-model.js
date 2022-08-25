const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
	data: {
		customerName: String,
		customerEmail: String,
		customerAddress: String,
		customerPhone: String,
	},

	engineer: {
		gender: String,
		name: String,
		photo: String,
		role: String,
		email: String,
		phone: String,
		_id: String,
	},
	status: String,
})

const booking = mongoose.model('booking', bookingSchema)

module.exports = booking
