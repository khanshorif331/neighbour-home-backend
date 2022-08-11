const SellPost = require('../model/sellPost-model')

// posting a  sellpost
const sellPostInfoGet = async (req, res) => {
	try {
		const sellPost = req.body
		const newSellPost = new SellPost(sellPost)
		await newSellPost.save()
		res.status(200).json({
			message: 'Selling data saved successfully',
		})
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// getting all sellPost data
const getAllSellPostData = async (req, res) => {
	try {
		const data = await SellPost.find()
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// getting single book data by id
const singleSellPostData = async (req, res) => {
	try {
		const id = req.params.id
		const data = await SellPost.findById(id)
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

module.exports = { sellPostInfoGet, getAllSellPostData, singleSellPostData }
