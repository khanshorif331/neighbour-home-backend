const User = require('../model/user-model.js')

// posting a user data
const postUser = async (req, res) => {
	try {
		const user = req.body
		const newUser = new User(user)

		await newUser.save()
		res.status(200).json({
			message: 'User data saved successfully',
		})
	} catch (err) {
		res.status(500).json({
			message: 'There was a server side error! from user',
		})
	}
}

// getting all user data
const getAllUser = async (req, res) => {
	try {
		const data = await User.find()
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// getting single user data by id
const singleUser = async (req, res) => {
	try {
		const id = req.params.id
		const data = await Book.findById(id)
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

module.exports = { postUser, getAllUser, singleUser }
