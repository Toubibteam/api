'use strict'

let router = require('express').Router()

const codes = require('./codes')
const tracking = require('./tracking')

router.use('/codes', codes)
router.use('/tracking', tracking)

module.exports = router
