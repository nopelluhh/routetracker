require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const port = process.env.port || 8081
const path = require('path')
const routes = require('./app/routes')

app.use(require('./static'))
app.use(routes)

mongoose.connect(process.env.MONGO_DB_URL)

app.listen(port, () => console.log(`listening on ${port}`))
