const User = require('../model/user-model.js')

// posting a user data
// const postUser = async (req, res) => {
// 	try {
// 		const user = req.body
// 		const newUser = new User(user)

// 		await newUser.save()
// 		res.status(200).json({
// 			message: 'User data saved successfully',
// 		})
// 	} catch (err) {
// 		res.status(500).json({
// 			message: 'There was a server side error! from user posting',
// 		})
// 	}
// }

// posting user email
const emailPost = async (req, res) => {
	try {
		console.log(req.body)
		const exist = await User.findOne({ email: req.body.email })
		console.log(exist, 'exist')
		if (exist) {
			return res.status(401).json({
				message: 'Email already exists',
				report: 'exist',
			})
		}
		// const userEmail = req.body

		const users = req.body
		const newUser = new User(users)

		await newUser.save()

		// const user = await User.save(req.body)
		res.send({
			// user,
			report: 'inserted',
		})
	} catch (err) {
		res.status(500).json({
			message: err.message,
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
		const data = await User.findById(id)
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// updating a single user data $set needs to be update
const updateUser = async (req, res) => {
	try {
		// const id = req.params.id
		const email = req.query.email
		console.log(email)
		// const user = req.body

		// const exist = await User.findOne({ email: email })
		// console.log(exist)
		// if (exist) {
		// 	// res.status(401).json({
		// 	// 	message: 'Email already exists',
		// 	// 	report: 'exist',
		// 	// })
		// 	const users = req.body
		// 	const newUser = exist.save()

		// 	// await newUser.save()
		// }

		const userData = req.body

		await User.updateOne(
			{ email: email },
			{
				$set: userData,
			}
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

module.exports = {
	postUser,
	getAllUser,
	singleUser,
	updateUser,
	deleteUser,
	emailPost,
}
