const router = require('express').Router()
const teamController = require('../controllers/team.controller')()
const generalController = require('../controllers/general.controller')()

router.get('/current', teamController.current) // needs to be updated once user/team access is implemented
router.use('/', generalController.middleware('team'))

module.exports = router