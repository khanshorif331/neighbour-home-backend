const Book = require('../model/book-model')

// posting a book data
const singleBookPost = async (req, res) => {
	try {
		const book = req.body

		const newBook = new Book(book)
		console.log(newBook, 'newBook')
		const data = await newBook.save()
		console.log(data, 'data')
		res.status(200).json({
			message: 'Book data saved successfully',
		})
	} catch (err) {
		res.status(500).json({
			message: 'There was a server side error! from book',
		})
	}
}

module.exports = singleBookPost
