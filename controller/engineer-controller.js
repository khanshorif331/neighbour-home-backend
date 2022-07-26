const Engineer = require('../model/engineer-model.js')

// posting a single engineer
const engineerProfile = async (req, res) => {
	try {
		// const exist = await User.findone({ username: req.body.username })
		// console.log(exist)
		// if (exist) {
		// 	return res.status(401).json({
		// 		message: 'Username already exists',
		// 	})
		// }

		// const engineers = await Engineer.find({})
		// res.send(engineers)

		const engineer = req.body
		const newEngineer = new Engineer(engineer)
		await newEngineer.save()
		res.status(200).json({
			message: 'Engineer created successfully',
			engineer,
		})
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// posting multiple engineers data
const insertMultipleEngineers = async (req, res) => {
	try {
		const multipleEngineers = req.body
		await Engineer.insertMany(multipleEngineers)
		res.status(200).json({
			message: 'Engineers were inserted successfully',
		})
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// updating a single engineer $set needs to be update
const updateEngineer = async (req, res) => {
	try {
		const id = req.params.id
		const engineer = req.body
		await Engineer.updateOne(
			{ _id: id },
			{
				$set: engineer,
			}
		)
		res.status(200).json({
			message: 'Engineer data was updated successfully',
		})
	} catch (err) {
		res.status(500).json({
			message: 'Can not update because of a server side error!',
		})
	}
}

// getting all engineers data
const getAllEngineers = async (req, res) => {
	try {
		const data = await Engineer.find()
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// getting single engineer data by id
const singleEngineer = async (req, res) => {
	try {
		const id = req.params.id
		// const data = await Engineer.find({ _id: id })
		const data = await Engineer.findById(id)
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// deleting single constructor data by id
const deleteEngineer = async (req, res) => {
	try {
		const id = req.params.id
		// const data = await Engineer.find({ _id: id })
		await Engineer.deleteOne({ _id: id })
		res.status(200).json({
			message: 'Engineer data was deleted successfully',
		})
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

module.exports = {
	engineerProfile,
	insertMultipleEngineers,
	updateEngineer,
	getAllEngineers,
	singleEngineer,
	deleteEngineer,
}
