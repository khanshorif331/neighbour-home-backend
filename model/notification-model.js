const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
	heading: String,
	date: String,
	user_email: String,
})

const notification = mongoose.model('notification', notificationSchema)

module.exports = notification
