const Pricing = require('../model/pricing-model')

// posting a pricing data
const singlePricingPost = async (req, res) => {
	try {
		const pricing = req.body
		const newPricing = new Pricing(pricing)
		await newPricing.save()
		res.status(200).json({
			message: 'Pricing data saved successfully',
		})
	} catch (err) {
		res.status(500).json({
			message: 'There was a server side error! from pricing',
		})
	}
}

// getting all pricing data
const getAllPricingData = async (req, res) => {
	try {
		const data = await Pricing.find()
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// getting single pricing data by id
const singlePricingData = async (req, res) => {
	try {
		const id = req.params.id
		const data = await Pricing.findById(id)
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

module.exports = { singlePricingPost, getAllPricingData, singlePricingData }
