const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 5000

const Connection = require('./database/db')

dotenv.config()

// middleware
app.use(cors())
app.use(express.json())

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

Connection(USERNAME, PASSWORD)

app.get('/', (req, res) => {
	res.send('Welcome to Neighbour Home Serverz')
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
