const Review = require('../model/review-model')

// posting a single review
const singleReview = async (req, res) => {
	try {
		const review = req.body
		const newReview = new Review(review)
		await newReview.save()
		res.status(200).json({
			message: 'Review saved successfully',
		})
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// getting all review data
const getAllReview = async (req, res) => {
	try {
		const data = await Review.find()
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// updating a single engineer $set needs to be update
const updateReview = async (req, res) => {
	try {
		const id = req.params.id
		const engineer = req.body
		await Review.updateOne(
			{ _id: id },
			{
				$set: engineer,
			}
		)
		res.status(200).json({
			message: 'Review data was updated successfully',
		})
	} catch (err) {
		res.status(500).json({
			message: 'Can not update because of a server side error!',
		})
	}
}

module.exports = { singleReview, getAllReview, updateReview }
