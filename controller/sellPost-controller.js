const SellPost = require('../model/sellPost-model')

// posting a  sellpost
const sellPostInfoGet = async (req, res) => {
	try {
		const sellPost = req.body
		const newSellPost = new SellPost(sellPost)
		await newSellPost.save()
		res.status(200).json({
			message: 'Review saved successfully',
		})
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

module.exports = sellPostInfoGet
