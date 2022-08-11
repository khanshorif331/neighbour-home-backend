const Booking = require('../model/booking-model')

// posting a booking data
const singleBookingPost = async (req, res) => {
	try {
		const booking = req.body
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
		// console.log(email)
		const data = await Booking.find({ 'data.customerEmail': email })
		// console.log(data)
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// deleting single booking data by id
const deleteBooking = async (req, res) => {
	try {
		const id = req.params.id
		await Booking.deleteOne({ _id: id })
		res.status(200).json({
			message: 'Book data was deleted successfully',
		})
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// deleting all booking data by email
const deleteAllBooking = async (req, res) => {
	try {
		const email = req.query.email
		await Booking.deleteMany({ email: email })
		res.status(200).json({
			success: true,
			message: 'Booking data was deleted successfully',
		})
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

module.exports = {
	getAllBooking,
	getBookingDataByEmail,
	singleBookingPost,
	deleteBooking,
	deleteAllBooking,
}
