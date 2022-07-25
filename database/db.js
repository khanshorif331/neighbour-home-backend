import mongoose from 'mongoose'

const Connection = async (username, password) => {
	const URL = `mongodb+srv://${username}:${password}@endgame.3bema.mongodb.net/?retryWrites=true&w=majority`
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
