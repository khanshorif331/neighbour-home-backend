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

module.exports = singlePricingPost
