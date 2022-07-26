const Constructor = require('../model/constructor-model.js')

// posting a single constructor
const insertConstructor = async (req, res) => {
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

module.exports = insertConstructor

// module.exports = insertConstructor
