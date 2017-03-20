const router = require('express').Router()
const fs = require('fs')
const path = require('path')
const routes = fs.readdirSync(path.join(__dirname, 'routes'))

routes.forEach(route => {
    let path = `/${route}`.slice(0, -3)
    let routing = require(`./routes${path}`)
    router.use(path, routing)
})

module.exports = router