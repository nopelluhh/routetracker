const router = require('express').Router()

router.get('/login', (req, res) => res.send('booga!'))
router.get('/logout', (req, res) => res.send('logout!'))
router.post('/register')

module.exports = router