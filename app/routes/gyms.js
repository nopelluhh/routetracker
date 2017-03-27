const router = require('express').Router()
const gymController = require('../controllers/gym.controller')()

router.get('/', gymController.getAll)
router.post('/', gymController.create)

module.exports = router
