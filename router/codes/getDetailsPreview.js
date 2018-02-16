'use strict'

const logger = require('../../logger')
const loggerPrefix = 'API get details preview' + ' >'
const SimilarCodes = require('../../models').SimilarCodes
const basic = require('../../utils/basic.js')

/* Get some details of a code.
  ARGS:
    req: (object)
    res: (object)

  RETURN:
    none
*/
const route = (req, res) => {
  let code = req.params.code
  if (basic.isBlank(code)) {
    logger.log('error', `${loggerPrefix} invalid parameter: code (${code})`)
    return res.sendStatus(400)
  }

  SimilarCodes
    .findOne({ 'code': code })
    .exec()
    .then(similarCodes => {
      return res.status(200).json(similarCodes)
    })
    .catch(e => {
      logger.log('error', e)
      return res.sendStatus(500)
    })
}

module.exports = route
