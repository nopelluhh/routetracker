const express = require('express')
const app = express()
const path = require('path')
const static = express.static

module.exports = app

app.use('/assets/js', static(path.join(__dirname, 'build/js')))
app.get('/', (req, res) => res.sendFile('public/index.html', {
    root: __dirname
}))