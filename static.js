const express = require('express')
const app = express()
const path = require('path')
const static = express.static

module.exports = app

app.use('/assets/js', static(path.join(__dirname, 'build/js')))

app.use('/templates/:slug', (req, res) => {
    const url = `public/components/${req.params.slug}/${req.params.slug}.html`

    res.sendFile(url, {
        root: __dirname
    })
})

app.get('/', (req, res) => res.sendFile('public/index.html', {
    root: __dirname
}))
