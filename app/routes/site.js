const router = require('express').Router()

router.get('/', (req, res) => res.send('booga!'))

module.exports = router