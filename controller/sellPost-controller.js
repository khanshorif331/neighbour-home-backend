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

// getting single sellPost data by id
const singleSellPostData = async (req, res) => {
	try {
		const id = req.params.id
		const data = await SellPost.findById(id)
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// updating a single sellPost data $set needs to be update
const updateSellPost = async (req, res) => {
	try {
		const id = req.params.id
		const sellPost = req.body
		await SellPost.updateOne(
			{ _id: id },
			{
				$set: sellPost,
			}
		)
		res.status(200).json({
			message: 'Selling data was updated successfully',
		})
	} catch (err) {
		res.status(500).json({
			message: 'Can not update because of a server side error!',
		})
	}
}

// deleting single sellPost data by id
const deleteSellPost = async (req, res) => {
	try {
		const id = req.params.id
		await SellPost.deleteOne({ _id: id })
		res.status(200).json({
			message: 'SellingPost data was deleted successfully',
		})
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

module.exports = {
	sellPostInfoGet,
	getAllSellPostData,
	singleSellPostData,
	updateSellPost,
	deleteSellPost,
}
