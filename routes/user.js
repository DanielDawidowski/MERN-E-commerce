const express = require('express')
const router = express.Router()

const { sayHuj } = require('../controllers/user')

router.get('/', sayHuj)

module.exports = router;