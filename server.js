const express = require('express')
const log = require('./logger')
const nunjucks = require('nunjucks')
const path = require('path') // core

const app = module.exports = express()

app.set('views', [
  path.join(__dirname, 'node_modules', 'govuk-frontend'),
  path.join(__dirname, '/views')
])

nunjucks.configure([
  path.join(__dirname, 'node_modules', 'govuk-frontend'),
  path.join(__dirname, '/views')
], {
  express: app
}
)

// app.set('view engine', 'html')

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/', express.static(path.join(__dirname, 'node_modules', 'govuk-frontend')))

require('./routes')(app)

const PORT = 3000
app.listen(3000, () => log.info(`Listening on PORT ${PORT}`))
