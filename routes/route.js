const express = require('express')
const engineerProfile = require('../controller/engineer-controller.js')

const router = express.Router()

// const engineer = require('../model/engineer-model')

router.post('/engineer', engineerProfile)

module.exports = router
