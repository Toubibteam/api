'use strict'

const defaultConf = {
  APP: 'Catalyser API',
  LOG_FILE: './logs/catalyser_api.log',
  PORT: 8040,
  NODE_ENV: 'dev',
  ML_BASE_API: 'http://localhost:8000',
  MONGODB_URI: 'mongodb://localhost/catalyser_api',

  /* Computed properties (see below) */
  ML_API: { }
}

let config = {}
Object.keys(defaultConf).forEach(key => {
  config[key] = process.env[key] || defaultConf[key]
})

config.ML_API = {
  PHRASE_ANALYSIS: config.ML_BASE_API + '/api'
}

module.exports = config
