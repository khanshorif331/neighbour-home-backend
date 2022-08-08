const Booking = require('../model/booking-model')

// posting a booking data
const singleBookingPost = async (req, res) => {
	try {
		console.log('hello')
		const booking = req.body
		console.log(booking)
		const newBooking = new Booking(booking)
		await newBooking.save()
		res.status(200).json({
			message: 'Booking data saved successfully',
		})
	} catch (err) {
		res.status(500).json({
			message: 'There was a server side error! from book',
		})
	}
}

// getting all booking data
const getAllBooking = async (req, res) => {
	try {
		const data = await Booking.find()
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// getting all booking data
const getBookingDataByEmail = async (req, res) => {
	try {
		const email = req.query.email
		const data = await Booking.find({ email: email })
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

module.exports = {
	getAllBooking,
	getBookingDataByEmail,
	singleBookingPost,
}
