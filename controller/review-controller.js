const Review = require('../model/review-model')

// posting a single engineer
const singleReview = async (req, res) => {
	try {
		// const exist = await User.findone({ username: req.body.username })
		// console.log(exist)
		// if (exist) {
		// 	return res.status(401).json({
		// 		message: 'Username already exists',
		// 	})
		// }

		// const engineers = await Engineer.find({})
		// res.send(engineers)

		const review = req.body
		const newReview = new Review(review)
		await newReview.save()
		res.status(200).json({
			message: 'Review saved successfully',
			review,
		})
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

module.exports = singleReview
