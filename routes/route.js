const express = require('express')
const {
	engineerProfile,
	insertMultipleEngineers,
} = require('../controller/engineer-controller.js')

const router = express.Router()

router.post('/engineer', engineerProfile)
router.post('/engineer/all', insertMultipleEngineers)

module.exports = router
