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

module.exports = singleReview
