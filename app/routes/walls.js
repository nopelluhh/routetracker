const router = require('express').Router()
const generalController = require('../controllers/general.controller')()

router.use('/', generalController.middleware('wall'))

module.exports = router