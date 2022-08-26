const User = require('../model/user-model.js')
const jwt = require('jsonwebtoken')
const checkLogin = require('../middlewares/checkLogin.js')

// posting user email from register
const emailPost = async (req, res) => {
	try {
		const exist = await User.findOne({
			email: req?.body?.email,
		})
		// console.log(exist)
		if (exist?.username) {
			// const token = jwt.sign(
			// 	{
			// 		email: req.body.email,
			// 	},
			// 	process.env.ACCESS_TOKEN_SECRET,
			// 	{
			// 		expiresIn: '1h',
			// 	}
			// )

			return res.status(401).json({
				// accessToken: token,
				message: 'Email data already exists',
				report: 'dataExist',
			})
		} else if (exist) {
			return res.status(401).json({
				message: 'Email already exists',
				report: 'exist',
			})
		} else {
			const userEmail = req.body
			const newUser = new User(userEmail)

			await newUser.save()

			res.send({
				report: 'inserted',
			})
		}
	} catch (err) {
		res.status(500).json({
			message: 'Authentication Failed',
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

// getting all user data by role
const getUserByRole = async (req, res) => {
	try {
		const role = req.params.role
		const data = await User.find({ role: role })
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// getting single user data by id
const singleUser = async (req, res) => {
	try {
		const id = req.params.id
		const data = await User.findById(id)
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// getting single user data by id
const vipFinder = async (req, res) => {
	try {
		const data = await User.find({ vip: true })
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// updating a single user data $set needs to be update
const updateUser = async (req, res) => {
	try {
		const email = req.query.email
		const userData = req.body

		await User.updateOne(
			{ email: email },
			{
				$set: userData,
			}
			// { upsert: true }
		)
		res.status(200).json({
			message: 'User data was updated successfully',
		})
	} catch (err) {
		res.status(500).json({
			message: err.message,
		})
	}
}

// deleting single user data by id
const deleteUser = async (req, res) => {
	try {
		const id = req.params.id
		await User.deleteOne({ _id: id })
		res.status(200).json({
			message: 'User data was deleted successfully',
		})
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// getting single (engineerRoled)user data by email
const getAuthEngineer = async (req, res) => {
	try {
		const email = req.params.email
		const user = await User.findOne({ email: email })
		const isAuthEngineer = user.role === 'Engineer'
		res.status(200).json({ authEngineer: isAuthEngineer })
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// get single user by email
const singleUserByEmail = async (req, res) => {
	try {
		const email = req.params.email
		const data = await User.findOne({ email: email })
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({
			message: 'There was a server side error from email!',
		})
	}
}

module.exports = {
	// postUser,
	getAllUser,
	singleUser,
	updateUser,
	deleteUser,
	emailPost,
	vipFinder,
	getAuthEngineer,
	singleUserByEmail,
	getUserByRole,
}
