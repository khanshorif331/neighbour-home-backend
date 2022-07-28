const Book = require('../model/review-model')

// posting a book data
const singleBookPost = async (req, res) => {
	try {
		const book = req.body
		const newBook = new Book(book)
		await newBook.save()
		res.status(200).json({
			message: 'Book data saved successfully',
		})
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

module.exports = singleBookPost
