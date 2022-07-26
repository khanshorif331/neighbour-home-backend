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

module.exports = router
