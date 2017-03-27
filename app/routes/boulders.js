const router = require('express').Router()
const boulderController = require('../controllers/boulder.controller')()

router.get('/', boulderController.getAll)
router.get('/gym', boulderController.byGym)

module.exports = router
