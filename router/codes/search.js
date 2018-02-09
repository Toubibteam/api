'use strict'

const axios = require('axios')
const config = require('../../configs/config')
const logger = require('../../logger')
const basic = require('../../utils/basic.js')

/* Send the user's diagnostic to the ML API for computation.

  PARAM
    req: (object)
      body: (object) must contain
        diagnostic: (string) diagnostic to analyze
    res: (object)

  RETURN
    none
*/
const route = (req, res) => {
  let diagnostic = req.body.diagnostic
  if (basic.isUndefined(diagnostic) || basic.isBlank(diagnostic)) {
    logger.log('error', `missing or invalid parameter: 'diagnostic' (${diagnostic})`)
    return res.sendStatus(400)
  }

  let data = {
    diagnostic: diagnostic
  }

  let headers = {
    'Content-Type': 'application/json'
  }

  axios({
    url: config.ML_API.PHRASE_ANALYSIS,
    method: 'POST',
    data: data,
    headers: headers
  })
    .then(resMlApi => {
      res.status(200).json(resMlApi.data)
    },
    e => {
      logger.log('error', e)
      res.sendStatus(500)
    })
    .catch(e => {
      logger.log('error', e)
      res.sendStatus(500)
    })
}

module.exports = route
