const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const Stripe = require('stripe')
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const PORT = process.env.PORT || 5000

const Connection = require('./database/db')
const router = require('./routes/route')

dotenv.config()

// middleware
app.use(cors())
app.use(express.json())

// env variables
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

Connection(USERNAME, PASSWORD)

// payment roooute
app.post('/create-payment-intent', async (req, res) => {
	try {
		const { propertyPrice } = req.body
		const amount = propertyPrice * 100

		// Create a PaymentIntent with the order amount and currency
		const paymentIntent = await stripe.paymentIntents.create({
			amount: amount,
			currency: 'usd',
			payment_method_types: ['card'],
		})
		res.send({
			clientSecret: paymentIntent.client_secret,
		})
	} catch (err) {
		console.log(err)
	}
})

app.use('/', router)

app.get('/', (req, res) => {
	res.send('Welcome to Neighbour Home Serverz')
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
