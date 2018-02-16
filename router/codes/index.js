'use strict'

let router = require('express').Router()

const getDetailsPreview = require('./getDetailsPreview')
const search = require('./search')

router.get('/details/preview/:code', getDetailsPreview)
router.post('/search', search)

module.exports = router
