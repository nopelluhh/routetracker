const router = require('express').Router()
const fs = require('fs')
const pathUtil = require('path')
const routes = fs.readdirSync(pathUtil.join(__dirname, 'routes')).map(path => '/' + path.slice(0, -3))

routes.forEach(route => {
    let routing = require('./routes' + route)
    router.use('/api' + route, routing)
})

router.get('/*', (req, res) => res.sendFile('public/index.html', {
    root: pathUtil.join(__dirname, '../')
}))

module.exports = router
