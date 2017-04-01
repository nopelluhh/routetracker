const router = require('express').Router()
const boulderController = require('../controllers/boulder.controller')()
const generalController = require('../controllers/general.controller')()

router.get('/', generalController.getAll('boulder'))
router.get('/gym', boulderController.byGym)
router.post('/', generalController.create('boulder'))

module.exports = router
