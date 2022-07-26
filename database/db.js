const mongoose = require('mongoose')

const Connection = async (username, password) => {
	const URL = `mongodb+srv://${username}:${password}@endgame.3bema.mongodb.net/neighbour-home`
	try {
		await mongoose.connect(URL, {
			useUnifiedtopology: true,
			useNewUrlParser: true,
		})
		console.log('Database connected successfully')
	} catch (error) {
		console.log('Error while connecting to Database', error.message)
	}
}

module.exports = Connection
