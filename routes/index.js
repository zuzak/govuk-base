module.exports = (app) => {
  require('./health')(app)
  app.get('/', (req, res) => res.render('index.njk'))
}
