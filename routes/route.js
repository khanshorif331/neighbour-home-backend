const express = require('express')
const {
	engineerProfile,
	insertMultipleEngineers,
	updateEngineer,
	getAllEngineers,
} = require('../controller/engineer-controller.js')

const router = express.Router()

// engineers routes
router.post('/engineer', engineerProfile)
router.post('/engineer/all', insertMultipleEngineers)
router.put('/engineer/:id', updateEngineer)
router.get('/engineers', getAllEngineers)

module.exports = router
