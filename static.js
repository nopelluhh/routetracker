const express = require('express')
const app = express()
const path = require('path')
const eStatic = express.static

module.exports = app

app.use('/assets/js', eStatic(path.join(__dirname, 'build/js')))

app.use('/templates/:slug', (req, res) => {
    const slug = req.params.slug
    const url = `public/components/${slug}/${slug}.html`
    res.sendFile(url, {
        root: __dirname
    })
})

app.get('/*', (req, res) => res.sendFile('public/index.html', {
    root: __dirname
}))
