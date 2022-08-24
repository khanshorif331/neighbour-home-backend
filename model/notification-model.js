const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
	heading: String,
	data: Date,
})

const notification = mongoose.model('notification', notificationSchema)

module.exports = notification
