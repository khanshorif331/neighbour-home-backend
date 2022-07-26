const Constructor = require('../model/constructor-model.js')

// posting a single constructor
const insertConstructor = async (req, res) => {
	try {
		const constructor = req.body
		const newConstructor = new Constructor(constructor)
		await newConstructor.save()
		res.status(200).json({
			message: 'Constructor created successfully',
			constructor,
		})
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// getting all constructor data
const getAllConstructor = async (req, res) => {
	try {
		const data = await Constructor.find()
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// getting single constuctor data by id
const singleConstructor = async (req, res) => {
	try {
		const id = req.params.id
		// const data = await Engineer.find({ _id: id })
		const data = await Constructor.findById(id)
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({
			message: 'Can not get single data because of server side error!',
		})
	}
}

// deleting single constructor data by id
const deleteConstructor = async (req, res) => {
	try {
		const id = req.params.id
		await Constructor.deleteOne({ _id: id })
		res.status(200).json({
			message: 'Constructor data was deleted successfully',
		})
	} catch (err) {
		res.status(500).json({
			message: 'Could not delete because of a server side error!',
		})
	}
}

// updating a single constructor $set needs to be update
const updateConstructor = async (req, res) => {
	try {
		const id = req.params.id
		const data = req.body
		await Constructor.updateOne(
			{ _id: id },
			{
				$set: data,
			}
		)
		res.status(200).json({
			message: 'Constructor data was updated successfully',
		})
	} catch (err) {
		res.status(500).json({
			message: 'Can not update because of a server side error!',
		})
	}
}

module.exports = {
	insertConstructor,
	getAllConstructor,
	singleConstructor,
	deleteConstructor,
	updateConstructor,
}
