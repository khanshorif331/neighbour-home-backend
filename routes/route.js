const express = require('express')
// const engineerProfile = require('../controller/engineer-controller.js')
// const insertMultipleEngineers = require('../controller/engineer-controller.js')
const {
	engineerProfile,
	insertMultipleEngineers,
} = require('../controller/engineer-controller.js')

const router = express.Router()

// const engineer = require('../model/engineer-model')

router.post('/engineer', engineerProfile)
router.post('/engineer/all', insertMultipleEngineers)

module.exports = router
