'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schemaKey = 'SimilarCodes'
let collection = 'similar_codes'

let schema = new Schema({
  code: { type: String },
  cim: [
    {
      code: { type: String },
      w: { type: Number }
    }
  ],
  ccam: [
    {
      code: { type: String },
      w: { type: Number }
    }
  ]
})

let model = mongoose.model(schemaKey, schema, collection)

module.exports = model
