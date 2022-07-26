const express = require('express')
const {
	engineerProfile,
	insertMultipleEngineers,
	updateEngineer,
} = require('../controller/engineer-controller.js')

const router = express.Router()

// engineers routes
router.post('/engineer', engineerProfile)
router.post('/engineer/all', insertMultipleEngineers)
router.put('/engineer/:id', updateEngineer)

module.exports = router
