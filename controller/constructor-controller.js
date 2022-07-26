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
		const data = await Constructor.find({})
		res.status(200).json({
			result: data,
		})
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
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

module.exports = { insertConstructor, getAllConstructor, singleConstructor }

// module.exports = insertConstructor
