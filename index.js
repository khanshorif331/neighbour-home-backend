const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 5000

dotenv.config()

// middleware
app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
