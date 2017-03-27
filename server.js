require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const session = require('express-session')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const port = process.env.PORT || 8081
const path = require('path')
const routes = require('./app/routes')
const mongoStore = require('connect-mongo')(session)
const passportConfig = require('./config/passport/local')

mongoose.promise = Promise

app.use(require('./static'))

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


app.use(session({
    secret: process.env.PASSPORT_SESSION_SECRET || 'abc1234', // session secret
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    }),
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(passportConfig(passport))
app.use(routes)
mongoose.connect(process.env.MONGO_DB_URL)

app.listen(port, () => console.log(`listening on ${port}`))
