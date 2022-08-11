const express = require('express')

// engineer controllers
const {
	engineerProfile,
	insertMultipleEngineers,
	updateEngineer,
	getAllEngineers,
	singleEngineer,
	deleteEngineer,
} = require('../controller/engineer-controller.js')

// constuctor controllers
const {
	insertConstructor,
	getAllConstructor,
	singleConstructor,
	deleteConstructor,
	updateConstructor,
} = require('../controller/constructor-controller.js')

// review contrllers
const {
	singleReview,
	getAllReview,
	updateReview,
	deleteReview,
} = require('../controller/review-controller.js')

// book controllers
const {
	singleBookPost,
	getAllBook,
	singleBook,
	updateBook,
	deleteBook,
} = require('../controller/book-controller.js')

// user controllers
const {
	postUser,
	getAllUser,
	singleUser,
	updateUser,
	deleteUser,
	emailPost,
	vipFinder,
} = require('../controller/user-controller.js')

// booking controllers
const {
	getAllBooking,
	getBookingDataByEmail,
	singleBookingPost,
	deleteBooking,
} = require('../controller/booking-controller.js')

// sellpost controller
const {
	sellPostInfoGet,
	getAllSellPostData,
	singleSellPostData,
	updateSellPost,
	deleteSellPost,
} = require('../controller/sellPost-controller.js')

const router = express.Router()

// engineers routes
router.post('/engineer', engineerProfile)
router.post('/engineer/all', insertMultipleEngineers)
router.put('/engineer/:id', updateEngineer)
router.get('/engineer', getAllEngineers)
router.get('/engineer/:id', singleEngineer)
router.delete('/engineer/:id', deleteEngineer)

// constructors routes
router.post('/constructor', insertConstructor)
router.get('/constructor', getAllConstructor)
router.get('/constructor/:id', singleConstructor)
router.delete('/constructor/:id', deleteConstructor)
router.put('/constructor/:id', updateConstructor)

// reviews routes
router.post('/review', singleReview)
router.get('/review', getAllReview)
router.put('/review/:id', updateReview)
router.delete('/review/:id', deleteReview)

// book routes
router.post('/book', singleBookPost)
router.get('/book', getAllBook)
router.get('/book/:id', singleBook)
router.put('/book/:id', updateBook)
router.delete('/book/:id', deleteBook)

// user routes
// router.post('/user', postUser)
router.get('/user', getAllUser)
router.get('/user/:id', singleUser)
// in this put method need the quer param as email
router.put('/user', updateUser)
router.delete('/user/:id', deleteUser)
router.post('/user', emailPost)
router.get('/vipUser', vipFinder)

// booking routes
router.get('/booking', getAllBooking)
router.get('/bookingByEmail', getBookingDataByEmail)
router.post('/booking', singleBookingPost)
router.delete('/booking/:id', deleteBooking)

// sellpost routes
router.post('/sellPost', sellPostInfoGet)
router.get('/sellPost', getAllSellPostData)
router.get('/sellPost/:id', singleSellPostData)
router.put('/sellPost/:id', updateSellPost)
router.delete('/sellPost/:id', deleteSellPost)

module.exports = router
