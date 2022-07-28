const User = require('../model/user-model.js')

// posting a user data
const postUser = async (req, res) => {
	try {
		const user = req.body
		const newUser = new User(user)
		console.log(newUser)

		const data = await newUser.save()
		console.log(data, 'data')
		res.status(200).json({
			message: 'User data saved successfully',
		})
	} catch (err) {
		res.status(500).json({
			message: 'There was a server side error! from user',
		})
	}
}

module.exports = postUser
