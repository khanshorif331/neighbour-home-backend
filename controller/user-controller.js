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
		const data = await User.findById(id)
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// updating a single user data $set needs to be update
const updateUser = async (req, res) => {
	try {
		const id = req.params.id
		const user = req.body
		await User.updateOne(
			{ _id: id },
			{
				$set: user,
			}
		)
		res.status(200).json({
			message: 'User data was updated successfully',
		})
	} catch (err) {
		res.status(500).json({
			message: 'Can not update because of a server side error!',
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

module.exports = { postUser, getAllUser, singleUser, updateUser, deleteUser }
