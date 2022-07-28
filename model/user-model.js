const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 50,
	},
	username: {
		type: String,
		required: true,
		minlength: 5,
		unique: true,
		maxlength: 50,
	},
	address: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
	},
	zip: {
		type: Number,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
		minlength: 7,
		maxlength: 15,
	},
	country: {
		type: String,
		required: true,
		minlength: 3,
	},
	nid: {
		type: String,
		required: true,
		minlength: 11,
		maxlength: 20,
	},
	photo: String,
	role: {
		type: String,
		enum: ['engineer', 'worker', 'buyer', 'admin'],
	},
})

const user = mongoose.model('user', userSchema)

module.exports = user