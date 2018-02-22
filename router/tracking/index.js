'use strict'

let router = require('express').Router()

const codeSelection = require('./codeSelection')

router.post('/code-selection', codeSelection)

module.exports = router
