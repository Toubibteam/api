'use strict'

const logger = require('../../logger')
const loggerPrefix = 'API track code selection' + ' >'
const TrackerCodeSelection = require('../../models').TrackerCodeSelection
const basic = require('../../utils/basic.js')

/* Track the selection of a code by a user.
  ARGS:
    req: (object)
      body: (object)
        id: (string) user id
        search: (string) search performed
        code: (string) selected code
        type: (string) type of the selected code
    res: (object)

  RETURN:
    none
*/
const route = (req, res) => {
  let body = req.body
  if (basic.isUndefined(body.id) || basic.isUndefined(body.search) || basic.isUndefined(body.code) || basic.isUndefined(body.type)) {
    logger.log('error', `${loggerPrefix} missing parameters: `, { 'obj': body })
    return res.sendStatus(400)
  }

  if (basic.isBlank(body.id) || basic.isBlank(body.search) || basic.isBlank(body.code) || basic.isBlank(body.type)) {
    logger.log('error', `${loggerPrefix} invalid parameters: `, { 'obj': body })
    return res.sendStatus(400)
  }

  let props = {
    'userId': body.id,
    'search': body.search,
    'code': body.code,
    'type': body.type
  }

  let tracker = new TrackerCodeSelection(props)
  tracker
    .save()
    .then(() => {
      return res.sendStatus(200)
    })
    .catch(err => {
      logger.log('error', err)
      return res.sendStatus(500)
    })
}

module.exports = route
