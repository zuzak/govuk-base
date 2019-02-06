const winston = require('winston')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      json: isProduction,
      logstash: isProduction
    })
  ]
})
