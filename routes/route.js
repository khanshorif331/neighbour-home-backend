const express = require('express')
const {
	engineerProfile,
	insertMultipleEngineers,
	updateEngineer,
	getAllEngineers,
	singleEngineer,
	deleteEngineer,
} = require('../controller/engineer-controller.js')

const router = express.Router()

// engineers routes
router.post('/engineer', engineerProfile)
router.post('/engineer/all', insertMultipleEngineers)
router.put('/engineer/:id', updateEngineer)
router.get('/engineer', getAllEngineers)
router.get('/engineer/:id', singleEngineer)
router.delete('/engineer/:id', deleteEngineer)

module.exports = router
