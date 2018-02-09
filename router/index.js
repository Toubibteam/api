'use strict'

let router = require('express').Router()

const codes = require('./codes')

router.use('/codes', codes)

module.exports = router
