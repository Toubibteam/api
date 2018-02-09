'use strict'

/* Check if a string is empty or blank.

  PARAM
    str: (string)

  RETURN
    (boolean) true if empty or blank / false otherwise
*/
const isBlank = str => {
  if (!str || str.length === 0 || /^[^\S]+$/.test(str)) return true
  else return false
}

/* Check if a parameter is undefined.

  PARAM
    param: (any)

  RETURN
    (boolean) true if undefined / false otherwise
*/
const isUndefined = param => {
  return typeof param === 'undefined'
}

module.exports = {
  isBlank: isBlank,
  isUndefined: isUndefined
}
