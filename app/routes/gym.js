const router = require('express').Router()
const gymController = require('../controllers/gym.controller')()

router.get('/', gymController.getAll)

module.exports = router
