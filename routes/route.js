const express = require('express')
// verify jwt middleware
const checkLogin = require('../middlewares/checkLogin.js')

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
	// postUser,
	getAllUser,
	singleUser,
	updateUser,
	deleteUser,
	emailPost,
	vipFinder,
	getAuthEngineer,
	singleUserByEmail,
	getUserByRole,
} = require('../controller/user-controller.js')

// booking controllers
const {
	getAllBooking,
	getSingleBooking,
	getBookingDataByEmail,
	getBookingDataByEngineerEmail,
	singleBookingPost,
	deleteBooking,
	deleteAllBooking,
	updateBooking,
} = require('../controller/booking-controller.js')

// sellpost controller
const {
	orderPost,
	getAllOrder,
	singleOrder,
	getOrderDataByEmail,
	deleteOrder,
} = require('../controller/order-controller.js')

// sellpost controller
const {
	sellPostInfoGet,
	getAllSellPostData,
	singleSellPostData,
	updateSellPost,
	deleteSellPost,
	singleSellPostByEmail,
} = require('../controller/sellPost-controller.js')

// sellpost controller
const {} = require('../controller/order-controller')

// pricing controller
const {
	singlePricingPost,
	getAllPricingData,
	singlePricingData,
} = require('../controller/pricing-controller.js')

// notification controller
const {
	singleNotificationPost,
	getAllNotification,
	singleNotification,
	deleteNotification,
	updateNotification,
} = require('../controller/notification-controller.js')

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

// user routes here
// router.post('/user', postUser)
router.get('/user', getAllUser)
router.get('/user/:id', singleUser)
// in this put method need the quer param as email
router.put('/user', updateUser)
router.delete('/user/:id', deleteUser)
router.post('/user', emailPost)
router.get('/vipUser', vipFinder)
router.get('/authEngineer/:email', getAuthEngineer)
router.get('/singleUserByEmail/:email', singleUserByEmail)
router.get('/getUserByRole/:role', getUserByRole)

// booking routes
router.get('/booking', getAllBooking)
router.get('/booking/:id', getSingleBooking)
router.get('/bookingByEmail', getBookingDataByEmail)
router.get('/bookingByEngineerEmail', getBookingDataByEngineerEmail)
router.post('/booking', singleBookingPost)
router.delete('/booking/:id', deleteBooking)
router.delete('/deleteAllBooking', deleteAllBooking)
router.put('/booking/:id', updateBooking)

// order routes
router.get('/order', getAllOrder)
router.get('/orderByEmail', getOrderDataByEmail)
router.post('/order', orderPost)
router.delete('/order/:id', deleteOrder)

// sellpost routes
router.post('/sellPost', sellPostInfoGet)
router.get('/sellPost', getAllSellPostData)
router.get('/sellPost/:id', singleSellPostData)
router.get('/sellPostByEmail', singleSellPostByEmail)
router.put('/sellPost/:id', updateSellPost)
router.delete('/sellPost/:id', deleteSellPost)

// pricing routes
router.post('/pricing', singlePricingPost)
router.get('/pricing', getAllPricingData)
router.get('/pricing/:id', singlePricingData)

// notification routes
router.post('/notification', singleNotificationPost)
router.get('/notification', getAllNotification)
router.get('/notification/:id', singleNotification)
router.delete('/notification/:id', deleteNotification)
router.put('/notification/:id', updateNotification)

module.exports = router
