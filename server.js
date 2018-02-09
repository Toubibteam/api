'use strict'

const config = require('./configs/config')

// Connection to the database
let mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(config.MONGODB_URI, { useMongoClient: true })

const logger = require('./logger')

// Set up of the server
let express = require('express')
let app = express()
let bodyParser = require('body-parser')

const router = require('./router')

app.use(bodyParser.urlencoded({ extended: 'true' }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use('/', router)

app.listen(config.PORT)

logger.log('info', `server listening on port ${config.PORT}`)
