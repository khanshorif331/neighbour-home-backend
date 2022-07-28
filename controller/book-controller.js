const Book = require('../model/book-model')

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
		res.status(500).json({
			message: 'There was a server side error! from book',
		})
	}
}

// getting all book data
const getAllBook = async (req, res) => {
	try {
		const data = await Book.find()
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// updating a single book data $set needs to be update
const updateBook = async (req, res) => {
	try {
		const id = req.params.id
		const book = req.body
		await Book.updateOne(
			{ _id: id },
			{
				$set: book,
			}
		)
		res.status(200).json({
			message: 'Book data was updated successfully',
		})
	} catch (err) {
		res.status(500).json({
			message: 'Can not update because of a server side error!',
		})
	}
}

// deleting single book data by id
const deleteBook = async (req, res) => {
	try {
		const id = req.params.id
		await Book.deleteOne({ _id: id })
		res.status(200).json({
			message: 'Book data was deleted successfully',
		})
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

module.exports = { singleBookPost, getAllBook, updateBook, deleteBook }
