const mongoose = require('mongoose')

const engineerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 20,
	},
	picture: String,
	gender: {
		type: String,
		enum: ['male', 'female'],
	},
	surname: {
		type: String,
		minLength: 3,
		maxLength: 30,
	},
	bio: String,
})

const engineer = mongoose.model('engineer', engineerSchema)

module.exports = engineer
