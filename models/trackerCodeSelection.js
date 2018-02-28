'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schemaKey = 'TrackerCodeSelection'
let collection = 'tracker_code_selection'

let schema = new Schema({
  // Id of the user that raised the event
  'userId': { type: String },
  // Search performed
  'search': { type: String },
  // Code selected
  'code': { type: String },
  // Type of the code selected
  'type': { type: String },
  // Date when the event was raised
  'timestamp': { type: Date, default: Date.now }
})

let model = mongoose.model(schemaKey, schema, collection)

module.exports = model
