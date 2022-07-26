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

const insertMultipleEngineers = async (req, res) => {
	try {
		const multipleEngineers = req.body
		// const newEngineer = new Engineer(engineer)
		await Engineer.insertMany(multipleEngineers)
		// await newEngineer.save()
		res.status(200).json({
			message: 'Engineers posted successfully',
		})
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

module.exports = { engineerProfile, insertMultipleEngineers }
