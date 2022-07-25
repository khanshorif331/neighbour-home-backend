const mongoose = require('mongoose')

const engineerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 25,
	},
	picture: String,
	gender: {
		type: String,
		enum: ['male', 'female'],
	},
	surname: String,
})

const engineer = mongoose.model('engineer', engineerSchema)

module.exports = engineer
