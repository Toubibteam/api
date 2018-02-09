'use strict'

let basic = require('../../utils/basic')
let expect = require('chai').expect

describe('MOD basic', () => {
  describe('> isBlank', () => {
    it('> should detect an undefined variable', () => {
      let str

      let expected = true

      expect(basic.isBlank(str)).to.equal(expected)
    })

    it('> should detect an empty string', () => {
      let str = ''

      let expected = true

      expect(basic.isBlank(str)).to.equal(expected)
    })

    it('> should detect a blank string', () => {
      let str = '  '

      let expected = true

      expect(basic.isBlank(str)).to.equal(expected)
    })

    it('> should detect a non blank string', () => {
      let str = ' not blank ! '

      let expected = false

      expect(basic.isBlank(str)).to.equal(expected)
    })
  })
})
